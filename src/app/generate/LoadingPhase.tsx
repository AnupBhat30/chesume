"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Circle } from "lucide-react";

const stages = [
  { id: 1, label: "Extracting resume content", duration: 3000 },
  {
    id: 2,
    label: "Identifying technical claims",
    duration: 4000,
    badge: "12 found",
  },
  {
    id: 3,
    label: "Cross-referencing job requirements",
    duration: 5000,
    badge: "8 matches",
  },
  { id: 4, label: "Generating deep-probe questions", duration: 10000 },
  { id: 5, label: "Adding follow-up scenarios", duration: 6000 },
];

export default function LoadingPhase() {
  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(28);

  useEffect(() => {
    if (currentStage < stages.length) {
      const timer = setTimeout(() => {
        setCompletedStages((prev) => [...prev, stages[currentStage].id]);
        setCurrentStage((prev) => prev + 1);
      }, stages[currentStage].duration);
      return () => clearTimeout(timer);
    }
  }, [currentStage]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-md mx-auto space-y-10 py-12">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Analyzing & Generating</h2>
        <p className="text-text-secondary">About {timeLeft}s remaining</p>
      </div>

      <div className="space-y-6">
        {stages.map((stage, index) => {
          const isCompleted = completedStages.includes(stage.id);
          const isActive = currentStage === index;

          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="flex items-center justify-between p-4 rounded-xl bg-surface border border-white/10"
            >
              <div className="flex items-center gap-4">
                {isCompleted ? (
                  <CheckCircle2 className="icon-lg text-success" />
                ) : isActive ? (
                  <Loader2 className="icon-lg text-primary-accent animate-spin" />
                ) : (
                  <Circle className="icon-lg text-white/20" />
                )}
                <span
                  className={
                    isCompleted
                      ? "text-text-primary"
                      : isActive
                      ? "text-primary-accent"
                      : "text-text-secondary"
                  }
                >
                  {stage.label}
                </span>
              </div>

              {isCompleted && stage.badge && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-2 py-1 bg-primary-accent/10 text-primary-accent text-xs font-bold rounded-full border border-primary-accent/20"
                >
                  {stage.badge}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
        <motion.div
          className="bg-primary-accent h-full"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStage / stages.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
