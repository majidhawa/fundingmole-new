import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Apply Now", href: "/apply" },
  ];

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] items-start">
          {/* Brand + short intro */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-Photoroom.png"
                alt="FundingMole"
                width={36}
                height={36}
                className="h-9 w-auto"
                priority
              />
              <span className="text-lg font-semibold tracking-tight">FundingMole</span>
            </Link>

            <p className="mt-3 text-sm text-white/80 max-w-sm">
              Fast, flexible funding without the hassle. Real people, clear steps, no upfront fees.
            </p>

            {/* Contact info */}
            <div className="mt-4 space-y-1 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@fundingmole.com" className="hover:underline">
                  support@fundingmole.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving all 50 states</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="rounded-md border border-white/30 p-2 hover:bg-white/10 transition"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <p className="text-xs uppercase tracking-wider text-white/60">Quick Links</p>
            <ul className="mt-3 grid gap-2">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/90 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/20 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-2">
          <p>© {year} FundingMole. All rights reserved.</p>
          <p>Transparent. Fast. Nationwide.</p>
        </div>
      </div>
    </footer>
  );
}
