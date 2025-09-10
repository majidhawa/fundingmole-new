export default function Contact() {
  return (
    <div className="container py-12 md:py-16 max-w-2xl">
      <h1 className="section-title">We’re Here to Help</h1>
      <p className="mt-2 text-brand-muted">Have a question or message? We’d love to hear from you.</p>

      <form className="mt-8 grid gap-5">
        <div>
          <label className="block text-sm mb-1 text-brand-muted">Your Email</label>
          <input type="email" className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1 text-brand-muted">Message</label>
          <textarea className="w-full rounded-xl2 border border-brand-border px-3 py-2 h-40" placeholder="Write your message..." />
        </div>
        <button className="btn-primary">Send</button>
      </form>
    </div>
  );
}
