import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language: "python" | "cpp" | "javascript" | "typescript";
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language,
  showLineNumbers = false,
}: CodeBlockProps) {
  const getLanguageLabel = (lang: string) => {
    switch (lang) {
      case "cpp":
        return "C++";
      case "javascript":
        return "JavaScript";
      case "typescript":
        return "TypeScript";
      default:
        return lang.charAt(0).toUpperCase() + lang.slice(1);
    }
  };

  return (
    <div className="relative mb-4">
      <div className="absolute top-2 right-2 text-xs text-green-400 font-mono bg-gray-800 px-2 py-1 rounded z-10">
        {getLanguageLabel(language)}
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1rem",
          paddingTop: "2rem",
          background: "#1f2937", // gray-800
          borderRadius: "0.5rem",
          borderLeft: "4px solid #10b981", // green-500
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          },
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
