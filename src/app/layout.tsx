import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApiKeyBanner from "@/components/ApiKeyBanner";
import { ThemeProvider } from "@/lib/themeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chesume.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chesume | AI-Powered Interview Prep & Coding Practice",
    template: "%s | Chesume",
  },
  description:
    "Transform interview anxiety into confident mastery. Chesume uses AI to analyze your resume, generate personalized interview questions, and provide guided coding practice with 80+ problems.",
  keywords: [
    "interview preparation",
    "AI interview prep",
    "coding interview",
    "resume analyzer",
    "technical interview",
    "coding practice",
    "DSA problems",
    "job interview questions",
    "software engineering interview",
    "leetcode alternative",
    "interview questions generator",
    "resume based interview",
  ],
  authors: [{ name: "Anup Bhat", url: "https://twitter.com/anupbhat30" }],
  creator: "Anup Bhat",
  publisher: "Chesume",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chesume",
    title: "Chesume | AI-Powered Interview Prep & Coding Practice",
    description:
      "Transform interview anxiety into confident mastery. AI-powered resume analysis, personalized questions, and 80+ coding problems with guided practice.",
    images: [
      {
        url: "/github-banner.png",
        width: 1200,
        height: 630,
        alt: "Chesume - AI-Powered Interview Preparation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chesume | AI-Powered Interview Prep",
    description:
      "Transform interview anxiety into confident mastery with AI-powered interview prep that tests your claims.",
    creator: "@anupbhat30",
    images: ["/github-banner.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Education, Career, Technology",
};

// JSON-LD Structured Data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Chesume",
  description:
    "AI-powered interview preparation platform that analyzes resumes, generates personalized interview questions, and provides guided coding practice.",
  url: siteUrl,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Anup Bhat",
    url: "https://twitter.com/anupbhat30",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "AI Resume Analysis",
    "Personalized Interview Questions",
    "80+ Coding Problems",
    "Guided Practice Mode",
    "Socratic Learning Method",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <ApiKeyBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
