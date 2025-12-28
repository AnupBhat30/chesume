import LanguageToggleCodeBlock from "./LanguageToggleCodeBlock";

interface QuestionCardProps {
  title: string;
  learn: string;
  context: string;
  steps: string[];
  pythonCode: string;
  cppCode: string;
  walkthrough: string;
  complexity: {
    time: string;
    space: string;
    why: string;
  };
  mistakes: {
    mistake: string;
    fix: string;
  }[];
  tryIt: string;
}

export default function QuestionCard({
  title,
  learn,
  context,
  steps,
  pythonCode,
  cppCode,
  walkthrough,
  complexity,
  mistakes,
  tryIt,
}: QuestionCardProps) {
  const formatText = (text: string) => text.split("\\n").join("\n");

  return (
    <section
      className="mb-16 scroll-mt-20"
      id={title.toLowerCase().replace(/\s+/g, "-")}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
            What You'll Learn
          </h3>
          <p className="text-gray-300 whitespace-pre-line">
            {formatText(learn)}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Real-World Context
          </h3>
          <p className="text-gray-300 italic whitespace-pre-line">
            &quot;{formatText(context)}&quot;
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Breaking It Down
          </h3>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            {steps.map((step, i) => (
              <li key={i} className="whitespace-pre-line">
                {formatText(step)}
              </li>
            ))}
          </ul>
        </div>

        <LanguageToggleCodeBlock pythonCode={pythonCode} cppCode={cppCode} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Line-by-Line Walkthrough
          </h3>
          <p className="text-gray-300 whitespace-pre-line">
            {formatText(walkthrough)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-foreground/5 p-4 rounded-lg border border-foreground/10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-400 mb-2">
              Complexity Analysis
            </h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>
                <span className="font-semibold">Time:</span> {complexity.time}
              </li>
              <li>
                <span className="font-semibold">Space:</span> {complexity.space}
              </li>
              <li className="text-xs text-gray-400 mt-1 whitespace-pre-line">
                {formatText(complexity.why)}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2">
              Common Mistakes
            </h3>
            <ul className="text-sm space-y-2 text-gray-300">
              {mistakes.map((m, i) => (
                <li key={i}>
                  <span className="text-red-400 whitespace-pre-line">
                    ❌ {formatText(m.mistake)}
                  </span>
                  <br />
                  <span className="text-green-400 whitespace-pre-line">
                    ✅ {formatText(m.fix)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-1">
            Try It Yourself
          </h3>
          <p className="text-sm text-gray-300 whitespace-pre-line">
            {formatText(tryIt)}
          </p>
        </div>
      </div>
    </section>
  );
}
