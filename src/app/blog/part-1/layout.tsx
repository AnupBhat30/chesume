import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Part 1: Foundation Questions - Numbers & Basic Logic",
    description:
        "Master 22 essential number-based coding questions. The building blocks of all algorithms including palindrome numbers, Armstrong numbers, factorial, Fibonacci, and prime number problems.",
    keywords: [
        "number interview questions",
        "basic logic problems",
        "palindrome number",
        "Armstrong number",
        "factorial code",
        "Fibonacci series",
        "prime number algorithm",
        "coding fundamentals",
    ],
    openGraph: {
        title: "Part 1: Numbers & Basic Logic | Chesume",
        description:
            "Master 22 essential number-based coding questions - the building blocks of all algorithms.",
        url: "/blog/part-1",
    },
    alternates: {
        canonical: "/blog/part-1",
    },
};

export default function Part1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
