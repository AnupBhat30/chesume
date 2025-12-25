"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogHighlight() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary-accent text-xs font-medium mb-6 tracking-wide uppercase border-primary-accent/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Free Learning Resource</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Master the{" "}
              <span className="text-gradient from-primary-accent to-primary-hover">
                80+ Most Common
              </span>{" "}
              Coding Questions
            </h2>

            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              We&apos;ve curated a comprehensive 21-day roadmap, the{" "}
              <span className="text-warning font-bold">Golden 20 Patterns</span>
              , and{" "}
              <span className="text-success font-bold">
                25 Must-Know Puzzles
              </span>
              . By mastering these, you don&apos;t just learn questions—you
              learn the{" "}
              <span className="text-text-primary font-bold underline decoration-primary-accent/40">
                logic that solves thousands
              </span>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                {
                  icon: Code2,
                  title: "Dual Language",
                  desc: "Python & C++ solutions",
                },
                {
                  icon: Sparkles,
                  title: "Interview Ready",
                  desc: "Complexity & edge cases",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/blog">
              <button className="group h-14 px-8 rounded-full bg-white text-background font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-gray-200 w-full sm:w-auto">
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                  Part 1: Foundation
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text-primary">
                    Reverse a String
                  </h3>
                  <p className="text-sm text-text-muted italic">
                    "Like flipping a cassette tape or reading a word in a
                    mirror."
                  </p>
                </div>

                <div className="rounded-xl bg-[#0d1117] overflow-hidden border border-white/5">
                  <div className="flex gap-2 px-4 py-2 border-b border-white/5 bg-white/5">
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      Python
                    </span>
                    <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                      C++
                    </span>
                  </div>
                  <SyntaxHighlighter
                    language="python"
                    style={oneDark}
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      background: "transparent",
                      fontSize: "0.75rem",
                    }}
                  >
                    {`def reverse_string(s):
    return s[::-1]`}
                  </SyntaxHighlighter>
                </div>

                <div className="flex gap-4 text-xs">
                  <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-text-muted block mb-1 uppercase tracking-tighter">
                      Time
                    </span>
                    <span className="text-text-primary font-bold">O(N)</span>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-text-muted block mb-1 uppercase tracking-tighter">
                      Space
                    </span>
                    <span className="text-text-primary font-bold">O(N)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
