import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export const runtime = "nodejs"; 

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}


const transporter = nodemailer.createTransport({
  host: requireEnv("SMTP_HOST"),
  port: Number(requireEnv("SMTP_PORT")),
  secure: true, 
  auth: {
    user: requireEnv("SMTP_USER"),
    pass: requireEnv("SMTP_PASS"),
  },
});

function getErrMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return "Unknown error";
  }
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Fields
    const fullName = (form.get("fullName") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const phone = (form.get("phone") || "").toString().trim();
    const type = (form.get("type") || "").toString().trim(); 
    const amount = (form.get("amount") || "").toString().trim();
    const monthly = (form.get("monthly") || "").toString().trim();
    const fico = (form.get("fico") || "").toString().trim();
    const notes = (form.get("notes") || "").toString().trim();

    if (!fullName || !email || !phone || !type || !amount || !monthly || !fico) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const fileEntries = form.getAll("files") as File[];
    const attachments: Mail.Attachment[] = await Promise.all(
      fileEntries.map(async (file) => {
        const MAX_FILE_MB = 10;
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > MAX_FILE_MB) {
          throw new Error(`A file exceeds ${MAX_FILE_MB}MB: ${file.name}`);
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name || "attachment.pdf",
          content: buffer,
          contentType: file.type || "application/octet-stream",
        };
      })
    );

  
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

    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text,
      html,
      replyTo: email,
      attachments,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
  const msg = err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
  console.error("[/api/apply] Error:", msg);
  return new Response(JSON.stringify({ error: String(msg) || "Email send failed." }), { status: 500 });
}
}
