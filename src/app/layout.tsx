import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chesume | AI-Powered Interview Prep",
  description:
    "Transform interview anxiety into confident mastery with AI-powered interview prep that actually tests your claims.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased font-inter`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
