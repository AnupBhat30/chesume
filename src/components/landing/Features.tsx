"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MessageSquare,
  ArrowUpRight,
  FileText,
  BookOpen,
  Trophy,
  Brain,
} from "lucide-react";
import { useState, useRef } from "react";

// --- Sub-components for Visuals ---

const MockChat = () => {
  const messages = [
    {
      role: "interviewer",
      text: "I see you led the migration to Microservices at your last role. What was the biggest challenge?",
    },
    {
      role: "user",
      text: "The main hurdle was maintaining data consistency across services during the transition...",
    },
    {
      role: "interviewer",
      text: "How did you handle the distributed transactions?",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 font-sans">
      <div className="mb-6 p-5 rounded-2xl bg-background/70 border border-foreground/5 font-mono text-[12px] text-text-muted overflow-hidden relative group/code shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error/50" />
            <div className="w-3 h-3 rounded-full bg-warning/50" />
            <div className="w-3 h-3 rounded-full bg-success/50" />
          </div>
          <span className="opacity-50 text-[10px] uppercase tracking-widest">
            resume_analysis.pdf
          </span>
        </div>
        <div className="relative">
          <span className="text-primary-accent">Experience:</span> Senior
          Software Engineer
          <br />
          <span className="text-success">Key Tech:</span> React, Node.js, AWS,
          Kubernetes
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-1 h-4 bg-primary-accent ml-1 align-middle"
          />
        </div>
      </div>
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.role === "interviewer" ? -10 : 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.5 }}
          className={`max-w-[80%] p-3 rounded-2xl text-xs ${
            msg.role === "interviewer"
              ? "bg-surface border border-foreground/5 self-start"
              : "bg-primary-accent text-white self-end shadow-lg shadow-primary-accent/20"
          }`}
        >
          {msg.text}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex gap-1 p-2"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted" />
      </motion.div>
    </div>
  );
};

const generateRandomValues = () => ({
  x: Math.random() * 350 - 175,
  y: Math.random() * 350 - 175,
});

