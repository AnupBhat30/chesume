import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Golden 20 Patterns - Master Interview Coding in 48 Hours",
    description:
        "Master the 8 fundamental coding patterns that solve 70% of all interview problems. 20 essential questions covering Two Pointers, Hashing, Slow/Fast Pointers, Single-Pass, In-Place Swapping, Math Optimization, Recursion, and Stack patterns.",
    keywords: [
        "golden 20 patterns",
        "coding interview patterns",
        "two pointers algorithm",
        "hashing interview",
        "slow fast pointers",
        "coding patterns",
        "algorithm patterns",
        "interview prep fast track",
        "48 hour coding prep",
    ],
    openGraph: {
        title: "The Golden 20 Patterns | Chesume",
        description:
            "Only 48 hours to prepare? Master these 20 questions that teach 8 patterns solving 70% of interview problems.",
        url: "/blog/golden-20",
    },
    twitter: {
        title: "The Golden 20 Patterns | Chesume",
        description:
            "Master 20 essential interview questions in 48 hours with the Golden 20 patterns.",
    },
    alternates: {
        canonical: "/blog/golden-20",
    },
};

export default function GoldenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
