import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensures Node runtime (not edge)

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

// Create a single transporter (re-used between calls)
const transporter = nodemailer.createTransport({
  host: requireEnv("SMTP_HOST"),
  port: Number(requireEnv("SMTP_PORT")),
  secure: true, // true for 465, false for 587 (STARTTLS). We’re using 465.
  auth: {
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
  },
});

export async function POST(req: NextRequest) {
  try {
    // Parse multipart form (Next 14+/15 supports request.formData())
    const form = await req.formData();

    // Pull fields
    const fullName = (form.get("fullName") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const type = (form.get("type") || "").toString().trim(); // Business | Personal
    const amount = (form.get("amount") || "").toString().trim();
    const monthly = (form.get("monthly") || "").toString().trim();
    const fico = (form.get("fico") || "").toString().trim();
    const notes = (form.get("notes") || "").toString().trim();

    // Basic validation
    if (!fullName || !email || !phone || !type || !amount || !monthly || !fico) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    // Collect any uploaded files (key: "files")
    // Because <input name="files" multiple>, there may be multiple entries with the same name
    const fileEntries = form.getAll("files") as File[];
    const attachments = await Promise.all(
      fileEntries.map(async (file) => {
        // Safety limits
        const MAX_FILE_MB = 10; // single file guard (you already limit combined on UI)
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > MAX_FILE_MB) throw new Error(`A file exceeds ${MAX_FILE_MB}MB: ${file.name}`);

        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name || "attachment.pdf",
          content: buffer,
          contentType: file.type || "application/octet-stream",
        };
      })
    );

    // Build email content
    const CONTACT_TO = requireEnv("CONTACT_TO");
    const CONTACT_FROM = requireEnv("CONTACT_FROM");

    const subject = `New Application — ${fullName} (${type})`;
    const text = `
New application received:

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Funding Type: ${type}
Amount Needed (USD): ${amount}
Monthly Revenue/Income: ${monthly}
FICO Range: ${fico}

Notes:
${notes || "(none)"}    
    `.trim();

    const html = `
      <div style="font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;font-size:14px;line-height:1.6;color:#0A0D14">
        <h2 style="margin:0 0 12px 0;color:#081E3F">New Application — ${fullName} (${type})</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tbody>
            <tr><td style="padding:6px 0"><b>Name:</b> ${fullName}</td></tr>
            <tr><td style="padding:6px 0"><b>Email:</b> ${email}</td></tr>
            <tr><td style="padding:6px 0"><b>Phone:</b> ${phone}</td></tr>
            <tr><td style="padding:6px 0"><b>Funding Type:</b> ${type}</td></tr>
            <tr><td style="padding:6px 0"><b>Amount Needed (USD):</b> ${amount}</td></tr>
            <tr><td style="padding:6px 0"><b>Monthly Revenue/Income:</b> ${monthly}</td></tr>
            <tr><td style="padding:6px 0"><b>FICO Range:</b> ${fico}</td></tr>
          </tbody>
        </table>
        <div style="margin-top:12px">
          <b>Notes:</b>
          <div>${(notes || "(none)").replace(/\n/g, "<br/>")}</div>
        </div>
        <p style="margin-top:16px;color:#6B7280">Attachments: ${attachments.length} file(s) included.</p>
      </div>
    `;

    // Send with Nodemailer
    await transporter.sendMail({
      from: CONTACT_FROM,              // visible From
      to: CONTACT_TO,                  // your inbox
      subject,
      text,
      html,
      replyTo: email,                  // hitting reply goes back to applicant
      attachments,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error("[/api/apply] Error:", err);
    return new Response(JSON.stringify({ error: err?.message || "Email send failed." }), { status: 500 });
  }
}
