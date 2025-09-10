import Link from "next/link";

export default function CreditAssistance() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="section-title">Not at 600 Yet? We’ve Got You Covered.</h1>
      <p className="mt-2 text-brand-muted">Our Credit Assistance helps rebuild your credit so you qualify for funding.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { t: "Dispute negative marks", d: "Identify and dispute inaccurate or unfair items." },
          { t: "Add positive tradelines", d: "Build positive history with responsible accounts." },
          { t: "Coaching on usage", d: "Utilization, on-time payments, and healthy mix." },
        ].map((x) => (
          <div key={x.t} className="card p-5">
            <p className="font-semibold text-brand-navy">{x.t}</p>
            <p className="text-sm text-brand-muted mt-1">{x.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/apply" className="btn-primary">Start Credit Assistance</Link>
        <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" className="btn-outline">Check Your FICO</a>
      </div>
    </div>
  );
}
