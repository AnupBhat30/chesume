"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this just ChatGPT prompts?",
    answer:
      "No. We use a multi-step RAG (Retrieval-Augmented Generation) pipeline that cross-references your resume against a proprietary database of 50,000+ real technical interview questions and industry-specific project patterns.",
  },
  {
    question: "Will interviewers ask these exact questions?",
    answer:
      "While we can't predict the future, our AI identifies the most likely 'weak spots' in your resume that experienced interviewers are trained to probe. We prepare you for the patterns, not just the words.",
  },
  {
    question: "I have 5+ years of experience, is this for me?",
    answer:
      "Absolutely. In fact, senior candidates often face more 'brutal' project deep-dives. We adjust the difficulty and depth based on your years of experience and the seniority of the role.",
  },
  {
    question: "What if my resume sucks?",
    answer:
      "We'll expose that. If our AI can't find enough substance to generate deep questions, it's a sign your resume needs more detail. Fix it BEFORE the interview, not after a rejection.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-4">
            But Wait, What About...
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border-custom rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between bg-surface hover:bg-elevated transition-colors"
              >
                <span className="text-lg font-semibold text-text-primary">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 bg-surface text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
