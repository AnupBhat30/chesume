"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Code, Briefcase, Lightbulb } from "lucide-react";

const categories = [
  {
    id: "technical",
    label: "Technical",
    icon: <Code className="w-4 h-4" />,
    questions: [
      "Explain the difference between useEffect and useLayoutEffect. When did you use each in [Project Name]?",
      "How does React's reconciliation algorithm work, and how did you optimize it for your dashboard?",
      "What are the trade-offs of using Server Actions vs. API routes in your current architecture?",
    ],
  },
  {
    id: "applied",
    label: "Applied Skills",
    icon: <Briefcase className="w-4 h-4" />,
    questions: [
      "Your resume mentions 'reduced API latency by 40%'. Walk me through the profiling method you used.",
      "How did you handle state management for the real-time collaboration feature?",
      "Explain the exact database optimization you implemented for the search functionality.",
    ],
  },
  {
    id: "project",
    label: "Project Experience",
    icon: <MessageSquare className="w-4 h-4" />,
    questions: [
      "Walk me through your PR #47. Why did you choose that specific approach over alternatives?",
      "What was the most challenging bug you faced in [Project Name] and how did you solve it?",
      "If you had to rewrite [Project Name] today, what architectural changes would you make?",
    ],
  },
  {
    id: "problem-solving",
    label: "Problem-Solving",
    icon: <Lightbulb className="w-4 h-4" />,
    questions: [
      "How would you design a rate-limiter for the API you built?",
      "Describe a time you had a technical disagreement with a teammate. How was it resolved?",
      "How do you ensure your code is scalable and maintainable in a fast-paced environment?",
    ],
  },
];

export default function QuestionCategories() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Sample Questions{" "}
            <span className="text-text-muted">You&apos;ll Face</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            We generate specific, high-impact questions tailored to your actual
            experience.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-primary-accent text-background shadow-glow"
                  : "glass text-text-secondary hover:text-text-primary hover:bg-white/5"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-primary-accent/5 blur-3xl rounded-[3rem] -z-10" />

          <div className="glass rounded-[2.5rem] p-10 min-h-100 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {categories
                  .find((c) => c.id === activeTab)
                  ?.questions.map((q, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6 group"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent font-mono font-bold group-hover:bg-primary-accent group-hover:text-background transition-all duration-300">
                        {i + 1}
                      </div>
                      <p className="text-text-primary text-xl leading-relaxed font-medium italic">
                        &quot;{q}&quot;
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>

            {/* Decorative element */}
            <div className="absolute bottom-0 right-0 p-10 opacity-5">
              <MessageSquare className="w-32 h-32 text-primary-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
