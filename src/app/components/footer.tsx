import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Credit Disclaimer", href: "/credit-disclaimer" },
  ];

  return (
    <footer className="mt-20 bg-brand-blue text-white">
      <div className="container py-12">
        <div className="grid gap-12 md:grid-cols-[1.3fr,1fr,1fr]">
          {/* Brand + intro */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo-Photoroom.png"
                alt="FundingMole"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="sr-only">FundingMole</span>
            </Link>

            <p className="mt-3 text-sm max-w-md text-white/90">
              Fast, flexible funding without the hassle. Transparent steps, no upfront fees.
            </p>

            {/* Contact info */}
            <div className="mt-3 space-y-2 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@fundingmole.com" className="underline">
                  support@fundingmole.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving all 50 states</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="rounded-lg border border-white/40 p-2 hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <p className="text-xs uppercase tracking-wider text-white/70">Navigation</p>
            <ul className="mt-2 grid gap-2">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal + CTA */}
          <nav>
            <p className="text-xs uppercase tracking-wider text-white/70">Legal</p>
            <ul className="mt-2 grid gap-2">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl2 bg-brand-navy px-4 py-2 text-sm font-medium text-white border border-brand-navy hover:brightness-110 shadow-soft"
            >
              Check Your FICO
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/20 pt-4 text-xs text-white/80 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {year} FundingMole. All rights reserved.</p>
          <p>This site does not constitute a commitment to lend.</p>
        </div>
      </div>
    </footer>
  );
}
