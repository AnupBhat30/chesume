import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Generate Interview Questions",
    description:
        "Upload your resume and get AI-generated personalized interview questions. Our AI analyzes your experience, skills, and claims to create challenging questions that actually test your knowledge.",
    keywords: [
        "resume analyzer",
        "interview question generator",
        "AI resume analysis",
        "personalized interview prep",
        "job interview questions",
        "technical interview questions",
    ],
    openGraph: {
        title: "Generate Interview Questions | Chesume",
        description:
            "Upload your resume and get AI-generated personalized interview questions tailored to your experience.",
        url: "/generate",
    },
    twitter: {
        title: "Generate Interview Questions | Chesume",
        description:
            "Upload your resume and get AI-generated personalized interview questions.",
    },
    alternates: {
        canonical: "/generate",
    },
};

export default function GenerateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
