import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Part 6: Blind 75 LeetCode Questions",
  description:
    "Master the complete Blind 75 LeetCode list with solutions in Python and C++. Essential questions for FAANG interviews covering arrays, strings, trees, graphs, DP, and more.",
  keywords: [
    "Blind 75 LeetCode",
    "FAANG interview questions",
    "coding interview preparation",
    "algorithms",
    "data structures",
    "Python solutions",
    "C++ solutions",
  ],
  openGraph: {
    title: "Part 6: Blind 75 LeetCode Questions | Chesume",
    description:
      "Complete Blind 75 list with Python and C++ solutions for FAANG interviews.",
    url: "/blog/part-6",
  },
  alternates: {
    canonical: "/blog/part-6",
  },
};

export default function Part6Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
