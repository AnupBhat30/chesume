"use client";

import { Questions } from "./types";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Code,
  Briefcase,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { useState, useEffect } from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getApiKey } from "@/lib/apiKey";

interface CompletionPhaseProps {
  questions: Questions;
}

function NumberTicker({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = 2000;
    const incrementTime = totalMiliseconds / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
}

export default function CompletionPhase({ questions }: CompletionPhaseProps) {
  const [showAll, setShowAll] = useState(false);
  const [loadingAnswer, setLoadingAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const fetchAnswer = async (question: string, type: string = "technical") => {
    if (answers[question]) return;

    setLoadingAnswer(question);
    try {
      const userApiKey = getApiKey();
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (userApiKey) {
        headers["x-api-key"] = userApiKey;
      }

      const response = await fetch("/api/answer", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ question, type }),
      });
      const data = await response.json();
      setAnswers((prev) => ({ ...prev, [question]: data.answer }));
    } catch (err) {
      console.error("Failed to fetch answer:", err);
    } finally {
      setLoadingAnswer(null);
    }
  };

  const totalQuestions =
    (questions.technical?.length || 0) +
    (questions.behavioral?.length || 0) +
    (questions.project_specific?.length || 0) +
    (questions.scenario_based?.length || 0);

  const categories = [
    {
      label: "Technical Fundamentals",
      count: questions.technical?.length || 0,
      icon: Cpu,
      items: questions.technical || [],
      type: "technical",
    },
    {
      label: "Behavioral Skills",
      count: questions.behavioral?.length || 0,
      icon: Code,
      items: questions.behavioral || [],
      type: "behavioral",
    },
    {
      label: "Project Experience",
      count: questions.project_specific?.length || 0,
      icon: Briefcase,
      items: questions.project_specific || [],
      type: "technical",
    },
    {
      label: "Problem-Solving",
      count: questions.scenario_based?.length || 0,
      icon: Lightbulb,
      items: questions.scenario_based || [],
      type: "technical",
    },
  ];

  if (showAll) {
    return (
      <div className="space-y-8 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">All Questions</h2>
          <button
            onClick={() => setShowAll(false)}
            className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
          >
            Back to Summary
          </button>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.label} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#3a3a3a] pb-2">
                <cat.icon className="w-5 h-5 text-primary-accent" />
                <h3 className="text-xl font-semibold">{cat.label}</h3>
                <span className="text-sm text-text-secondary bg-[#242424] px-2 py-0.5 rounded-full border border-[#3a3a3a]">
                  {cat.count}
                </span>
              </div>
              <div className="grid gap-4">
                {cat.items.map((q, i) => (
                  <div
                    key={i}
                    className="bg-[#242424] p-6 rounded-xl border border-[#3a3a3a] hover:border-primary-accent/50 transition-all group"
                  >
                    <div className="flex gap-4 mb-4">
                      <span className="text-primary-accent font-mono font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                        {(i + 1).toString().padStart(2, "0")}
                      </span>
                      <MarkdownRenderer content={q} />
                    </div>

                    <div className="pl-10">
                      {answers[q] ? (
                        <div className="mt-4 p-6 bg-[#1a1a1a] rounded-xl border border-primary-accent/20 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="text-xs font-bold text-primary-accent uppercase tracking-widest mb-4">
                            Model Answer
                          </div>
                          <MarkdownRenderer content={answers[q]} />
                        </div>
                      ) : (
                        <button
                          onClick={() => fetchAnswer(q, cat.type)}
                          disabled={loadingAnswer === q}
                          className="text-sm font-bold text-primary-accent hover:text-primary-hover transition-colors flex items-center gap-2 disabled:opacity-50"
                        >
                          {loadingAnswer === q ? (
                            <>
                              <div className="w-3 h-3 border-2 border-primary-accent border-t-transparent rounded-full animate-spin" />
                              Generating Answer...
                            </>
                          ) : (
                            "View Model Answer →"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-full py-4 border border-[#3a3a3a] rounded-xl text-text-secondary hover:text-text-primary hover:bg-[#242424] transition-all"
        >
          Back to Top
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-10 py-8 animate-in fade-in zoom-in duration-700">
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center"
        >
          <div className="bg-success/20 p-4 rounded-full">
            <CheckCircle2 className="w-16 h-16 text-success" />
          </div>
        </motion.div>
        <h2 className="text-4xl font-bold">Your Interview Prep is Ready</h2>
        <p className="text-text-secondary text-lg">
          We generated{" "}
          <span className="text-text-primary font-bold">
            <NumberTicker value={totalQuestions} /> questions
          </span>{" "}
          across 4 categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="bg-[#242424] p-6 rounded-2xl border border-[#3a3a3a] flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-accent/10 rounded-xl">
                <cat.icon className="w-6 h-6 text-primary-accent" />
              </div>
              <span className="font-medium">{cat.label}</span>
            </div>
            <span className="text-2xl font-bold text-primary-accent">
              <NumberTicker value={cat.count} />
            </span>
          </motion.div>
        ))}
      </div>

      <div className="bg-[#242424] border border-[#3a3a3a] rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-[#3a3a3a] bg-[#2a2a2a]">
          <span className="text-sm font-bold text-text-secondary uppercase tracking-wider">
            Sneak Peek
          </span>
        </div>
        <div className="p-6">
          <MarkdownRenderer
            content={
              questions.technical?.[0]
                ? `"${questions.technical[0].substring(0, 150)}..."`
                : "No technical questions generated."
            }
            className="text-lg italic"
          />
        </div>
      </div>

      <button
        onClick={() => setShowAll(true)}
        className="w-full py-5 bg-primary-accent hover:bg-primary-hover text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-2 group"
      >
        Start Practicing
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
