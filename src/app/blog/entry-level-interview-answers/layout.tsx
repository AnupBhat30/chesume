import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entry-Level Interview Answers: 200+ Questions for 5-10 LPA Jobs",
  description:
    "Complete answers to 200+ interview questions for entry-level tech positions. OOP concepts, SQL queries, system design basics, and coding problems with Python/C++ solutions for 5-10 LPA companies.",
  keywords: [
    "entry level interview questions",
    "5-10 LPA interview prep",
    "OOP interview questions",
    "SQL interview questions",
    "coding interview answers",
    "fresher interview guide",
    "programming interview questions",
    "system design basics",
    "Python interview questions",
    "C++ interview questions",
    "entry level tech jobs",
  ],
  openGraph: {
    title: "Entry-Level Interview Answers | Chesume",
    description:
      "Master 200+ interview questions for 5-10 LPA jobs. Complete answers with code examples in Python and C++.",
    url: "/blog/entry-level-interview-answers",
  },
  twitter: {
    title: "Entry-Level Interview Answers | Chesume",
    description:
      "Complete interview prep guide with 200+ questions and answers for entry-level tech positions.",
  },
  alternates: {
    canonical: "/blog/entry-level-interview-answers",
  },
};

export default function EntryLevelInterviewAnswersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
