import Link from "next/link";

export const metadata = {
  title: "Thank You | FundingMole",
};

export default function ThankYou() {
  return (
    <div className="container py-16 md:py-24">
      <div className="rounded-xl2 border border-brand-blue/25 bg-brand-sky px-6 py-8">
        <div className="flex items-start gap-4">
          <span className="inline-grid h-10 w-10 place-items-center rounded-xl2 bg-brand-blue text-white text-xl">✓</span>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-navy">
              Thanks—your application was sent!
            </h1>
            <p className="mt-2 text-brand-muted">
              We’ll review your details and attachments and contact you at the email you provided.
              Most decisions are made within <b className="text-brand-navy">24–72 hours</b>.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">1) Review</p>
            <p className="mt-1 text-sm text-brand-muted">We’ll match your profile to the best lender options.</p>
          </div>
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">2) Clarify</p>
            <p className="mt-1 text-sm text-brand-muted">If anything’s missing, we’ll reach out quickly by email.</p>
          </div>
          <div className="card p-5">
            <p className="font-semibold text-brand-navy">3) Offers</p>
            <p className="mt-1 text-sm text-brand-muted">See terms, rates, and amounts. If you accept, money moves fast.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/how-it-works" className="btn-outline">How it works</Link>
          <Link href="/" className="btn-primary">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
