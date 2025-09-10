import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
  
      <div className="container py-12 md:py-16">
        {/* WHY US + BADGES */}
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          {/* BLUE FEATURE PANEL */}
          <section
            className="relative overflow-hidden rounded-xl2 border border-brand-blue/30 bg-brand-sky p-6"
            style={{
              backgroundImage:
                "radial-gradient(900px 220px at 20% -10%, rgba(0,166,255,0.14) 0%, rgba(0,166,255,0) 70%)",
            }}
          >
            {/* dotted pattern */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><circle cx='3' cy='3' r='1' fill='%2300A6FF'/></svg>\")",
              }}
            />
            {/* top accent */}
            <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
            <div className="relative z-[1]">
              <p className="text-sm font-semibold text-brand-navy/80">
                Why choose FundingMole?
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">
                Real people. Clear steps. No upfront fees.
              </h2>

              {/* STATS PILLS */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {[
                  { k: "600+ FICO", v: "Minimum" },
                  { k: "$500K", v: "Business max" },
                  { k: "24–72h", v: "Typical funding" },
                  { k: "50 states", v: "Coverage" },
                ].map((s) => (
                  <li
                    key={s.k}
                    className="chip bg-white backdrop-blur border-brand-blue/30"
                  >
                    <span className="text-brand-navy font-semibold">{s.k}</span>
                    <span className="text-brand-muted">• {s.v}</span>
                  </li>
                ))}
              </ul>

              {/* TWO-COLUMN CHECKS */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl2 border border-brand-blue/25 bg-white p-4">
                  <p className="text-brand-navy font-medium">What you get</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "Nationwide lender network",
                      "Transparent process (no runaround)",
                      "Soft-pull pre-qualification",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-brand-navy">
                        <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                          ✓
                        </span>
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl2 border border-brand-blue/25 bg-white p-4">
                  <p className="text-brand-navy font-medium">What we don’t do</p>
                  <ul className="mt-2 space-y-2">
                    {[
                      "No upfront fees — ever",
                      "No asking for your passwords",
                      "No data selling — your docs stay private",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-brand-navy">
                        <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                          ✓
                        </span>
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA ROW (secondary) */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/apply" className="btn-primary">
                  Start Application
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk to a human
                </Link>
              </div>
            </div>
          </section>

          {/* BADGES / IMAGE CARD */}
          <div className="card relative overflow-hidden border-brand-blue/30">
            <Image
              src="/badges.png"
              alt="Trusted by partners & happy clients"
              width={1200}
              height={900}
              className="w-full h-auto object-contain bg-white"
            />
            <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
          </div>
        </div>

        {/* VALUES STRIP (BLUE-TINTED) */}
        <section className="mt-10 rounded-xl2 border border-brand-blue/30 bg-brand-blue p-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Transparency",
                d: "No surprises. We explain steps, docs, and offers before you decide.",
              },
              {
                t: "Speed",
                d: "Soft pull pre-qual, streamlined docs, and fast turnarounds.",
              },
              {
                t: "Privacy",
                d: "Upload secure PDFs only. We never ask for your passwords.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-xl2 bg-white p-5 border border-brand-border">
                <p className="text-brand-navy font-semibold">{v.t}</p>
                <p className="mt-1 text-sm text-brand-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div className="mt-12">
          <h2 className="section-title text-brand-navy">What Our Clients Say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "FundingMole got us approved in 2 days. The process was super clear.",
                n: "Sarah K., Small Business Owner",
              },
              {
                q: "I thought I’d never qualify with my score. Their team walked me through everything.",
                n: "James R., Entrepreneur",
              },
              {
                q: "No hidden fees, no nonsense. Exactly what they promised.",
                n: "Maria L., Contractor",
              },
            ].map((t) => (
              <div
                key={t.n}
                className="rounded-xl2 border border-brand-blue/30 bg-brand-sky p-5"
              >
                <p className="text-brand-navy italic">“{t.q}”</p>
                <p className="mt-3 text-sm font-medium text-brand-muted">{t.n}</p>
              </div>
            ))}
          </div>
        </div>

       <section className="mt-20 rounded-xl2 bg-brand-blue text-white">
        <div className="container py-10 md:py-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-white inline-block" />
            FundingMole • Nationwide network
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
            Who We Are
          </h1>
          <p className="mt-2 max-w-2xl text-white/90">
            FundingMole’s mission is to help individuals and businesses access fast,
            transparent capital. Real people, clear steps, no upfront fees.
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
        {/* FINAL CTA */}
        <div className="mt-12 rounded-xl2 border border-brand-blue/30 bg-brand-blue/10 p-6">
          <div className="grid gap-4 md:grid-cols-[1fr,auto] md:items-center">
            <div>
              <p className="text-sm font-semibold text-brand-navy/80">
                Ready when you are
              </p>
              <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">
                See your funding options now
              </h3>
              <p className="mt-2 text-brand-muted">
                No upfront fees. Soft pull for pre-qualification. Upload PDF only.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/apply" className="btn-primary">Start Application</Link>
              <Link href="/how-it-works" className="btn-outline">How it works</Link>
            </div>
          </div>
        </div>
      </div>
         {/* BLUE HEADER BAND */}
     
    </>
  );
}
