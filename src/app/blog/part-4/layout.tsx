import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Part 4: Recursion, Linked Lists & Matrices",
    description:
        "19 advanced interview questions covering recursion patterns, linked list operations, matrix traversal, and pointer manipulation. Test your understanding of memory and data structures.",
    keywords: [
        "recursion interview",
        "linked list questions",
        "matrix problems",
        "pointer manipulation",
        "reverse linked list",
        "detect cycle linked list",
        "matrix rotation",
        "recursive algorithms",
    ],
    openGraph: {
        title: "Part 4: Recursion & Linked Lists | Chesume",
        description:
            "19 advanced questions on recursion, linked lists, and matrices for technical interviews.",
        url: "/blog/part-4",
    },
    alternates: {
        canonical: "/blog/part-4",
    },
};

export default function Part4Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