const PatternCloud = () => {
  const patterns = [
    "Sliding Window",
    "Two Pointers",
    "Backtracking",
    "DP",
    "Graphs",
    "Tries",
    "Heaps",
    "Sorting",
    "Recursion",
    "Bit Masking",
    "Greedy",
    "Binary Search",
    "Union Find",
    "Segment Trees",
    "Trie",
    "Dijkstra",
    "BFS/DFS",
    "Topological Sort",
    "Kruskal's",
    "Monotonic Stack",
  ];

  const randomValues = patterns.map(generateRandomValues);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="flex flex-wrap gap-12 justify-center p-28 opacity-10">
        {patterns.map((p, i) => (
          <motion.span
            key={i}
            animate={{
              x: [0, randomValues[i]?.x || 0, 0],
              y: [0, randomValues[i]?.y || 0, 0],
              opacity: [0.05, 0.7, 0.05],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-7xl font-black whitespace-nowrap"
          >
            {p}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const WhiteboardCanvas = () => {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPoints((prev) => [...prev.slice(-50), { x, y }]);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 cursor-crosshair overflow-hidden bg-surface/40"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <svg className="w-full h-full">
        <motion.path
          d={
            points.length > 0
              ? `M ${points[0].x} ${points[0].y} ${points
                  .map((p) => `L ${p.x} ${p.y}`)
                  .join(" ")}`
              : ""
          }
          fill="none"
          stroke="var(--color-primary-accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        />
      </svg>
      <div className="absolute top-10 left-10 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-error/60" />
        <div className="w-3 h-3 rounded-full bg-warning/60" />
        <div className="w-3 h-3 rounded-full bg-success/60" />
      </div>
      <div className="absolute bottom-6 right-6">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-3 py-1.5 rounded-lg bg-primary-accent/10 border border-primary-accent/20 backdrop-blur-md"
        >
          <p className="text-[10px] font-bold text-primary-accent uppercase tracking-widest">
            Interactive
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const MasteryRoadmap = () => {
  const steps = [
    { title: "Fundamentals", status: "completed" },
    { title: "Patterns", status: "completed" },
    { title: "System Design", status: "in-progress" },
    { title: "Behavioral", status: "pending" },
    { title: "Negotiation", status: "pending" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 gap-6">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-4">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step.status === "completed"
                ? "bg-success text-white"
                : step.status === "in-progress"
                ? "bg-primary-accent text-white animate-pulse"
                : "bg-foreground/10 text-text-muted"
            }`}
          >
            {step.status === "completed" ? "✓" : i + 1}
          </div>
          <div className="flex-1 h-1 bg-foreground/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width:
                  step.status === "completed"
                    ? "100%"
                    : step.status === "in-progress"
                    ? "60%"
                    : "0%",
              }}
              className={`h-full ${
                step.status === "completed" ? "bg-success" : "bg-primary-accent"
              }`}
            />
          </div>
          <span
            className={`text-xs font-bold ${
              step.status === "pending"
                ? "text-text-muted"
                : "text-text-primary"
            }`}
          >
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
};

const BlogPreview = () => (
  <div className="w-full h-full flex flex-col justify-center p-8 gap-4">
    <div className="space-y-3">
      <div className="h-4 w-3/4 bg-foreground/5 rounded-md animate-pulse" />
      <div className="h-4 w-1/2 bg-foreground/5 rounded-md animate-pulse" />
    </div>
    <div className="p-4 rounded-2xl bg-surface border border-foreground/5 shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary-accent/10 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-primary-accent" />
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-primary-accent">
          New Article
        </div>
      </div>
      <div className="text-sm font-bold mb-2">
        Mastering the &ldquo;Golden 20&rdquo; Patterns
      </div>
      <div className="text-[10px] text-text-muted leading-relaxed">
        Why 90% of candidates fail to recognize the Sliding Window pattern...
      </div>
    </div>
  </div>
);

const features = [
  {
    id: "resume",
    title: "Resume Intelligence",
    description:
      "Upload your resume and get AI-generated interview questions tailored to your specific experience and tech stack.",
    icon: <FileText className="w-5 h-5 text-current" />,
    className: "lg:col-span-2 lg:row-span-2",
    badge: "AI Analysis",
    visual: (
      <div className="absolute inset-0 bg-linear-to-b from-primary-accent/5 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-primary-accent)_0%,transparent_70%)] opacity-[0.03]" />
        <div className="relative h-full flex flex-col">
          <div className="p-6 border-b border-foreground/5 flex items-center justify-between bg-surface/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-accent/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-primary-accent" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Resume Scan
                </p>
                <p className="text-xs font-bold">Tailored Questions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] font-mono">Ready</span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <MockChat />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "patterns",
    title: "Golden 20 Patterns",
    description:
      "Master the 20 most critical algorithmic patterns that appear in 90% of top-tier engineering interviews.",
    icon: <Trophy className="w-5 h-5 text-current" />,
    className: "lg:col-span-2 lg:row-span-1",
    badge: "20 Core Patterns",
    visual: (
      <div className="absolute inset-0 flex items-center justify-center bg-surface/30">
        <PatternCloud />
        <div className="relative z-10 text-center">
          <motion.h4
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-8xl font-black text-primary-accent/20 tracking-tighter"
          >
            20
          </motion.h4>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted -mt-4">
            Golden Patterns
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "mastery",
    title: "The Mastery Path",
    description:
      "A structured 5-part guide to mastering the interview process, from fundamentals to advanced system design.",
    icon: <BookOpen className="w-5 h-5 text-current" />,
    className: "lg:col-span-1 lg:row-span-2",
    badge: "5-Part Series",
    visual: <MasteryRoadmap />,
  },
  {
    id: "puzzles",
    title: "Logic & Puzzles",
    description:
      "Sharpen your problem-solving skills with our curated collection of brain teasers and logic puzzles.",
    icon: <Brain className="w-5 h-5 text-current" />,
    className: "lg:col-span-1 lg:row-span-1",
    badge: "Brain Teasers",
    visual: <WhiteboardCanvas />,
  },
  {
    id: "blogs",
    title: "Expert Insights",
    description:
      "Deep dives into engineering culture, interview strategies, and technical deep-dives.",
    icon: <MessageSquare className="w-5 h-5 text-current" />,
    className: "lg:col-span-1 lg:row-span-1",
    badge: "Latest Blogs",
    visual: <BlogPreview />,
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background">
      {/* Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-success/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-primary-accent text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Zap className="w-3 h-3" />
            The Chesume Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-8xl font-bold text-text-primary mb-6 tracking-tight"
          >
            Master the <span className="text-primary-accent">Patterns</span>.
            <br />
            <span className="text-text-muted">Crush the Interview.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Stop memorizing questions. Start mastering the mental models used by
            top-tier engineers at FAANG.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative rounded-[2.5rem] bg-surface border border-foreground/5 hover:border-primary-accent/30 transition-all duration-500 overflow-hidden ${feature.className}`}
            >
              {/* Visual Layer */}
              <div className="absolute inset-0 z-0">{feature.visual}</div>

              {/* Content Layer */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end bg-linear-to-t from-surface via-surface/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-background/50 backdrop-blur-md border border-foreground/5 flex items-center justify-center text-primary-accent group-hover:scale-110 group-hover:bg-primary-accent group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  {feature.badge && (
                    <div className="px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-[10px] font-bold text-primary-accent uppercase tracking-widest backdrop-blur-md">
                      {feature.badge}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-70">
                  {feature.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary-accent)_10%,transparent_20%)] animate-[spin_4s_linear_infinite] opacity-40" />
              </div>

              {/* Border Overlay */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-foreground/5 group-hover:border-primary-accent/60 transition-colors duration-500 z-20 pointer-events-none" />

              {/* Inner Shadow/Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.15)] pointer-events-none z-20" />
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 5 * 0.05 }}
            className="group relative rounded-[2.5rem] bg-surface border border-foreground/5 hover:border-primary-accent/30 transition-all duration-500 overflow-hidden lg:col-span-1 lg:row-span-1 cursor-pointer"
          >
            {/* Visual Layer */}
            <div className="absolute inset-0 z-0 bg-linear-to-br from-primary-accent/10 to-transparent" />

            {/* Content Layer */}
            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-background/50 backdrop-blur-md border border-foreground/5 flex items-center justify-center text-primary-accent group-hover:scale-110 group-hover:bg-primary-accent group-hover:text-white transition-all duration-500">
                  <Zap className="w-5 h-5 text-current" />
                </div>
                <div className="px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-[10px] font-bold text-primary-accent uppercase tracking-widest backdrop-blur-md">
                  Quick Start
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight flex items-center gap-2">
                  Ready to start?
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Generate your first kit in seconds and ace your next
                  interview.
                </p>
              </div>
            </div>

            {/* Border Overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-foreground/5 group-hover:border-primary-accent/60 transition-colors duration-500 z-20 pointer-events-none" />

            {/* Inner Shadow/Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_1px_3px_rgba(255,255,255,0.15)] pointer-events-none z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
