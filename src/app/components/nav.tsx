"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-blue text-white shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-Photoroom.png"
            alt="FundingMole"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
          />
          <span className="sr-only">FundingMole</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm transition-colors ${
                  active
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl2 border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Check FICO
          </a>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-xl2 bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:brightness-110 border border-brand-navy"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden rounded-lg border border-white/50 px-3 py-2 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/20 bg-brand-blue">
          <div className="container py-3 flex flex-col gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`relative py-2 text-sm ${
                    active ? "text-white font-semibold" : "text-white/90"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-white" />
                  )}
                </Link>
              );
            })}
            <div className="mt-2 flex gap-2">
              <a
                href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-xl2 border border-white/60 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Check FICO
              </a>
              <Link
                href="/apply"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex items-center justify-center rounded-xl2 bg-brand-navy px-4 py-2 text-sm font-medium text-white hover:brightness-110 border border-brand-navy"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
