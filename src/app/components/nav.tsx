"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-Photoroom.png" alt="FundingMole" width={36} height={36} />
          <span className="sr-only">FundingMole</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm ${active ? "text-brand-navy font-semibold" : "text-brand-muted hover:text-brand-navy"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
            target="_blank" rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            Check FICO
          </a>
          <Link href="/apply" className="btn-primary text-sm">Apply Now</Link>
        </div>

        <button
          className="md:hidden rounded-lg border border-brand-border px-3 py-2"
          onClick={() => setOpen(v => !v)} aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-border bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-brand-navy"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 text-sm"
              >
                Check FICO
              </a>
              <Link href="/apply" onClick={() => setOpen(false)} className="btn-primary flex-1 text-sm">
                Apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
