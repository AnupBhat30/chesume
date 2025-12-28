"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { problemLibrary, Problem } from "@/lib/practice/problemLibrary";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Editor from "@monaco-editor/react";
import {
  Brain,
  Code2,
  Lightbulb,
  Play,
  RotateCcw,
  ArrowLeft,
  FileText,
  Terminal,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Send,
  Copy,
  Check,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type Phase =
  | "understanding"
  | "approach"
  | "implementation"
  | "optimization"
  | "reflection";

interface Message {
  role: "system" | "user" | "ai";
  content: string;
  timestamp: Date;
}

interface TestResult {
  index: number;
  passed: boolean;
  input?: unknown[];
  expected?: unknown;
  actual?: unknown;
  error?: string;
}

export default function PracticeSessionPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const problemId = params.problemId as string;
  const mode = searchParams.get("mode") || "guided";

  const [problem, setProblem] = useState<Problem | null>(null);
  const [phase, setPhase] = useState<Phase>("understanding");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState<"cpp" | "python">("python");
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [activeTab, setActiveTab] = useState<"description" | "guide">(
    "description"
  );
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleRunTests = useCallback(() => {
    if (!problem) return;

    if (language !== "python") {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Currently, only Python execution is supported in the browser. C++ support is coming soon!",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        role: "system",
        content: "Running tests...",
        timestamp: new Date(),
      },
    ]);

    setIsConsoleOpen(true);

    try {
      // Create a safe-ish execution environment
      const results: TestResult[] = problem.testCases.map((tc, index) => {
        try {
          interface ListNode {
            val: unknown;
            next: ListNode | null;
          }

          // Helper to convert array to linked list
          const arrayToList = (arr: unknown): ListNode | null => {
            if (!Array.isArray(arr) || arr.length === 0) return null;
            const head: ListNode = { val: arr[0], next: null };
            let curr = head;
            for (let i = 1; i < arr.length; i++) {
              curr.next = { val: arr[i], next: null };
              curr = curr.next;
            }
            return head;
          };

          // Helper to convert linked list to array
          const listToArray = (head: ListNode | null) => {
            const arr = [];
            let curr = head;
            while (curr) {
              arr.push(curr.val);
              curr = curr.next;
            }
            return arr;
          };

          // Prepare inputs (convert arrays to lists if needed)
          let inputs = [...tc.input];
          if (problem.id === "reverse-linked-list") {
            inputs = [arrayToList(tc.input[0])];
          }

          // Wrap user code in a function and call it
          const userFn = new Function(`
            function ListNode(val, next) {
              this.val = (val===undefined ? 0 : val)
              this.next = (next===undefined ? null : next)
            }
            ${code}
            return ${problem.id.replace(/-([a-z])/g, (g) =>
              g[1].toUpperCase()
            )}(...arguments);
          `);

          const result = userFn(...inputs);

          // Convert result back to array if needed
          let actual = result;
          if (problem.id === "reverse-linked-list") {
            actual = listToArray(result);
          }

          const passed = JSON.stringify(actual) === JSON.stringify(tc.expected);

          return {
            index,
            passed,
            input: tc.input,
            expected: tc.expected,
            actual: actual,
          };
        } catch (err: unknown) {
          return {
            index,
            passed: false,
            input: tc.input,
            expected: tc.expected,
            error: err instanceof Error ? err.message : "Unknown error",
          };
        }
      });

      setTestResults(results);

      const allPassed = results.every((r) => r.passed);
      if (allPassed) {
        setIsSolved(true);
        setPhase("optimization");
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            content:
              "🎉 **All tests passed!** Excellent work. Now that we have a working solution, let's talk about its efficiency. What is the time and space complexity of your code?",
            timestamp: new Date(),
          },
        ]);
        setActiveTab("guide");
      } else {
        const failedCount = results.filter((r) => !r.passed).length;
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content: `Tests completed: ${results.length - failedCount}/${
              results.length
            } passed.`,
            timestamp: new Date(),
          },
        ]);
        if (phase === "implementation") {
          setActiveTab("guide");
        }
      }
    } catch (err: unknown) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Execution Error: ${
            err instanceof Error ? err.message : "Unknown error"
          }. Check your syntax!`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [problem, language, code, phase]);

  useEffect(() => {
    const foundProblem = problemLibrary.find((p) => p.id === problemId);
    if (foundProblem) {
      setProblem(foundProblem);

      // Load saved code or use starter code
      const savedCode = localStorage.getItem(`code_${problemId}_${language}`);
      if (savedCode) {
        setCode(savedCode);
      } else {
        setCode(foundProblem.starterCode[language]);
      }

      // Initial AI message
      if (mode === "guided" && messages.length === 0) {
        setMessages([
          {
            role: "ai",
            content: `Hi! I'm your AI guide. Let's tackle **${foundProblem.title}** together.\n\nBefore we write any code, let's make sure we understand the problem. In your own words, what are we trying to find here?`,
            timestamp: new Date(),
          },
        ]);
      }
    }
  }, [problemId, language, mode, messages.length]);

  // Save code to localStorage
  useEffect(() => {
    if (problemId && code) {
      localStorage.setItem(`code_${problemId}_${language}`, code);
    }
  }, [code, problemId, language]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleRunTests();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleRunTests]); // Re-bind if code changes to ensure handleRunTests has latest state if needed,
  // though handleRunTests uses state so it should be fine.
  // Actually, handleRunTests is a stable function reference if defined correctly.

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || isAiThinking) return;

    const apiKey = localStorage.getItem("gemini_api_key");
    if (!apiKey) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Please set your Gemini API key in the banner above to use Guided Mode.",
          timestamp: new Date(),
        },
      ]);
      return;
    }

    const newUserMessage: Message = {
      role: "user",
      content: userInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsAiThinking(true);

    try {
      const response = await fetch("/api/practice/guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          context: {
            problem,
            phase,
            messages: [...messages, newUserMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            code,
            language,
            testResults: testResults.map((r) => ({
              input: r.input,
              passed: r.passed,
              expected: r.expected,
              actual: r.actual,
              error: r.error,
            })),
          },
        }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: data.response,
          timestamp: new Date(),
        },
      ]);

      // Simple heuristic for phase transitions based on AI response
      // In a real app, the AI would return the next phase in a structured field
      if (
        data.response.toLowerCase().includes("approach") &&
        phase === "understanding"
      ) {
        setPhase("approach");
      } else if (
        (data.response.toLowerCase().includes("implement") ||
          data.response.toLowerCase().includes("code")) &&
        phase === "approach"
      ) {
        setPhase("implementation");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `Error: ${errorMessage}. Please try again.`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsAiThinking(false);
    }
  };

  const getHint = () => {
    if (!problem) return;
    if (hintLevel < 4) {
      const nextLevel = hintLevel + 1;
      setHintLevel(nextLevel);
      const hintKey = `level${nextLevel}` as keyof typeof problem.hints;
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: `**Hint Level ${nextLevel}:** ${problem.hints[hintKey]}`,
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleResetCode = () => {
    if (!problem) return;
    if (
      window.confirm(
        "Are you sure you want to reset your code? This will delete your current progress."
      )
    ) {
      setCode(problem.starterCode[language]);
    }
  };

  const handleSubmit = () => {
    handleRunTests();
    // In a real app, this would also save the submission to a database
  };

  if (!problem) return <div>Loading...</div>;

  return (
    <div className="h-screen bg-[#1a1a1a] text-foreground flex flex-col overflow-hidden">
      {/* Slim Header */}
      <header className="h-12 border-b border-white/5 bg-[#282828] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <Link
            href="/practice"
            className="hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="h-4 w-px bg-white/10" />
          <h1 className="text-sm font-medium truncate max-w-50">
            {problem.title}
          </h1>
          <Badge
            variant="outline"
            className="text-[10px] py-0 h-5 border-white/10 bg-white/5"
          >
            {problem.difficulty}
          </Badge>
          {isSolved && (
            <Badge className="text-[10px] py-0 h-5 bg-green-500/20 text-green-500 border-green-500/20">
              Solved
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-2 hover:bg-white/5"
            onClick={getHint}
            disabled={hintLevel >= 4}
          >
            <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
            Hint ({4 - hintLevel})
          </Button>
          <div className="h-4 w-px bg-white/10 mx-1" />
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-xs gap-2 hover:bg-white/5 text-green-500"
            onClick={handleRunTests}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Run
          </Button>
          {isSolved && (
            <Link
              href={`/practice/${
                problemLibrary[
                  (problemLibrary.findIndex((p) => p.id === problemId) + 1) %
                    problemLibrary.length
                ].id
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs gap-2 hover:bg-white/5 text-primary"
              >
                Next Problem
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          )}
          <Button
            size="sm"
            className="h-8 text-xs px-4 bg-primary hover:bg-primary/90 text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden p-2 gap-2 bg-[#1a1a1a]">
        {/* Left Panel: Description & AI Guide */}
        <div className="w-[40%] flex flex-col bg-[#282828] rounded-lg border border-white/5 overflow-hidden">
          <div className="flex border-b border-white/5 bg-[#333333]/50">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-4 py-2 text-xs font-medium flex items-center gap-2 transition-colors ${
                activeTab === "description"
                  ? "text-white border-b-2 border-primary bg-[#282828]"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Description
            </button>
            <button
              onClick={() => setActiveTab("guide")}
              className={`px-4 py-2 text-xs font-medium flex items-center gap-2 transition-colors ${
                activeTab === "guide"
                  ? "text-white border-b-2 border-primary bg-[#282828]"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              AI Guide
              {isAiThinking && (
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              )}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {activeTab === "description" ? (
              <div className="prose prose-sm prose-invert max-w-none">
                <MarkdownRenderer content={problem.description} />

                <div className="mt-8 space-y-6">
                  {problem.testCases.slice(0, 2).map((tc, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Example {i + 1}
                      </h4>
                      <div className="bg-white/5 rounded-lg p-3 font-mono text-[11px] space-y-1 border border-white/5">
                        <div>
                          <span className="text-muted-foreground">Input:</span>{" "}
                          {JSON.stringify(tc.input)}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Output:</span>{" "}
                          {JSON.stringify(tc.expected)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <div className="flex-1 space-y-4 mb-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={i}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[90%] p-3 rounded-xl text-sm ${
                          msg.role === "user"
                            ? "bg-primary/10 border border-primary/20 text-primary-foreground"
                            : msg.role === "system"
                            ? "bg-white/5 text-muted-foreground italic text-xs"
                            : "bg-white/5 border border-white/10 text-foreground"
                        }`}
                      >
                        <MarkdownRenderer content={msg.content} />
                      </div>
                    </motion.div>
                  ))}
                  {isAiThinking && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
                        <div className="flex gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="relative mt-auto">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask the guide..."
                    className="w-full bg-[#333333] border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-sm outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!userInput.trim() || isAiThinking}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-primary disabled:opacity-50 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Editor & Console */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          {/* Editor Area */}
          <div className="flex-1 bg-[#282828] rounded-lg border border-white/5 flex flex-col overflow-hidden">
            <div className="h-10 border-b border-white/5 bg-[#333333]/50 flex items-center justify-between px-4 shrink-0">
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium">Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={language}
                  onChange={(e) =>
                    setLanguage(e.target.value as "cpp" | "python")
                  }
                  className="bg-transparent text-[11px] font-medium outline-none cursor-pointer hover:text-white transition-colors"
                >
                  <option value="cpp">C++</option>
                  <option value="python">Python</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="p-1 hover:text-white transition-colors"
                  title="Copy Code"
                >
                  {isCopied ? (
                    <Check className="w-3 h-3 text-green-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
                <button
                  onClick={handleResetCode}
                  className="p-1 hover:text-white transition-colors"
                  title="Reset Code"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            <div className="flex-1 relative">
              <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={code}
                onChange={(val) => setCode(val || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  readOnly: false,
                  automaticLayout: true,
                  padding: { top: 16 },
                  fontFamily: "'Fira Code', monospace",
                  fontLigatures: true,
                  tabSize: 2,
                  cursorBlinking: "smooth",
                  formatOnPaste: true,
                  formatOnType: true,
                }}
              />
            </div>
          </div>

          {/* Console Area */}
          <div
            className={`bg-[#282828] rounded-lg border border-white/5 flex flex-col transition-all duration-300 ${
              isConsoleOpen ? "h-[35%]" : "h-10"
            }`}
          >
            <button
              onClick={() => setIsConsoleOpen(!isConsoleOpen)}
              className="h-10 flex items-center justify-between px-4 hover:bg-white/5 transition-colors shrink-0"
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs font-medium">Console</span>
              </div>
              <div className="flex items-center gap-2">
                {testResults.length > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setTestResults([]);
                    }}
                    className="p-1 hover:text-white transition-colors"
                    title="Clear Console"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
                {isConsoleOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronUp className="w-4 h-4" />
                )}
              </div>
            </button>

            {isConsoleOpen && (
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar border-t border-white/5">
                {testResults.length > 0 ? (
                  <div className="space-y-3">
                    {testResults.map((res, i) => (
                      <div
                        key={i}
                        className={`p-3 rounded-lg border ${
                          res.passed
                            ? "bg-green-500/5 border-green-500/10"
                            : "bg-red-500/5 border-red-500/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider ${
                              res.passed ? "text-green-500" : "text-red-500"
                            }`}
                          >
                            Case {i + 1}:{" "}
                            {res.passed ? "Accepted" : "Wrong Answer"}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-2 font-mono text-[11px]">
                          <div className="bg-black/20 p-2 rounded">
                            <span className="text-muted-foreground block mb-1">
                              Input
                            </span>
                            <code className="text-white">
                              {JSON.stringify(res.input)}
                            </code>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-black/20 p-2 rounded">
                              <span className="text-muted-foreground block mb-1">
                                Expected
                              </span>
                              <code className="text-white">
                                {JSON.stringify(res.expected)}
                              </code>
                            </div>
                            <div className="bg-black/20 p-2 rounded">
                              <span className="text-muted-foreground block mb-1">
                                Actual
                              </span>
                              <code
                                className={
                                  res.passed ? "text-green-400" : "text-red-400"
                                }
                              >
                                {res.error
                                  ? `Error: ${res.error}`
                                  : JSON.stringify(res.actual)}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground text-xs italic">
                    Run your code to see test results here.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
