import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // not edge

// Lazy cache for transporter (per process)
let cachedTransporter: nodemailer.Transporter | null = null;

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  return v && v.length ? v : undefined;
}

function assertEnv(...names: string[]) {
  const missing = names.filter((n) => !getEnv(n));
  if (missing.length) {
    throw new Error(`Email is not configured (missing: ${missing.join(", ")})`);
  }
}

function getTransporter(): nodemailer.Transporter {
  if (cachedTransporter) return cachedTransporter;

  // Will throw if any are missing — but only when the API is actually called
  assertEnv("SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS");

  const host = getEnv("SMTP_HOST")!;
  const port = Number(getEnv("SMTP_PORT")!);
  const user = getEnv("SMTP_USER")!;
  const pass = getEnv("SMTP_PASS")!;

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587
    auth: { user, pass },
  });

  return cachedTransporter;
}

export async function POST(req: NextRequest) {
  try {
    // Parse multipart form
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

    // Files (may be multiple)
    const files = form.getAll("files") as File[];
    const attachments = await Promise.all(
      files.map(async (file) => {
        const MAX_MB = 10;
        if (file.size / (1024 * 1024) > MAX_MB) {
          throw new Error(`A file exceeds ${MAX_MB}MB: ${file.name}`);
        }
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name || "attachment.pdf",
          content: buffer,
          contentType: file.type || "application/octet-stream",
        };
      })
    );

    // Email addressing (read lazily)
    const CONTACT_TO = getEnv("CONTACT_TO") || getEnv("SMTP_USER");   // fallback to user
    const CONTACT_FROM = getEnv("CONTACT_FROM") || getEnv("SMTP_USER"); // Gmail requires from=user
    if (!CONTACT_TO || !CONTACT_FROM) {
      throw new Error("Email is not configured (missing CONTACT_TO/CONTACT_FROM).");
    }

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

    // Send email (transporter created on demand)
    const transporter = getTransporter();
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
  } catch (err) {
    const msg =
      err instanceof Error ? err.message : typeof err === "string" ? err : "Email send failed.";
    console.error("[/api/apply] Error:", err);
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
