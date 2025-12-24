"use client";

import { motion } from "framer-motion";
import {
  FileUp,
  ClipboardList,
  Brain,
  ListChecks,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    title: "Upload Resume",
    description:
      "Drop your PDF. Our AI parses every bullet point and tech stack claim.",
    icon: <FileUp className="w-6 h-6" />,
  },
  {
    title: "Paste Job Description",
    description:
      "Optional. We'll tailor the questions to the specific role you're targeting.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "AI Analyzes Claims",
    description:
      "We identify potential weak spots and high-impact projects to probe.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "Get 25+ Questions",
    description:
      "Receive a personalized list of questions across 4 critical categories.",
    icon: <ListChecks className="w-6 h-6" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-surface/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            4 Minutes to{" "}
            <span className="text-primary-accent">Brutal Clarity.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Our process is designed for speed and maximum impact. No fluff, just
            the questions that matter.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/5 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="w-24 h-24 rounded-3xl bg-background border border-white/10 flex items-center justify-center text-primary-accent mb-8 shadow-xl group-hover:border-primary-accent/50 transition-all duration-500 group-hover:shadow-glow relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-elevated border border-white/10 flex items-center justify-center text-xs font-bold text-text-muted">
                    0{index + 1}
                  </div>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="lg:hidden my-8 text-text-muted">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <button className="px-10 py-5 rounded-full glass text-text-primary font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-3 mx-auto">
            Try with Sample Resume
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
