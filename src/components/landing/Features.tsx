"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GitBranch,
  Layout,
  ShieldAlert,
  Search,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Technical Depth Probing",
    description:
      "Tests if you actually wrote that &apos;scalable microservice&apos; or just copy-pasted from Stack Overflow.",
    icon: <Code2 className="w-6 h-6" />,
    className: "lg:col-span-2 lg:row-span-2",
    visual: (
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="space-y-2 font-mono text-[10px] text-text-muted">
          <div className="flex gap-2">
            <span className="text-primary-accent">const</span> analyze = (claim)
            ={">"} {"{"}
          </div>
          <div className="pl-4">depth: claim.verify(),</div>
          <div className="pl-4">authenticity: claim.probe()</div>
          <div>{"}"}</div>
        </div>
      </div>
    ),
  },
  {
    title: "Project Deep Dives",
    description:
      "Questions like: &apos;Walk me through your PR #47. Why that approach?&apos;",
    icon: <GitBranch className="w-6 h-6" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Anti-BS Detection",
    description:
      "Prepares you for skeptical interviewers who probe soft skill claims.",
    icon: <ShieldAlert className="w-6 h-6" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Whiteboard Simulations",
    description:
      "Real-world scenarios based on YOUR tech stack. No generic tree traversals.",
    icon: <Layout className="w-6 h-6" />,
    className: "lg:col-span-1 lg:row-span-2",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Cpu className="w-32 h-32 text-primary-accent" />
      </div>
    ),
  },
  {
    title: "Pattern Recognition",
    description:
      "Identifies common interview patterns from 50k+ real questions.",
    icon: <Search className="w-6 h-6" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Not Just Questions.
            <br />
            <span className="text-text-muted">A Complete Panic Test.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Built by engineers who&apos;ve bombed interviews. We know exactly
            where the traps are hidden.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative p-8 rounded-[2rem] bg-surface border border-white/5 hover:border-primary-accent/30 transition-all duration-500 overflow-hidden ${feature.className}`}
            >
              {feature.visual}

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6 w-12 h-12 rounded-2xl bg-primary-accent/10 flex items-center justify-center text-primary-accent group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
