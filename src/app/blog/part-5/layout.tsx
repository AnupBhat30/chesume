import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Part 5: Pattern Printing & Interview Strategy",
    description:
        "Final 12+ pattern printing questions and a complete framework for approaching any new problem in a coding interview. Master star patterns, pyramid patterns, and interview communication.",
    keywords: [
        "pattern printing",
        "star pattern",
        "pyramid pattern",
        "interview strategy",
        "coding interview tips",
        "problem solving approach",
        "number patterns",
        "interview framework",
    ],
    openGraph: {
        title: "Part 5: Patterns & Strategy | Chesume",
        description:
            "12+ pattern questions and a complete framework for approaching any interview problem.",
        url: "/blog/part-5",
    },
    alternates: {
        canonical: "/blog/part-5",
    },
};

export default function Part5Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
