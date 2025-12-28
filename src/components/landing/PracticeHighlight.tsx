"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PracticeHighlight() {
  const steps = [
    {
      icon: Brain,
      title: "Socratic Guidance",
      description:
        "Our AI doesn't just give answers. It asks the right questions to help you discover the solution yourself.",
    },
    {
      icon: Code2,
      title: "Interactive Editor",
      description:
        "Write code in a professional-grade editor with real-time feedback and test case validation.",
    },
    {
      icon: Lightbulb,
      title: "Graduated Hints",
      description:
        "Stuck? Get a nudge, then a direction, then a concrete example. Help that scales with your needs.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Brain className="w-3 h-3" />
              New: Guided Practice
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Don&apos;t just memorize.
              <br />
              <span className="text-primary">Master the patterns.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-xl"
            >
              Experience a new way to learn data structures and algorithms. Our
              AI guide acts as a senior mentor, pair-programming with you
              through every step.
            </motion.p>

            <div className="space-y-6 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/practice">
                <Button size="lg" className="gap-2 group">
                  Try Guided Practice
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  AI Guide Session
                </div>
              </div>
              <div className="p-6 space-y-4 font-mono text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center shrink-0 text-[10px] text-primary font-bold">
                    AI
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border text-xs">
                    &quot;Good start! You&apos;ve declared the map. Now, as we
                    iterate through the array, what are we looking for in the
                    map?&quot;
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground text-xs">
                    &quot;The complement? target - current number?&quot;
                  </div>
                  <div className="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0 text-[10px] font-bold">
                    ME
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center shrink-0 text-[10px] text-primary font-bold">
                    AI
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border text-xs">
                    &quot;Exactly! And if we find it, what should we
                    return?&quot;
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
