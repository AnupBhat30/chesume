"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";

const features = [
  "25+ Personalized Questions",
  "Unlimited Regenerations (24hrs)",
  "AI-Generated Answers",
  "Download as .txt/.pdf",
  "Question History Dashboard",
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            One-Time.{" "}
            <span className="text-text-muted">No Subscription Trap.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Pay once per resume, get everything you need to crush the interview.
            No recurring fees, no hidden costs.
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 rounded-[3rem] bg-surface border border-foreground/10 shadow-2xl overflow-hidden group"
          >
            {/* Animated background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-accent/10 blur-[80px] rounded-full group-hover:bg-primary-accent/20 transition-colors duration-700" />

            <div className="absolute top-8 right-8">
              <div className="px-4 py-1.5 rounded-full bg-warning/10 text-warning text-[10px] font-bold uppercase tracking-[0.2em] border border-warning/20">
                Launch Special
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-7xl font-bold text-text-primary tracking-tighter">
                  $12
                </span>
                <span className="text-2xl text-text-muted line-through decoration-red-500/50">
                  $25
                </span>
              </div>
              <p className="text-text-secondary font-medium">
                Per Resume Analysis
              </p>
            </div>

            <div className="space-y-5 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-success" />
                  </div>
                  <span className="text-text-primary font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <button className="w-full py-6 rounded-2xl bg-primary-accent hover:bg-primary-hover text-on-primary font-bold text-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-glow hover:shadow-glow-strong flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5" />
              Generate My Questions
            </button>

            <div className="mt-8 flex items-center justify-center gap-6 text-text-muted text-xs font-medium uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-warning" />
                Instant Access
              </div>
              <div className="w-1 h-1 rounded-full bg-foreground/10" />
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-success" />
                200+ Used Today
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
