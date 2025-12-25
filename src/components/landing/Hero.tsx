"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Terminal as TerminalIcon,
  Key,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getApiKey, setApiKey } from "@/lib/apiKey";
import Link from "next/link";

const TerminalLine = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -5 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
    className="flex gap-3 mb-1.5"
  >
    <span className="text-text-muted shrink-0 select-none">›</span>
    <span className="text-text-primary font-mono text-sm leading-relaxed">
      {children}
    </span>
  </motion.div>
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [apiKey, setApiKeyState] = useState("");
  const [showKeyInput, setShowKeyInput] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
      setApiKeyState(getApiKey() || "");

      if (window.location.hash === "#hero-api-key") {
        setShowKeyInput(true);
      }
    });

    const handleOpenKeyInput = () => setShowKeyInput(true);
    window.addEventListener("open-api-key-input", handleOpenKeyInput);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("open-api-key-input", handleOpenKeyInput);
    };
  }, []);

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKey = e.target.value;
    setApiKeyState(newKey);
    setApiKey(newKey);
    if (newKey) {
      window.dispatchEvent(new CustomEvent("api-key-set"));
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid -z-10 mask-[radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(38,139,210,0.15),transparent_50%)] -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary-accent text-xs font-medium mb-8 tracking-wide uppercase border-primary-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Open Source & Free Forever</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
              <span className="text-gradient from-primary-accent to-primary-hover">
                Master Your
              </span>
              <br />
              <span className="text-primary-accent relative">
                Interview.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary-accent/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 25 0, 50 5 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl">
              Chesume is a community-driven platform to help you crush technical
              interviews.
              <span className="text-text-primary font-medium">
                {" No paywalls. No subscriptions."}
              </span>{" "}
              Master the{" "}
              <span className="text-warning font-bold">Golden 20 Patterns</span>{" "}
              and <span className="text-success font-bold">80+ Questions</span>{" "}
              to unlock your potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <Link href="/generate">
                <button className="group h-14 px-8 rounded-full bg-primary-accent hover:bg-primary-hover text-background font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-glow hover:shadow-glow-strong w-full sm:w-auto">
                  Generate My Questions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/blog">
                <button className="h-14 px-8 rounded-full glass text-text-primary font-semibold text-lg hover:bg-white/5 transition-all w-full sm:w-auto">
                  80+ Interview Questions
                </button>
              </Link>
            </div>

            <div className="space-y-4" id="hero-api-key">
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  !apiKey
                    ? "text-primary-accent font-bold animate-pulse"
                    : "text-text-secondary hover:text-primary-accent"
                }`}
              >
                <Key className="w-4 h-4" />
                {apiKey
                  ? "Update Gemini API Key"
                  : "Add your own Gemini API Key (Required for Generation)"}
              </button>

              {showKeyInput && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-md"
                >
                  <div className="relative">
                    <input
                      type="password"
                      value={apiKey}
                      onChange={handleApiKeyChange}
                      placeholder="Enter your Gemini API Key..."
                      className="w-full h-12 pl-4 pr-12 bg-surface border border-border-custom rounded-xl focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all text-sm"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                      <Key className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-text-muted">
                    Your key is stored locally in your browser and never sent to
                    our servers except to process your requests.
                  </p>
                </motion.div>
              )}
            </div>

            <div className="mt-12 flex items-center gap-4 text-text-muted text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-elevated flex items-center justify-center text-[10px] font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>
                Joined by{" "}
                <span className="text-text-primary font-medium">14,000+</span>{" "}
                candidates this month
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl overflow-hidden group">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-text-muted font-mono uppercase tracking-widest">
                <TerminalIcon className="w-3 h-3" />
                chesume-analyzer.sh
              </div>
            </div>

            <div className="p-8 font-mono min-h-100">
              <TerminalLine delay={0.5}>
                <span className="text-primary-accent">chesume</span> analyze
                --file resume.pdf
              </TerminalLine>
              <TerminalLine delay={1.2}>
                <span className="text-success">✓</span> Parsing experience...{" "}
                <span className="text-text-muted">[Done]</span>
              </TerminalLine>
              <TerminalLine delay={1.8}>
                <span className="text-success">✓</span> Extracting claims...{" "}
                <span className="text-text-muted">[3 detected]</span>
              </TerminalLine>

              <div className="mt-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="p-4 rounded-lg bg-white/5 border border-white/5"
                >
                  <div className="text-[10px] text-primary-accent mb-1 uppercase font-bold">
                    Claim Detected
                  </div>
                  <div className="text-sm text-text-primary italic">
                    {'"Optimized API latency by 40% using Redis caching"'}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2 }}
                  className="p-4 rounded-lg bg-primary-accent/5 border border-primary-accent/10"
                >
                  <div className="text-[10px] text-warning mb-1 uppercase font-bold">
                    Generating Probe
                  </div>
                  <div className="text-sm text-text-primary">
                    {
                      '"Walk me through the cache invalidation strategy you used. How did you handle race conditions?"'
                    }
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 0.5 }}
                className="mt-8 flex items-center gap-2 text-success text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                </span>
                Analysis complete. 28 questions generated.
              </motion.div>
            </div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-accent/20 blur-[120px] rounded-full -z-10" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-accent/10 blur-[120px] rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
