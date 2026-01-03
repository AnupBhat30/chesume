import { Metadata } from "next";

export const metadata: Metadata = {
    title: "25 Must-Know Interview Puzzles - Tech Interview Brain Teasers",
    description:
        "Master 25 essential logic puzzles asked in tech interviews at Google, Microsoft, and top companies. Covers Logic & Deduction, Optimization, Measurement, Weighing, River Crossing, and Trick problems with detailed solutions.",
    keywords: [
        "interview puzzles",
        "logic puzzles",
        "brain teasers",
        "Google interview puzzles",
        "Microsoft interview",
        "consulting puzzles",
        "quant interview",
        "lateral thinking puzzles",
        "Monty Hall problem",
        "bridge and torch puzzle",
    ],
    openGraph: {
        title: "25 Must-Know Interview Puzzles | Chesume",
        description:
            "Master 25 essential brain teasers and logic puzzles asked in tech interviews with detailed solutions.",
        url: "/blog/puzzles",
    },
    twitter: {
        title: "25 Must-Know Interview Puzzles | Chesume",
        description:
            "Master 25 interview puzzles with step-by-step solutions and pattern recognition.",
    },
    alternates: {
        canonical: "/blog/puzzles",
    },
};

export default function PuzzlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
