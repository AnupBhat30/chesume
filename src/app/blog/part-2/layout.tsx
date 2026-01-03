import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Part 2: String Mastery - The Most Asked Category",
    description:
        "18 essential string interview questions covering reversals, anagrams, palindrome strings, and character manipulation. Strings appear in 40% of all coding interviews.",
    keywords: [
        "string interview questions",
        "reverse string algorithm",
        "anagram detection",
        "palindrome string",
        "string manipulation",
        "character frequency",
        "substring problems",
        "string algorithms",
    ],
    openGraph: {
        title: "Part 2: String Mastery | Chesume",
        description:
            "18 essential string questions covering reversals, anagrams, and palindromes - appearing in 40% of interviews.",
        url: "/blog/part-2",
    },
    alternates: {
        canonical: "/blog/part-2",
    },
};

export default function Part2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
