"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
          h1: ({ node, ...props }) => (
            <h1
              className="text-2xl font-bold mb-4 text-primary-accent"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-xl font-bold mb-3 text-primary-accent"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-lg font-bold mb-2 text-primary-accent"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="mb-4 text-text-primary leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-text-primary" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code
              className="bg-surface px-1.5 py-0.5 rounded text-primary-accent font-mono text-sm"
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre
              className="bg-surface p-4 rounded-xl overflow-x-auto mb-4 border border-[#3a3a3a]"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-primary-accent pl-4 italic my-4 text-text-secondary"
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
