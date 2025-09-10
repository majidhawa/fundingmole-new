"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSend(e) {
    e.preventDefault();
    setStatus(null);

    if (!email || !message) {
      setStatus({ ok: false, msg: "Please enter your email and a message." });
      return;
    }
    if (hp) {
      setStatus({ ok: true, msg: "Thanks! (spam check passed)" });
      return;
    }

    setLoading(true);

    const templateParams = { user_email: email, message };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({ ok: true, msg: "✅ Message sent successfully!" });
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({ ok: false, msg: "❌ Failed to send. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-brand-blue/10 min-h-screen py-12 md:py-16">
      <div className="container max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <div className="chip mx-auto">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
            We’re here to help
          </div>
          <h1 className="mt-3 section-title text-brand-blue">Contact Us</h1>
          <p className="mt-2 text-brand-navy/80">
            Have a question or message? We’d love to hear from you.
          </p>
        </div>

        {/* Status banner */}
        {status && (
          <div
            className={`mt-6 rounded-xl2 border px-4 py-3 text-center ${
              status.ok
                ? "border-brand-blue/30 bg-white text-brand-navy"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {status.msg}
          </div>
        )}

        {/* Form card */}
        <form
          onSubmit={handleSend}
          className="mt-10 card bg-white p-8 shadow-soft grid gap-5"
        >
          <label className="hidden">
            Do not fill this field
            <input value={hp} onChange={(e) => setHp(e.target.value)} />
          </label>

          <div>
            <label className="block text-sm mb-1 text-brand-muted">Your Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl2 border border-brand-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-brand-muted">Message</label>
            <textarea
              required
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-40 rounded-xl2 border border-brand-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" disabled={loading} className="btn-primary flex-1">
              {loading ? "Sending..." : "Send Message"}
            </button>
            <Link href="/faq" className="btn-outline flex-1 text-center">
              View FAQs
            </Link>
          </div>

          <p className="text-xs text-brand-muted text-center mt-2">
            We will reply to you at the email you provide. <br />
            Please do not include sensitive details like passwords.
          </p>
        </form>
      </div>
    </div>
  );
}
