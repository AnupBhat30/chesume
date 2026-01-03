import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Part 3: Arrays, Searching & Sorting - Core DSA",
    description:
        "29 essential array interview questions covering binary search, bubble sort, merge sort, quick sort, and all major sorting algorithms. The most important data structure in coding interviews.",
    keywords: [
        "array interview questions",
        "binary search algorithm",
        "sorting algorithms",
        "bubble sort",
        "merge sort",
        "quick sort",
        "searching algorithms",
        "array manipulation",
        "two sum array",
    ],
    openGraph: {
        title: "Part 3: Arrays & Sorting | Chesume",
        description:
            "29 array questions including binary search and all major sorting algorithms.",
        url: "/blog/part-3",
    },
    alternates: {
        canonical: "/blog/part-3",
    },
};

export default function Part3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
