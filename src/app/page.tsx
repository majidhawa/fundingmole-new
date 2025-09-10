import Link from "next/link";
import Image from "next/image";

const benefits = [
  "Fast approvals",
  "Soft credit checks",
  "Loan amounts up to $500K",
  "Funding within 24–72 hours",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <span className="chip">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
              FundingMole • Nationwide lender network
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Fast, Flexible Business & Personal Funding — Without the Hassle
            </h1>
            <p className="mt-4 text-lg text-brand-muted">
              Get funded today with options for both personal and business loans — starting at <b className="text-brand-navy">600 FICO</b>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/how-it-works" className="btn-primary">Learn How It Works</Link>
              <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" rel="noopener noreferrer" className="btn-outline">Check Your FICO</a>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-muted">
              <li>• Soft pulls</li><li>• Up to $500K</li><li>• 24–72 hr funding</li><li>• No upfront fees</li>
            </ul>
          </div>

          <div className="card relative overflow-hidden">
            <Image src="/hero-collage.png" alt="Customers getting funded" width={1200} height={900} className="w-full h-auto object-cover" />
            <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
          </div>
        </div>
      </section>

      {/* Benefits row */}
      <section className="bg-white">
        <div className="container py-10">
          <h2 className="section-title">Why FundingMole?</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-4">
            {benefits.map((b) => (
              <li key={b} className="card p-5 hover:shadow-md transition">
                <div className="font-medium text-brand-navy">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mini How it works */}
      <section className="bg-white">
        <div className="container py-10">
          <h2 className="section-title">How It Works</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {["Pre-Qualification (soft pull)","Upload Documents (secure)","Get Funded (24–72 hrs)"].map((s, i) => (
              <li key={s} className="card p-5">
                <div className="text-brand-muted text-sm mb-1">Step {i+1}</div>
                <div className="font-semibold text-brand-navy">{s}</div>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex gap-3">
            <Link href="/how-it-works" className="btn-ghost">Learn more →</Link>
            <Link href="/apply" className="btn-primary">Start Application</Link>
          </div>
        </div>
      </section>
    </>
  );
}
