import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chesume.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    // Static pages
    const staticPages = [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${siteUrl}/generate`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${siteUrl}/practice`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ];

    // Blog series pages
    const blogPages = [
        { slug: "golden-20", priority: 0.85 },
        { slug: "puzzles", priority: 0.8 },
        { slug: "part-1", priority: 0.7 },
        { slug: "part-2", priority: 0.7 },
        { slug: "part-3", priority: 0.7 },
        { slug: "part-4", priority: 0.7 },
        { slug: "part-5", priority: 0.7 },
    ].map((page) => ({
        url: `${siteUrl}/blog/${page.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: page.priority,
    }));

    return [...staticPages, ...blogPages];
}
