"use client";

import { motion } from "framer-motion";
import { Target, Brain, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const paths = [
  {
    title: "The Golden 20",
    subtitle: "Master the Patterns",
    description:
      "Don't memorize 500 questions. Master the 8 patterns that solve them all. Two-pointers, Sliding Window, and more.",
    icon: <Target className="w-8 h-8" />,
    link: "/blog/golden-20",
    color: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    title: "25 Must-Know Puzzles",
    subtitle: "Sharpen Your Logic",
    description:
      "The secret sauce of top-tier interviews. We break down the logic behind the most famous brain teasers.",
    icon: <Brain className="w-8 h-8" />,
    link: "/blog/puzzles",
    color: "text-primary-accent",
    bg: "bg-primary-accent/10",
    border: "border-primary-accent/20",
  },
  {
    title: "80+ Practice Set",
    subtitle: "Build Muscle Memory",
    description:
      "A 21-day roadmap covering everything from Arrays to Dynamic Programming. The complete interview syllabus.",
    icon: <Zap className="w-8 h-8" />,
    link: "/blog",
    color: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
];

export default function MasteryPath() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            The Path to{" "}
            <span className="text-gradient from-primary-accent to-primary-hover">
              Technical Mastery
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Stop random LeetCoding. Follow our structured curriculum designed to
            take you from basics to FAANG-ready logic.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 rounded-[2.5rem] bg-surface border ${path.border} hover:border-opacity-50 transition-all duration-500 relative overflow-hidden`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${path.bg} blur-[60px] rounded-full -z-10 group-hover:opacity-100 transition-opacity`}
              />

              <div
                className={`w-16 h-16 rounded-2xl ${path.bg} flex items-center justify-center ${path.color} mb-8 group-hover:scale-110 transition-transform duration-500`}
              >
                {path.icon}
              </div>

              <div className="mb-6">
                <h4
                  className={`text-sm font-bold uppercase tracking-[0.2em] ${path.color} mb-2`}
                >
                  {path.subtitle}
                </h4>
                <h3 className="text-3xl font-bold text-text-primary tracking-tight">
                  {path.title}
                </h3>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                {path.description}
              </p>

              <Link href={path.link}>
                <button
                  className={`flex items-center gap-2 font-bold ${path.color} group/btn`}
                >
                  Explore Path
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
