import CodeBlock from "./CodeBlock";

interface SyntaxSectionProps {
  title: string;
  explanation: string;
  pythonCode?: string;
  cppCode?: string;
  interviewTips?: string;
  commonPitfalls?: string;
  performance?: string;
  additionalNotes?: string;
}

export default function SyntaxSection({
  title,
  explanation,
  pythonCode,
  cppCode,
  interviewTips,
  commonPitfalls,
  performance,
  additionalNotes,
}: SyntaxSectionProps) {
  return (
    <div className="mb-12 p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:bg-gray-800/70 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      <div className="space-y-6">
        <div>
          <p className="text-gray-300 leading-relaxed">{explanation}</p>
        </div>

        {(pythonCode || cppCode) && (
          <div className="space-y-4">
            {pythonCode && <CodeBlock language="python" code={pythonCode} />}
            {cppCode && <CodeBlock language="cpp" code={cppCode} />}
          </div>
        )}

        {interviewTips && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Interview Tips
            </h4>
            <p className="text-gray-300 text-sm">{interviewTips}</p>
          </div>
        )}

        {commonPitfalls && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-2">
              Common Pitfalls
            </h4>
            <p className="text-gray-300 text-sm">{commonPitfalls}</p>
          </div>
        )}

        {performance && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-yellow-400 mb-2">
              Performance Notes
            </h4>
            <p className="text-gray-300 text-sm">{performance}</p>
          </div>
        )}

        {additionalNotes && (
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-400 mb-2">
              Additional Notes
            </h4>
            <p className="text-gray-300 text-sm">{additionalNotes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
