import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata = {
  title: "FundingMole",
  description: "Fast, flexible funding without the hassle. Real people, clear steps, no upfront fees.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "FundingMole",
    description: "Fast, flexible business & personal funding — starting at 600 FICO.",
    url: "https://fundingmole.com",
    siteName: "FundingMole",
    images: [
      {
        url: "/logo-social.png",
        width: 1200,
        height: 630,
        alt: "FundingMole Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fundingmole",
    images: ["/logo-social.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
