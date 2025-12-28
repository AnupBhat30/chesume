import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ApiKeyBanner from "@/components/ApiKeyBanner";
import { ThemeProvider } from "@/lib/themeContext";

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
    <html lang="en" suppressHydrationWarning>
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
