import Link from "next/link";
import Image from "next/image";

/** Lightweight inline icons (no extra deps) */
const Icons = {
  Credit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="12.5" width="6" height="3" rx="0.8" fill="currentColor" />
    </svg>
  ),
  Upload: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5V15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 15V4m0 0-3.5 3.5M12 4l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Rocket: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14.5 3.5S18 4 20 6s2.5 5.5 2.5 5.5-3.5 1-6 3.5c-2.6 2.6-5.5 6-5.5 6S9 19 7.5 17.5 4 14.5 4 14.5s3.4-3 6-5.5c2.5-2.5 4.5-5.5 4.5-5.5Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </svg>
  ),
  Shield: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 3 4.5 6v6.4c0 4 3 7.2 7.5 8.6 4.5-1.4 7.5-4.6 7.5-8.6V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const benefits = [
  { title: "Fast approvals", blurb: "Streamlined pre-qualification and clear next steps." },
  { title: "Soft credit checks", blurb: "Pre-qual uses soft pulls—protect your score." },
  { title: "Up to $500K", blurb: "Personal & business options sized for your goals." },
  { title: "24–72 hr funding", blurb: "Once docs are set, funds can land fast." },
];

export default function Home() {
  return (
    <>
      {/* HERO — bold SoFi-blue presence */}
      <section className="relative bg-brand-sky">
        <div
          aria-hidden
          className="absolute inset-x-0 -top-24 h-40"
          style={{
            background:
              "radial-gradient(50rem 12rem at 10% 0%, rgba(0,166,255,0.25) 0%, rgba(0,166,255,0) 60%), radial-gradient(40rem 10rem at 90% 10%, rgba(0,166,255,0.20) 0%, rgba(0,166,255,0) 60%)",
          }}
        />
        <div className="container relative grid gap-10 py-16 md:grid-cols-2 md:py-20">
          {/* Copy */}
          <div>
            <span className="chip bg-white border-brand-border">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
              FundingMole • Nationwide lender network
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy">
              Fast, Flexible Business & Personal Funding — Without the Hassle
            </h1>

            <p className="mt-4 text-lg text-brand-muted">
              Real people. Clear steps. No upfront fees. Get options for personal and business loans — starting at{" "}
              <b className="text-brand-navy">600 FICO</b>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/how-it-works" className="btn-primary">Learn How It Works</Link>
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Check Your FICO
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-navy/70">
              <li>• Soft pulls</li>
              <li>• Up to $500K</li>
              <li>• 24–72 hr funding</li>
              <li>• No upfront fees</li>
            </ul>
          </div>

          {/* Visual card with blue frame */}
          <div className="card relative overflow-hidden border-brand-blue/30">
            <Image
              src="/hero-image.jpg"
              alt="Customers getting funded"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
            <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
          </div>
        </div>
      </section>

      {/* STATS STRIP — deeper blue band */}
      <section className="bg-brand-blue text-white">
        <div className="container py-8">
          <ul className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-4">
            <li className="rounded-xl2 border border-white/20 px-4 py-5">
              <div className="text-3xl font-extrabold tracking-tight">600+</div>
              <div className="mt-1 text-sm text-white/90">Minimum FICO to apply</div>
            </li>
            <li className="rounded-xl2 border border-white/20 px-4 py-5">
              <div className="text-3xl font-extrabold tracking-tight">$500K</div>
              <div className="mt-1 text-sm text-white/90">Max business funding</div>
            </li>
            <li className="rounded-xl2 border border-white/20 px-4 py-5">
              <div className="text-3xl font-extrabold tracking-tight">24–72h</div>
              <div className="mt-1 text-sm text-white/90">Typical funding speed</div>
            </li>
            <li className="rounded-xl2 border border-white/20 px-4 py-5">
              <div className="text-3xl font-extrabold tracking-tight">50</div>
              <div className="mt-1 text-sm text-white/90">States we serve</div>
            </li>
          </ul>
        </div>
      </section>

      {/* WHY FUNDINGMOLE — benefits */}
      <section className="bg-white">
        <div className="container py-12">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="section-title">Why FundingMole?</h2>
            <div className="flex items-center gap-2 text-sm">
              <span className="chip">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
                No upfront fees
              </span>
              <span className="chip">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
                Real people
              </span>
            </div>
          </div>

          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <li key={b.title} className="card group overflow-hidden">
                <div className="p-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky px-3 py-1 text-xs text-brand-navy">
                    ✓ Benefit
                  </div>
                  <h3 className="mt-3 font-semibold text-brand-navy">{b.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted">{b.blurb}</p>
                </div>
                <div className="h-1 w-full bg-brand-blue/20 group-hover:bg-brand-blue transition" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT WE OFFER — puts FundingMole services front & center */}
      <section className="bg-brand-sky">
        <div className="container py-12">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2 className="section-title">What We Offer</h2>
            <p className="max-w-xl text-brand-muted">
              Whether you need capital to launch, expand, or consolidate—our nationwide lender network helps match you
              to the right option with clarity at every step.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Business Funding */}
            <div className="card p-6 border-brand-blue/30">
              <p className="text-sm font-semibold text-brand-navy/80">Business Funding</p>
              <h3 className="mt-1 text-xl font-bold text-brand-navy">Fast flexible work capital</h3>
              <ul className="mt-3 grid gap-2 text-sm text-brand-muted">
                <li>• MCA’s</li>
                <li>• SBA Loans</li>
                <li>• Business Loans</li>
                <li>• Lines of Credit</li>
                <li>• Business Credit Cards</li>
                <li>• Equipment Financing</li>
                <li>• Merchant Accounts</li>
              </ul>
              <p className="mt-3 text-sm text-brand-navy">
                <b>Requirements:</b> EIN, 3+ months in business bank statements, 600+ FICO.
              </p>
              <div className="mt-4 flex gap-3">
                <Link href="/apply" className="btn-primary">Apply for Business Funding</Link>
                <Link href="/how-it-works" className="btn-outline">See Process</Link>
              </div>
            </div>

            {/* Personal Funding */}
            <div className="card p-6 border-brand-blue/30">
              <p className="text-sm font-semibold text-brand-navy/80">Personal Funding</p>
              <h3 className="mt-1 text-xl font-bold text-brand-navy">For all your financial needs</h3>
              <ul className="mt-3 grid gap-2 text-sm text-brand-muted">
                <li>• Personal Loans</li>
                <li>• Credit Cards</li>
                <li>• Auto Loans</li>
                <li>• Boat Loans</li>
                <li>• Home Loans</li>
              </ul>

              <div className="mt-4 space-y-2 text-sm">
                <p className="text-brand-navy font-medium">Financial Plans</p>
                <p className="text-brand-muted">
                  Not where you want to be? We’ll create a personalized plan for you or your business.
                </p>
                <p className="text-brand-navy">
                  <b>Consultation:</b> $250 — a plan to go from zero to 60 in 90 days.
                </p>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <p className="text-brand-navy font-medium">Business Builder Packages</p>
                <p className="text-brand-muted">
                  <b>1)</b> EIN only + step-by-step registration guide: <b>$250</b>
                </p>
                <p className="text-brand-muted">
                  <b>2)</b> We do it all — EIN, registration, and business website: <b>$1,500</b>
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <Link href="/apply" className="btn-primary">Apply for Personal Funding</Link>
                <Link href="/contact" className="btn-outline">Contact us</Link>
              </div>
            </div>
          </div>

          {/* Compact reassurance row */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="card p-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icons.Shield className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-brand-navy">No hard pull to pre-qual</p>
                <p className="text-brand-muted">Your score stays protected.</p>
              </div>
            </div>
            <div className="card p-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icons.Credit className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-brand-navy">Upload PDFs only</p>
                <p className="text-brand-muted">Never send logins/passwords.</p>
              </div>
            </div>
            <div className="card p-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
                <Icons.Rocket className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-brand-navy">Fast turnarounds</p>
                <p className="text-brand-muted">Funding in as little as 1–3 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-brand-blue/5">
        <div className="container py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl2 border border-brand-blue/30 bg-white p-5">
            <div>
              <p className="font-semibold text-brand-navy">Ready to see what you qualify for?</p>
              <p className="text-sm text-brand-muted">Start your application — it’s quick and secure.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/apply" className="btn-primary">Start Application</Link>
              <Link href="/how-it-works" className="btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
