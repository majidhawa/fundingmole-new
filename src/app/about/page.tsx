import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="section-title">Who We Are</h1>
      <p className="mt-2 text-brand-muted max-w-2xl">
        FundingMole’s mission is to help individuals and businesses access fast, transparent capital.
        Real people, clear steps, no upfront fees.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div className="card p-6">
          <p className="text-brand-navy font-semibold">Why choose us?</p>
          <ul className="mt-2 list-disc list-inside text-brand-muted">
            <li>Nationwide lender network</li>
            <li>Transparent process</li>
            <li>No upfront fees</li>
            <li>Credit Assistance if you’re under 600</li>
          </ul>
          <Link href="/credit-assistance" className="btn-ghost mt-4">Credit Assistance →</Link>
        </div>

        <div className="card relative overflow-hidden">
          <Image src="/badges.png" alt="Partners & happy clients" width={1200} height={900} className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
