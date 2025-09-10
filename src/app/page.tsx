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
      {/* HERO — stronger blue presence with sky band + subtle waves */}
      <section className="relative bg-brand-sky">
        {/* Decorative wave */}
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
              Get funded today with options for both personal and business loans — starting at{" "}
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
              src="/hero-collage.png"
              alt="Customers getting funded"
              width={1200}
              height={900}
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

      {/* BENEFITS — bluer accents & chips */}
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

      {/* HOW IT WORKS — upgraded layout w/ icons and blue panels */}
      <section className="bg-brand-sky">
        <div className="container py-12">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <h2 className="section-title">How It Works</h2>
            <div className="max-w-xl text-sm text-brand-navy/70">
              A simple path: check your credit (soft pull), upload your docs securely, apply, and get funded quickly.
            </div>
          </div>

          <ol className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Step 1 */}
            <li className="card overflow-hidden border-brand-blue/30">
              <div className="bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                    <Icons.Credit className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">Step 1</p>
                    <h3 className="font-semibold text-brand-navy">Pre-Qualification (soft pull)</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-brand-muted">
                  View your full 3-bureau report & save the PDF. No hard inquiry for pre-qualification.
                </p>
              </div>
              <div className="border-t border-brand-border bg-brand-sky p-4">
                <a
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                >
                  Check Your FICO
                </a>
              </div>
            </li>

            {/* Step 2 */}
            <li className="card overflow-hidden border-brand-blue/30">
              <div className="bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                    <Icons.Upload className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">Step 2</p>
                    <h3 className="font-semibold text-brand-navy">Upload Documents (secure)</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-brand-muted">
                  PDF credit report, ID, and recent bank statements help us match you to the best options.
                </p>
              </div>
              <div className="border-t border-brand-border bg-brand-sky p-4">
                <Link href="/apply" className="btn-primary">Upload on Application</Link>
              </div>
            </li>

            {/* Step 3 */}
            <li className="card overflow-hidden border-brand-blue/30">
              <div className="bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                    <Icons.Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted">Step 3</p>
                    <h3 className="font-semibold text-brand-navy">Get Funded (24–72 hrs)</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-brand-muted">
                  Once approved and finalized, funds can land quickly. We keep it transparent—no upfront fees.
                </p>
              </div>
              <div className="border-t border-brand-border bg-brand-sky p-4">
                <Link href="/how-it-works" className="btn-ghost">See full process →</Link>
              </div>
            </li>
          </ol>

          {/* Trust row */}
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

          {/* CTA bar */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl2 border border-brand-blue/30 bg-white p-5">
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
