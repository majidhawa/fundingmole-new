"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a phone number"),
  type: z.enum(["Business", "Personal"]),
  amount: z.string().min(1, "Amount is required"),
  monthly: z.string().min(1, "Monthly revenue/income is required"),
  fico: z.enum(["Below 600", "600-649", "650-699", "700+"]),
  notes: z.string().optional(),
});

export default function Apply() {
  const { register, handleSubmit, watch, reset, formState: { isSubmitting } } =
    useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: { type: "Business", fico: "600-649" },
    });

  const fico = watch("fico");
  const below600 = fico === "Below 600";

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([k, v]) => formData.append(k, String(v)));
    const fileInput = document.getElementById("report") as HTMLInputElement | null;
    if (fileInput?.files) { for (const f of fileInput.files) formData.append("files", f); }

    const res = await fetch("/api/apply", { method: "POST", body: formData });
    if (res.ok) { alert("Thanks! We received your application."); reset(); if (fileInput) fileInput.value = ""; }
    else { const { error } = await res.json().catch(() => ({ error: "Error" })); alert(error || "Something went wrong."); }
  }

  if (below600) {
    return (
      <div className="container max-w-2xl py-10">
        <h1 className="section-title">Credit Assistance</h1>
        <p className="mt-2 text-brand-muted">It looks like your FICO is below 600. Please visit our Credit Assistance page to rebuild before applying.</p>
        <div className="mt-6 flex gap-3">
          <a href="/credit-assistance" className="btn-primary">Start Credit Assistance</a>
          <a href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL" target="_blank" className="btn-outline">Check Your FICO</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl py-10">
      <h1 className="section-title">Apply Now</h1>
      <p className="mt-2 text-brand-muted">Requirements: SSN, proof of income, 600+ FICO. Upload your full credit report PDF (no logins or passwords).</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5" encType="multipart/form-data">
        <div>
          <label className="block text-sm mb-1 text-brand-muted">Full Name</label>
          <input className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="Jane Doe" {...register("fullName")} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Email</label>
            <input type="email" className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="jane@example.com" {...register("email")} />
          </div>
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Phone</label>
            <input className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="(555) 555-5555" {...register("phone")} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Funding Type</label>
            <select className="w-full rounded-xl2 border border-brand-border px-3 py-2" {...register("type")}>
              <option>Business</option><option>Personal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Amount Needed (USD)</label>
            <input className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="e.g., 50,000" {...register("amount")} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Monthly Revenue / Income</label>
            <input className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="e.g., 12,000" {...register("monthly")} />
          </div>
          <div>
            <label className="block text-sm mb-1 text-brand-muted">Credit Score Range</label>
            <select className="w-full rounded-xl2 border border-brand-border px-3 py-2" {...register("fico")}>
              <option>600-649</option><option>650-699</option><option>700+</option><option>Below 600</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1 text-brand-muted">Upload Credit Report (PDF)</label>
          <input id="report" name="files" type="file" accept="application/pdf" multiple className="block w-full text-sm" />
          <p className="text-xs text-brand-muted mt-1">Max 10MB total. Upload the full report PDF from ScoreIQ. Do not send logins.</p>
        </div>

        <div>
          <label className="block text-sm mb-1 text-brand-muted">Notes (optional)</label>
          <textarea className="w-full rounded-xl2 border border-brand-border px-3 py-2" placeholder="Anything we should know?" {...register("notes")} />
        </div>

        <label className="text-xs text-brand-muted">
          <input type="checkbox" required className="mr-2" /> I agree to the Terms of Use and Privacy Policy, and consent to be contacted.
        </label>

        <button disabled={isSubmitting} className="btn-primary">
          {isSubmitting ? "Submitting..." : "See My Funding Options"}
        </button>
      </form>
    </div>
  );
}
