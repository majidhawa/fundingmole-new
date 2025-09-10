function QA({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="card p-5">
      <h3 className="font-semibold text-brand-navy">{q}</h3>
      <div className="mt-2 text-sm text-brand-muted">{a}</div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <QA q="Will this hurt my credit?" a="No — pre-qualification uses soft pulls, not hard inquiries." />
        <QA q="How fast can I get funded?" a="Many approvals complete within 24–72 hours after we receive your documents." />
        <QA q="What credit score do I need?" a="600 minimum. If you’re under 600, visit our Credit Assistance page to rebuild first." />
        <QA q="What’s the max loan amount?" a="Business up to $500K+ and personal up to $50K, depending on your profile." />
        <QA q="Is my information safe?" a="Yes. Upload PDFs only. We never sell your data." />
        <QA q="What documents are required?" a="Typically your full credit report PDF, government ID, and recent bank statements (business or personal)." />
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="/apply" className="btn-primary">Start Your Application</a>
        <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" rel="noopener noreferrer" className="btn-outline">
          Check Your FICO
        </a>
      </div>
    </div>
  );
}
