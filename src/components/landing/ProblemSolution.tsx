"use client";

import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

const problems = [
  {
    title: "Memorizing LeetCode",
    description:
      "Interviewers smell rehearsed answers. They&apos;ll ask follow-ups about YOUR projects, not generic algorithms.",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  {
    title: "Mock Interviews with Friends",
    description:
      "They won&apos;t probe exaggerated claims on your resume. We will. Expect questions like: &apos;Explain the exact DB optimization you did.&apos;",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  {
    title: "Expensive Coaching ($200+/hr)",
    description:
      "Same generic playbook for everyone. Our AI reads YOUR resume, YOUR projects, YOUR tech stack.",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Generic Prep{" "}
            <span className="text-text-muted">Won&apos;t Cut It.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Here&apos;s why you&apos;re still failing the technical rounds
            despite months of preparation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-red-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[60px] rounded-full -z-10 group-hover:bg-red-500/10 transition-colors" />

              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-8">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[2.5rem] bg-primary-accent/5 border border-primary-accent/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/10 blur-[120px] rounded-full -z-10" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-widest mb-6">
                <Check className="w-3.5 h-3.5" />
                The Chesume Solution
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6 tracking-tight">
                AI-Driven Precision Prep
              </h3>
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                We use advanced LLMs to cross-reference your resume against
                industry standards and generate the exact &quot;brutal&quot;
                questions you&apos;ll face. No more generic advice.
              </p>
            </div>
            <button className="px-10 py-5 rounded-full bg-primary-accent text-background font-bold text-lg hover:bg-primary-hover transition-all shadow-glow hover:shadow-glow-strong whitespace-nowrap">
              Try It Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
