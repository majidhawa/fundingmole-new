
"use client"
import Image from "next/image";
import Link from "next/link";

/** Tiny inline icons (no extra packages) */
const Icons = {
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 3 4.5 6v6.4c0 4 3 7.2 7.5 8.6 4.5-1.4 7.5-4.6 7.5-8.6V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Clock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Lock: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Briefcase: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M3 9h18v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 9V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  User: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20c1.8-3.5 5-5.5 8-5.5S18.2 16.5 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}>
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function About() {
  return (
    <>
      {/* HERO: clean SoFi-blue band */}
      <section className="bg-brand-blue text-white">
        <div className="container py-12 md:py-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-white inline-block" />
            FundingMole • Nationwide network
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Who We Are
          </h1>
          <p className="mt-2 max-w-2xl text-white/90">
            We help individuals and businesses access fast, transparent capital. Real people, clear steps, no upfront fees.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/apply" className="btn-primary bg-white text-brand-navy border-white hover:brightness-95">
              Start Application
            </Link>
            <Link href="/how-it-works" className="btn-outline bg-transparent text-white border-white hover:bg-white/10">
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* TRUSTED BY (auto-scrolling marquee; pure CSS) */}
      <section className="bg-white">
        <div className="container py-6">
          <div className="rounded-xl2 border border-brand-border bg-brand-sky/60 p-4 overflow-hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-brand-navy/80">Trusted by borrowers nationwide</p>
            </div>
            <div className="relative mt-3 overflow-hidden">
              <div className="marquee flex gap-10 will-change-transform">
                {/* Two copies for an infinite loop feel */}
                {[0, 1].map((row) => (
                  <div key={row} className="flex items-center gap-10">
                    <Image src="/badges.png" alt="Badges" width={320} height={40} className="h-10 w-auto object-contain" />
                    <Image src="/hero-collage.png" alt="Collage" width={320} height={40} className="h-10 w-auto object-contain rounded-md" />
                    <div className="chip bg-white"><span className="inline-block h-2 w-2 rounded-full bg-brand-blue" /> 50 states</div>
                    <div className="chip bg-white"><span className="inline-block h-2 w-2 rounded-full bg-brand-blue" /> 24–72h typical</div>
                    <div className="chip bg-white"><span className="inline-block h-2 w-2 rounded-full bg-brand-blue" /> Soft pull pre-qual</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Styled-JSX for marquee keyframes */}
        <style jsx>{`
          .marquee {
            animation: scroll 22s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* VALUE CARDS: airy, icon-led, blue-accent */}
      <section className="bg-brand-sky">
        <div className="container py-12">
          <h2 className="section-title">What Makes Us Different</h2>
          <p className="mt-2 text-brand-muted max-w-2xl">
            Clarity over complexity. We streamline funding while protecting your credit and privacy.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="card p-6 hover:shadow-md transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue/10 text-brand-blue">
                <Icons.Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-semibold text-brand-navy">Transparent, always</h3>
              <p className="mt-1 text-sm text-brand-muted">
                No upfront fees. We explain terms before you decide.
              </p>
            </div>

            <div className="card p-6 hover:shadow-md transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue/10 text-brand-blue">
                <Icons.Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-semibold text-brand-navy">Speed without the stress</h3>
              <p className="mt-1 text-sm text-brand-muted">
                Soft-pull pre-qual and streamlined docs mean fast decisions—often within 24–72 hours.
              </p>
            </div>

            <div className="card p-6 hover:shadow-md transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue/10 text-brand-blue">
                <Icons.Lock className="h-6 w-6" />
              </div>
              <h3 className="mt-3 font-semibold text-brand-navy">Privacy-first</h3>
              <p className="mt-1 text-sm text-brand-muted">
                Upload secure PDFs only. Never share passwords. We don’t sell your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES: expanded but breathable */}
      <section className="bg-white">
        <div className="container py-12">
          <h2 className="section-title">What We Offer</h2>
          <p className="mt-2 text-brand-muted max-w-2xl">
            Business and personal options, plus strategic planning to get you “funding-ready.”
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Business Funding */}
            <div className="card p-6 border-brand-blue/30">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icons.Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">Business Funding</h3>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
                <li>• MCA’s</li>
                <li>• SBA Loans</li>
                <li>• Business Loans</li>
                <li>• Lines of Credit</li>
                <li>• Business Credit Cards</li>
                <li>• Equipment Financing</li>
                <li>• Merchant Accounts</li>
              </ul>

              <div className="mt-4 rounded-xl2 border border-brand-border bg-brand-sky/60 p-4">
                <p className="text-sm text-brand-navy">
                  <b>Requirements:</b> EIN, 3+ months in business bank statements, 600+ FICO.
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <Link href="/apply" className="btn-primary">Apply for Business Funding</Link>
                <Link href="/how-it-works" className="btn-outline">See Process</Link>
              </div>
            </div>

            {/* Personal Funding + Plans */}
            <div className="card p-6 border-brand-blue/30">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <Icons.User className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">Personal Funding</h3>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-brand-muted">
                <li>• Personal Loans</li>
                <li>• Credit Cards</li>
                <li>• Auto Loans</li>
                <li>• Boat Loans</li>
                <li>• Home Loans</li>
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl2 border border-brand-border bg-white p-4">
                  <p className="text-brand-navy font-medium">Financial Plans</p>
                  <p className="mt-1 text-sm text-brand-muted">
                    Not where you want to be? We’ll create a personalized plan for you or your business.
                  </p>
                  <p className="mt-2 text-sm text-brand-navy">
                    <b>Consultation:</b> $250 — go from zero to 60 in 90 days.
                  </p>
                </div>
                <div className="rounded-xl2 border border-brand-border bg-white p-4">
                  <p className="text-brand-navy font-medium">Business Builder Packages</p>
                  <ul className="mt-2 space-y-2 text-sm text-brand-muted">
                    <li><b>1)</b> EIN only + DIY registration guide — <b>$250</b></li>
                    <li><b>2)</b> We do it all — EIN, registration, and a business website — <b>$1,500</b></li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <Link href="/apply" className="btn-primary">Apply for Personal Funding</Link>
                <Link href="/contact" className="btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINI PROCESS: 3 quick steps with light blue cards */}
      <section className="bg-brand-sky">
        <div className="container py-12">
          <h2 className="section-title">Simple Path to Funding</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { step: 1, t: "Pre-Qual (Soft Pull)", d: "See your full 3-bureau report and save the PDF. No hard inquiry." },
              { step: 2, t: "Upload Docs", d: "PDF credit report, ID, and recent bank statements (business or personal)." },
              { step: 3, t: "Get Funded", d: "If terms look good, finalize and receive funds—often within 24–72 hours." },
            ].map((s) => (
              <li key={s.step} className="card p-5 hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white text-sm">{s.step}</span>
                  <p className="font-semibold text-brand-navy">{s.t}</p>
                </div>
                <p className="mt-2 text-sm text-brand-muted">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">Start Application</Link>
            <a
              href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Check Your FICO
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS: spaced, blue-tinted */}
      <section className="bg-white">
        <div className="container py-12">
          <h2 className="section-title">What Clients Say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { q: "FundingMole got us approved in 2 days. The process was super clear.", n: "Sarah K., Small Business Owner" },
              { q: "I thought I’d never qualify with my score. Their team walked me through everything.", n: "James R., Entrepreneur" },
              { q: "No hidden fees, no nonsense. Exactly what they promised.", n: "Maria L., Contractor" },
            ].map((t) => (
              <div key={t.n} className="rounded-xl2 border border-brand-blue/30 bg-brand-sky p-5">
                <p className="text-brand-navy italic">“{t.q}”</p>
                <p className="mt-3 text-sm font-medium text-brand-muted">{t.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-blue/5">
        <div className="container py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl2 border border-brand-blue/30 bg-white p-5">
            <div>
              <p className="text-sm font-semibold text-brand-navy/80">Ready when you are</p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">See your funding options now</h3>
              <p className="mt-2 text-brand-muted">No upfront fees. Soft pull for pre-qual. Upload PDF only.</p>
            </div>
            <div className="flex gap-2">
              <Link href="/apply" className="btn-primary">Start Application</Link>
              <Link href="/how-it-works" className="btn-outline">How it works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
