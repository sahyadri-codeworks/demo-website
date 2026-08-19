import type { Metadata } from "next";
import { Fraunces, Inter, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONTACT, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

/* Editorial serif for display headlines — warm, human, premium. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — First Aid, CPR & Health Safety Training`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — First Aid, CPR & Health Safety Training`,
    description: SITE_TAGLINE,
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds a `js` class to <html>
    // before React hydrates, which would otherwise log a false-positive mismatch.
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Stamp `js` on <html> so scroll-reveal hiding only applies when JS runs. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
