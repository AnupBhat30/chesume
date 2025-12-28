"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ComponentPropsWithoutRef } from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-2xl font-bold mb-4 text-primary-accent"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-xl font-bold mb-3 text-primary-accent"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-lg font-bold mb-2 text-primary-accent"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p
              className="mb-4 last:mb-0 text-foreground/90 leading-relaxed"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              className="list-disc pl-6 mb-4 last:mb-0 space-y-1 text-foreground/90"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal pl-6 mb-4 last:mb-0 space-y-1 text-foreground/90"
              {...props}
            />
          ),
          li: ({ ...props }) => (
            <li className="text-foreground/90" {...props} />
          ),
          code({
            inline,
            className,
            children,
            ...props
          }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={oneDark as any}
                language={match[1]}
                PreTag="div"
                className="rounded-lg mb-4 border border-white/10"
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  background: "#1e1e1e",
                  fontSize: "0.85rem",
                }}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="bg-white/10 px-1.5 py-0.5 rounded text-primary-accent font-mono text-[0.9em]"
                {...props}
              >
                {children}
              </code>
            );
          },
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-primary-accent pl-4 italic my-4 text-muted-foreground"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
