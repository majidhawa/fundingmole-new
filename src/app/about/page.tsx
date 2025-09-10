import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container py-12 md:py-16">
      {/* Intro */}
      <h1 className="section-title">Who We Are</h1>
      <p className="mt-2 text-brand-muted max-w-2xl">
        FundingMole’s mission is to help individuals and businesses access fast,
        transparent capital. Real people, clear steps, no upfront fees.
      </p>

      {/* Why us + badges */}
      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr]">
        {/* Blue feature panel */}
        <section
          className="relative overflow-hidden rounded-xl2 border border-brand-blue/25 bg-brand-sky p-6"
          style={{
            backgroundImage:
              "radial-gradient(800px 200px at 20% -10%, rgba(0,166,255,0.12) 0%, rgba(0,166,255,0) 70%)",
          }}
        >
          {/* subtle pattern */}
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

            {/* stats pills */}
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                { k: "600+ FICO", v: "Minimum" },
                { k: "$500K", v: "Business max" },
                { k: "24–72h", v: "Typical funding" },
                { k: "50 states", v: "Coverage" },
              ].map((s) => (
                <li
                  key={s.k}
                  className="chip bg-white/90 backdrop-blur border-brand-blue/30"
                >
                  <span className="text-brand-navy font-semibold">{s.k}</span>
                  <span className="text-brand-muted">• {s.v}</span>
                </li>
              ))}
            </ul>

            {/* checklist in two columns */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl2 border border-brand-blue/20 bg-white p-4">
                <p className="text-brand-navy font-medium">What you get</p>
                <ul className="mt-2 space-y-2">
                  {[
                    "Nationwide lender network",
                    "Transparent process (no runaround)",
                    "Soft-pull pre-qualification",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-brand-navy"
                    >
                      <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                        ✓
                      </span>
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl2 border border-brand-blue/20 bg-white p-4">
                <p className="text-brand-navy font-medium">What we don’t do</p>
                <ul className="mt-2 space-y-2">
                  {[
                    "No upfront fees — ever",
                    "No asking for your passwords",
                    "No data selling — your docs stay private",
                  ].map((t) => (
                    <li
                      key={t}
                      className="flex items-start gap-2 text-brand-navy"
                    >
                      <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-brand-blue/10 text-brand-blue">
                        ✓
                      </span>
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/apply" className="btn-primary">
                Start Application
              </Link>
              <Link href="/how-it-works" className="btn-outline">
                How it works
              </Link>
            </div>
          </div>
        </section>

        {/* Badges / image card */}
        <div className="card relative overflow-hidden border-brand-blue/25">
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

      {/* Testimonials (optional add-on) */}
      <div className="mt-12">
        <h2 className="section-title">What Our Clients Say</h2>
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
              className="rounded-xl2 border border-brand-border bg-brand-sky p-5"
            >
              <p className="text-brand-navy italic">“{t.q}”</p>
              <p className="mt-3 text-sm font-medium text-brand-muted">{t.n}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
