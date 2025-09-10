export default function Services() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="section-title">Services</h1>
      <p className="mt-2 text-brand-muted">Explore business and personal funding options.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Business */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold text-brand-navy">Business Funding</h2>
          <ul className="mt-3 list-disc list-inside text-brand-muted">
            <li>MCA’s</li><li>SBA Loans</li><li>Business Loans</li><li>Lines of Credit</li><li>Business Credit Cards</li><li>Equipment Financing</li><li>Merchant Accounts</li>
          </ul>
          <p className="mt-3 text-sm text-brand-muted">Requirements: EIN, 3+ months in business bank statements, 600+ FICO</p>
        </section>

        {/* Personal */}
        <section className="card p-6">
          <h2 className="text-xl font-semibold text-brand-navy">Personal Funding</h2>
          <ul className="mt-3 list-disc list-inside text-brand-muted">
            <li>Personal Loans</li><li>Credit Cards</li><li>Auto Loans</li><li>Boat Loans</li><li>Home Loans</li>
          </ul>

          <div className="mt-4 space-y-3 text-sm">
            <p className="text-brand-navy font-medium">Financial Plans</p>
            <p className="text-brand-muted">Not where you want to be? We’ll build a plan for you or your business.</p>
            <p className="text-brand-navy"><b>Consultation:</b> $250 • Go from zero to 60 in 90 days.</p>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p className="text-brand-navy font-medium">Business Builder Packages</p>
            <p className="text-brand-muted"><b>1)</b> EIN only + step-by-step registration guide: $250</p>
            <p className="text-brand-muted"><b>2)</b> We do it all — EIN, register, and website: $1,500</p>
          </div>
        </section>
      </div>
    </div>
  );
}
