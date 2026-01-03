import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guided Coding Practice",
    description:
        "Master coding patterns with a Socratic AI guide. Practice 80+ curated DSA problems with guided hints, multiple difficulty levels, and real-time feedback. Perfect for technical interview preparation.",
    keywords: [
        "coding practice",
        "DSA problems",
        "leetcode alternative",
        "guided coding",
        "Socratic learning",
        "algorithm practice",
        "data structures",
        "technical interview practice",
        "coding interview prep",
    ],
    openGraph: {
        title: "Guided Coding Practice | Chesume",
        description:
            "Master coding patterns with 80+ curated problems and a Socratic AI guide that helps you discover solutions.",
        url: "/practice",
    },
    twitter: {
        title: "Guided Coding Practice | Chesume",
        description:
            "Master coding patterns with 80+ curated problems and a Socratic AI guide.",
    },
    alternates: {
        canonical: "/practice",
    },
};

export default function PracticeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
