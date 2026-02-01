import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Coding Interview Preparation Series",
  description:
    "Comprehensive interview prep including 80+ coding questions, OOP concepts, system design, behavioral questions, and complete Python/C++ reference. Master the skills needed for 3-10 LPA tech jobs.",
  keywords: [
    "coding interview questions",
    "DSA roadmap",
    "system design interview",
    "OOP concepts",
    "behavioral interview questions",
    "21 day coding challenge",
    "interview preparation guide",
    "programming questions",
    "fresher interview questions",
    "3-10 LPA jobs",
    "coding bootcamp",
    "Python interview",
    "C++ interview",
    "FAANG interview prep",
    "online assessment",
  ],
  openGraph: {
    title: "Complete Coding Interview Preparation | Chesume Blog",
    description:
      "Master coding interviews with comprehensive prep: 80+ questions, system design, OOP, behavioral questions, and complete language references.",
    url: "/blog",
  },
  twitter: {
    title: "Complete Coding Interview Prep | Chesume",
    description:
      "Comprehensive interview preparation: coding questions, system design, OOP concepts, and behavioral strategies.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
