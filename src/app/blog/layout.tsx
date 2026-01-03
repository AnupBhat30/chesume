import { Metadata } from "next";

export const metadata: Metadata = {
    title: "80+ Coding Interview Questions Series",
    description:
        "A comprehensive 21-day roadmap to master 80+ coding questions asked in 3-10 LPA job interviews. Includes The Golden 20 Masterclass and 25 Must-Know Puzzles.",
    keywords: [
        "coding interview questions",
        "DSA roadmap",
        "21 day coding challenge",
        "interview preparation guide",
        "programming questions",
        "fresher interview questions",
        "3-10 LPA jobs",
        "coding bootcamp",
        "Python interview",
        "C++ interview",
    ],
    openGraph: {
        title: "80+ Coding Interview Questions | Chesume Blog",
        description:
            "A comprehensive 21-day roadmap to master the most common coding questions asked in job interviews.",
        url: "/blog",
    },
    twitter: {
        title: "80+ Coding Interview Questions | Chesume",
        description:
            "Master 80+ coding questions with our 21-day interview prep roadmap.",
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
