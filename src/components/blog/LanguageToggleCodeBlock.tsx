"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  pythonCode: string;
  cppCode: string;
}

export default function LanguageToggleCodeBlock({
  pythonCode,
  cppCode,
}: CodeBlockProps) {
  const [language, setLanguage] = useState<"python" | "cpp">("python");

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-foreground/10 bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2 bg-foreground/5 border-b border-foreground/10">
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage("python")}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              language === "python"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Python
          </button>
          <button
            onClick={() => setLanguage("cpp")}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              language === "cpp"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            C++
          </button>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          {language === "python" ? "Python 3" : "C++ 17"}
        </span>
      </div>
      <div className="text-sm">
        <SyntaxHighlighter
          language={language === "python" ? "python" : "cpp"}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1.5rem",
            background: "transparent",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                'var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
          }}
        >
          {language === "python" ? pythonCode : cppCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
