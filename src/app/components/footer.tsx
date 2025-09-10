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
    <footer className="mt-20 border-t border-brand-border bg-white">
      <div className="container py-10">
        <div className="grid gap-12 md:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo-Photoroom.png" alt="FundingMole" width={40} height={40} />
              <span className="sr-only">FundingMole</span>
            </Link>
            <p className="mt-3 text-sm text-brand-muted max-w-md">
              Fast, flexible funding without the hassle. Transparent steps, no upfront fees.
            </p>
            <div className="mt-3 space-y-2 text-sm text-brand-muted">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:support@fundingmole.com" className="underline">support@fundingmole.com</a></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /><span>Serving all 50 states</span></div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="rounded-lg border border-brand-border p-2 hover:bg-brand-sky" aria-label="social">
                  <Icon className="h-4 w-4 text-brand-navy" />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <p className="text-xs uppercase tracking-wider text-brand-muted">Navigation</p>
            <ul className="mt-2 grid gap-2">
              {nav.map(l => (<li key={l.label}><Link href={l.href} className="text-sm text-brand-navy hover:underline">{l.label}</Link></li>))}
            </ul>
          </nav>

          <nav>
            <p className="text-xs uppercase tracking-wider text-brand-muted">Legal</p>
            <ul className="mt-2 grid gap-2">
              {legal.map(l => (<li key={l.label}><Link href={l.href} className="text-sm text-brand-navy hover:underline">{l.label}</Link></li>))}
            </ul>
            <a
              href="https://member.myscoreiq.com/get-fico-max.aspx?offercode=432139TL"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center btn-outline text-sm"
            >
              Check Your FICO
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-brand-border pt-4 text-xs text-brand-muted flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p>© {year} FundingMole. All rights reserved.</p>
          <p>This site does not constitute a commitment to lend.</p>
        </div>
      </div>
    </footer>
  );
}
