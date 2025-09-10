import Link from "next/link";
import Image from "next/image";

/** Tiny inline icons (no extra packages) */
const Icons = {
  Credit: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
      <rect x="6.5" y="12.5" width="6" height="3" rx="0.8" fill="currentColor" />
    </svg>
  ),
  Upload: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20h11A2.5 2.5 0 0 0 20 17.5V15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 15V4m0 0-3.5 3.5M12 4l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Timer: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 13V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M12 3 4.5 6v6.4c0 4 3 7.2 7.5 8.6 4.5-1.4 7.5-4.6 7.5-8.6V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Check: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}>
      <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  X: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}>
      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default function HowItWorks() {
  return (
    <div className="container py-12 md:py-16">
      {/* Header band with extra blue presence */}
      <div className="rounded-xl2 border border-brand-border bg-brand-sky p-6">
        <span className="chip bg-white border-brand-border">
          <span className="inline-block h-2 w-2 rounded-full bg-brand-blue" />
          Simple • Transparent • Fast
        </span>
        <h1 className="mt-3 section-title">Getting Funded Is Easy</h1>
        <p className="mt-2 text-brand-muted">
          Follow these four steps. Learn what we look for, what to upload, and what to expect next.
        </p>

        {/* quick stats row */}
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Min FICO", v: "600+" },
            { k: "Max Business", v: "$500K" },
            { k: "Funding Speed", v: "24–72h" },
            { k: "Coverage", v: "All 50 states" },
          ].map((s) => (
            <li key={s.k} className="card flex items-center justify-between px-4 py-3">
              <span className="text-sm text-brand-muted">{s.k}</span>
              <span className="font-semibold text-brand-navy">{s.v}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,360px]">
        {/* Steps column */}
        <div className="grid gap-8">
          {/* Step 1 */}
          <section className="card p-6 border-l-4 border-l-brand-blue">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                <Icons.Credit className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-brand-muted">Step 1</div>
                <h2 className="text-xl font-semibold text-brand-navy">Check Your Credit (Soft Pull)</h2>
                <p className="mt-1 text-brand-muted">
                  Use our partner link to view your full 3-bureau report and save it as a PDF. No hard inquiry for
                  pre-qualification.
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-[1fr,300px]">
                  <div className="text-sm text-brand-muted">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        Click{" "}
                        <a
                          className="text-brand-blue underline"
                          href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check Your FICO
                        </a>
                        .
                      </li>
                      <li>Open the full report (3 bureaus) and choose “Save/Export as PDF”.</li>
                      <li>Keep the PDF ready — you’ll upload it on the Apply page.</li>
                    </ol>
                    <p className="mt-2">
                      <b className="text-brand-navy">Important:</b> Don’t send usernames or passwords. Only upload
                      the PDF report.
                    </p>
                  </div>

                  <div className="card relative overflow-hidden grid place-items-center p-3">
                    <Image
                      src="/howitworks-credit.png"
                      alt="Download your full report as PDF"
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto"
                    />
                    <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="card p-6 border-l-4 border-l-brand-blue">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                <Icons.Upload className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-brand-muted">Step 2</div>
                <h2 className="text-xl font-semibold text-brand-navy">Gather Your Documents</h2>

                <div className="mt-3 grid gap-3 text-sm">
                  <div className="card p-4">
                    <p className="font-medium text-brand-navy">Typical documents</p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-brand-muted">
                      <li>Full credit report PDF (from step 1)</li>
                      <li>Government ID (driver’s license or passport)</li>
                      <li>
                        <b>Business funding:</b> last 3 months business bank statements, EIN
                      </li>
                      <li>
                        <b>Personal funding:</b> pay stubs or income proof
                      </li>
                    </ul>
                  </div>

                  <div className="card p-4">
                    <p className="font-medium text-brand-navy">Tips to speed things up</p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-brand-muted">
                      <li>Use real PDFs (no photos of screens).</li>
                      <li>
                        Name files clearly: <i>Lastname_Report.pdf</i>, <i>Lastname_ID.pdf</i>
                      </li>
                      <li>Keep total size under 10 MB for upload.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="card p-6 border-l-4 border-l-brand-blue">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                <Icons.Shield className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-brand-muted">Step 3</div>
                <h2 className="text-xl font-semibold text-brand-navy">Submit the Application</h2>
                <p className="mt-1 text-brand-muted">
                  Complete the short form and upload your PDF credit report. We’ll review and route to the most
                  suitable options.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/apply" className="btn-primary">
                    Go to Application
                  </Link>
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
            </div>
          </section>

          {/* Step 4 */}
          <section className="card p-6 border-l-4 border-l-brand-blue">
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl2 bg-brand-blue text-white">
                <Icons.Timer className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-brand-muted">Step 4</div>
                <h2 className="text-xl font-semibold text-brand-navy">Approval & Funding (24–72 hrs)</h2>

                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div className="text-sm">
                    <p className="font-medium text-brand-navy">What to expect</p>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-brand-muted">
                      <li>We review and may ask for a quick clarification.</li>
                      <li>You’ll see options (terms, rates, amounts) if eligible.</li>
                      <li>Once accepted and finalized, funds can land in 1–3 days.</li>
                    </ul>
                  </div>
                  <div className="card p-4">
                    <p className="font-medium text-brand-navy">No upfront fees</p>
                    <p className="mt-1 text-sm text-brand-muted">
                      Any lender fees will be disclosed before you agree.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safety + disclaimer (blue panel) */}
          <section className="rounded-xl2 border border-brand-border bg-brand-sky p-6">
            <h2 className="text-lg font-semibold text-brand-navy">Credit Disclaimer & Safety</h2>
            <p className="mt-2 text-brand-muted">
              Minimum <b>600 FICO</b> is typically required. If you’re under 600, our Credit Assistance team can help
              you rebuild before applying again. Never send website logins — only the PDF report.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="card p-4">
                <div className="flex items-center gap-2 text-brand-navy">
                  <Icons.Check className="h-5 w-5 text-brand-blue" />
                  <p className="font-medium">Do</p>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm text-brand-muted">
                  <li>Upload clear PDFs only</li>
                  <li>Keep file sizes small</li>
                  <li>Verify details match your ID</li>
                </ul>
              </div>

              <div className="card p-4">
                <div className="flex items-center gap-2 text-brand-navy">
                  <Icons.X className="h-5 w-5 text-brand-navy" />
                  <p className="font-medium">Don’t</p>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm text-brand-muted">
                  <li>No logins or passwords</li>
                  <li>No screenshots/photos of screens</li>
                  <li>No sensitive data in notes</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/credit-assistance" className="btn-primary">
                Start Credit Assistance
              </Link>
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Check Your FICO
              </a>
            </div>
          </section>
        </div>

        {/* Sidebar — sticky style without JS (keeps it simple) */}
        <aside className="h-max">
          <div className="card p-6">
            <p className="uppercase tracking-wider text-xs text-brand-muted">Get started</p>

            {/* Progress “badges” */}
            <ul className="mt-3 space-y-2 text-sm">
              {[
                "Check credit (soft pull)",
                "Gather documents",
                "Submit application",
                "Approval & funding",
              ].map((t, i) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-brand-border text-[11px] text-brand-navy bg-white">
                    {i + 1}
                  </span>
                  <span className="text-brand-navy">{t}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-5 grid gap-2">
              <Link href="/apply" className="btn-primary text-center">
                Apply Now
              </Link>
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                Check Your FICO
              </a>
            </div>

            <p className="mt-4 text-xs text-brand-muted">
              Have questions?{" "}
              <Link href="/contact" className="text-brand-blue underline">
                Contact us
              </Link>
              .
            </p>
          </div>

          {/* Small blue tip card */}
          <div className="mt-4 rounded-xl2 border border-brand-blue/30 bg-white p-4">
            <p className="text-sm text-brand-navy">
              Tip: approvals move faster when your PDF credit report shows all 3 bureaus clearly.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
