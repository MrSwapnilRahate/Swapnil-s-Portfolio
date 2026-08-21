import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data/profile";
import { siteUrl } from "@/lib/site";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});


const title = "Swapnil Rahate | Software Engineer | Frontend & Product Engineering";
const description =
  "Software Engineer with 4.5+ years of experience building scalable web applications and digital products using React.js, Next.js, TypeScript and modern frontend architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Swapnil Rahate",
  },
  description,
  applicationName: "Swapnil Rahate — Portfolio",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Swapnil Rahate",
    "Software Engineer",
    "Frontend Engineer",
    "Product Engineer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Frontend Architecture",
    "System Design",
    "Nagpur",
    "India",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@swapnilrahate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#060607",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** Structured data so search engines resolve the person, not just the page. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [profile.linkedin, profile.github],
  worksFor: { "@type": "Organization", name: "TRIYARA Exports" },
  alumniOf: { "@type": "Organization", name: "Infosys" },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Frontend Architecture",
    "System Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${mono.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#about"
          className="label-mono sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-sm focus:border focus:border-gold focus:bg-void focus:px-4 focus:py-2 focus:text-[0.6rem] focus:text-gold"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
