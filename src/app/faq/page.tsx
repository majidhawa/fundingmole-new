import Link from "next/link";
import { HelpCircle, ShieldCheck, Timer, Wallet, FileText, Lock } from "lucide-react";

type QAItem = { q: string; a: React.ReactNode; icon?: React.ElementType };

function QA({ q, a, icon: Icon }: QAItem) {
  return (
    <details className="group overflow-hidden rounded-xl2 border border-brand-border bg-white hover:bg-brand-sky/40 transition">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4">
        <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
          {Icon ? <Icon className="h-4 w-4" /> : <HelpCircle className="h-4 w-4" />}
        </span>
        <h3 className="flex-1 text-left font-semibold text-brand-navy">{q}</h3>
        <span className="ml-2 rounded-full border border-brand-border bg-white px-2 text-xs text-brand-muted group-open:rotate-180 transition">
          ▼
        </span>
      </summary>
      <div className="px-5 pb-5 pt-0 text-sm text-brand-muted">{a}</div>
    </details>
  );
}

export default function FAQ() {
  const basics: QAItem[] = [
    {
      q: "Will this hurt my credit?",
      a: "No — our pre-qualification uses soft pulls, not hard inquiries.",
      icon: ShieldCheck,
    },
    {
      q: "How fast can I get funded?",
      a: "Many approvals complete within 24–72 hours after we receive your documents.",
      icon: Timer,
    },
    {
      q: "What’s the max loan amount?",
      a: "Business up to $500K+ and personal up to $50K, depending on your profile.",
      icon: Wallet,
    },
  ];

  const docsSecurity: QAItem[] = [
    {
      q: "What credit score do I need?",
      a: "600 minimum. If you’re under 600, visit our Credit Assistance page to rebuild first.",
      icon: ShieldCheck,
    },
    {
      q: "What documents are required?",
      a: (
        <>
          Typically: your full credit report PDF, government ID, and recent bank statements (business or personal).
          For business funding, the last 3 months of business bank statements help a lot.
        </>
      ),
      icon: FileText,
    },
    {
      q: "Is my information safe?",
      a: (
        <>
          Yes. Upload <b>PDFs only</b>. We never ask for website logins or passwords, and we never sell your data.
          Files are transmitted over encrypted channels.
        </>
      ),
      icon: Lock,
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* Top help strip */}
      <div className="rounded-xl2 border border-brand-blue/25 bg-brand-sky px-5 py-4">
        <p className="text-sm text-brand-navy">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-blue" />
          Can’t find an answer?{" "}
          <Link href="/contact" className="text-brand-blue underline">
            Contact us
          </Link>{" "}
          — real humans here.
        </p>
      </div>

      <h1 className="mt-6 section-title">Frequently Asked Questions</h1>
      <p className="mt-2 text-brand-muted max-w-2xl">
        Short, clear answers about eligibility, documents, and timing.
      </p>

      {/* Quick jump chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <a href="#basics" className="chip">Basics</a>
        <a href="#docs" className="chip">Documents & Security</a>
        <a href="#apply" className="chip">Apply & Funding</a>
      </div>

      {/* Basics */}
      <section id="basics" className="mt-8">
        <h2 className="text-xl font-extrabold tracking-tight text-brand-navy">Basics</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {basics.map((item) => (
            <QA key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* Documents & security */}
      <section id="docs" className="mt-10">
        <h2 className="text-xl font-extrabold tracking-tight text-brand-navy">Documents & Security</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {docsSecurity.map((item) => (
            <QA key={item.q} {...item} />
          ))}
        </div>
      </section>

      {/* Apply & funding mini-answers (compact, side-by-side) */}
      <section id="apply" className="mt-10">
        <h2 className="text-xl font-extrabold tracking-tight text-brand-navy">Apply & Funding</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">How do I apply?</p>
            <p className="mt-2 text-sm text-brand-muted">
              Fill out the short form and upload your full credit report as a PDF. No logins or passwords.
            </p>
            <Link href="/apply" className="btn-primary mt-4">Start Application</Link>
          </div>
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">What happens after?</p>
            <p className="mt-2 text-sm text-brand-muted">
              We review and match you with options. If terms look good and docs are complete, funds can move in 24–72 hours.
            </p>
          </div>
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">Under 600 FICO?</p>
            <p className="mt-2 text-sm text-brand-muted">
              Start with Credit Assistance to rebuild, then re-apply. We’ll guide you.
            </p>
            <Link href="/credit-assistance" className="btn-outline mt-4">Credit Assistance</Link>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <div className="mt-12 grid gap-4 md:grid-cols-[1fr,1fr]">
        <div className="rounded-xl2 border border-brand-blue/25 bg-brand-sky p-6">
          <p className="text-sm font-semibold text-brand-navy/80">Ready when you are</p>
          <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-brand-navy">
            See your funding options now
          </h3>
          <p className="mt-2 text-brand-muted">
            No upfront fees. Soft pull for pre-qualification. Upload PDF only — keep your logins private.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">Start Your Application</Link>
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

        <div className="rounded-xl2 border border-brand-border bg-white p-6">
          <p className="text-sm font-semibold text-brand-navy/80">What we look for</p>
          <ul className="mt-2 grid gap-2 text-sm text-brand-muted">
            <li>• 600+ FICO (minimum)</li>
            <li>• Full credit report PDF (no screenshots)</li>
            <li>• Recent bank statements (business or personal)</li>
            <li>• Valid government ID</li>
          </ul>
          <p className="mt-3 text-xs text-brand-muted">
            P.S. Have questions first?{" "}
            <Link href="/contact" className="text-brand-blue underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
