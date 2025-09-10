import Link from "next/link";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="container py-12 md:py-16">
      <span className="chip"><span className="inline-block h-2 w-2 rounded-full bg-brand-blue" /> Simple • Transparent • Fast</span>
      <h1 className="mt-3 section-title">Getting Funded Is Easy</h1>
      <p className="mt-2 text-brand-muted">Follow these four steps. Learn what we look for, what to upload, and what to expect next.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr,360px]">
        <div className="grid gap-8">
          {/* Step 1 */}
          <section className="card p-6">
            <h2 className="text-xl font-semibold text-brand-navy">1) Check Your Credit (Soft Pull)</h2>
            <p className="mt-1 text-brand-muted">Use our partner link to view your full 3-bureau report and save it as a PDF. No hard inquiry for pre-qualification.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-[1fr,300px]">
              <div className="text-sm text-brand-muted">
                <ol className="list-decimal list-inside space-y-1">
                  <li>
                    Click <a className="text-brand-blue underline" href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank">Check Your FICO</a>.
                  </li>
                  <li>Open the full report (3 bureaus) and choose “Save/Export as PDF”.</li>
                  <li>Keep the PDF ready — you’ll upload it on the Apply page.</li>
                </ol>
                <p className="mt-2"><b className="text-brand-navy">Important:</b> Don’t send usernames or passwords. Only upload the PDF report.</p>
              </div>
              <div className="card relative overflow-hidden grid place-items-center p-3">
                <Image src="/howitworks-credit.png" alt="Download your full report as PDF" width={800} height={600} className="object-contain w-full h-auto" />
                <span className="absolute inset-x-0 top-0 h-1 bg-brand-blue" />
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="card p-6">
            <h2 className="text-xl font-semibold text-brand-navy">2) Gather Your Documents</h2>
            <div className="mt-3 grid gap-3 text-sm">
              <div className="card p-4">
                <p className="font-medium text-brand-navy">Typical documents</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-brand-muted">
                  <li>Full credit report PDF (from step 1)</li>
                  <li>Government ID (driver’s license or passport)</li>
                  <li><b>Business funding:</b> last 3 months business bank statements, EIN</li>
                  <li><b>Personal funding:</b> pay stubs or income proof</li>
                </ul>
              </div>
              <div className="card p-4">
                <p className="font-medium text-brand-navy">Tips to speed things up</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-brand-muted">
                  <li>Use real PDFs (no photos of screens).</li>
                  <li>Name files clearly: <i>Lastname_Report.pdf</i>, <i>Lastname_ID.pdf</i></li>
                  <li>Keep total size under 10 MB for upload.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="card p-6">
            <h2 className="text-xl font-semibold text-brand-navy">3) Submit the Application</h2>
            <p className="mt-1 text-brand-muted">Complete the short form and upload your PDF credit report. We’ll review and route to the most suitable options.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/apply" className="btn-primary">Go to Application</Link>
              <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" className="btn-outline">Check Your FICO</a>
            </div>
          </section>

          {/* Step 4 */}
          <section className="card p-6">
            <h2 className="text-xl font-semibold text-brand-navy">4) Approval & Funding (24–72 hrs)</h2>
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
                <p className="mt-1 text-sm text-brand-muted">Any lender fees will be disclosed before you agree.</p>
              </div>
            </div>
          </section>

          {/* Credit assistance */}
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-brand-navy">Credit Disclaimer & Safety</h2>
            <p className="mt-2 text-brand-muted">
              Minimum <b>600 FICO</b> is typically required. If you’re under 600, our Credit Assistance team can help you rebuild before applying again.
              Never send website logins — only the PDF report.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/credit-assistance" className="btn-primary">Start Credit Assistance</Link>
              <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" className="btn-outline">Check Your FICO</a>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="h-max">
          <div className="card p-6">
            <p className="uppercase tracking-wider text-xs text-brand-muted">Get started</p>
            <div className="mt-3 grid gap-2">
              <Link href="/apply" className="btn-primary text-center">Apply Now</Link>
              <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" className="btn-outline text-center">Check Your FICO</a>
            </div>
            <p className="mt-4 text-xs text-brand-muted">
              Have questions? <Link href="/contact" className="text-brand-blue underline">Contact us</Link>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
