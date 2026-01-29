import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Python & C++ Syntax Guide + DSA Implementations",
  description:
    "Comprehensive guide to Python and C++ syntax from basic to advanced, including all data structures and algorithms implementations needed for FAANG interviews.",
  keywords: [
    "Python syntax",
    "C++ syntax",
    "data structures",
    "algorithms",
    "FAANG interview prep",
    "coding fundamentals",
    "STL",
    "Python tricks",
    "C++ tricks",
  ],
  openGraph: {
    title: "Complete Syntax Guide + DSA | Chesume",
    description:
      "Master Python and C++ syntax plus all essential DSA implementations for interviews.",
    url: "/blog/syntax-guide",
  },
  alternates: {
    canonical: "/blog/syntax-guide",
  },
};

export default function SyntaxGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
