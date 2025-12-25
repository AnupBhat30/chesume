"use client";

import { useEffect, useState, useLayoutEffect } from "react";
import { getApiKey } from "@/lib/apiKey";
import { Key, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ApiKeyBanner() {
  const [hasKey, setHasKey] = useState(() => !!getApiKey());
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeySet = () => setHasKey(true);
    window.addEventListener("api-key-set", handleKeySet);
    return () => window.removeEventListener("api-key-set", handleKeySet);
  }, []);

  if (!mounted || hasKey || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 w-[90%] max-w-2xl"
      >
        <div className="glass border border-primary-accent/30 shadow-glow-strong rounded-2xl p-4 flex items-center justify-between gap-6 backdrop-blur-xl bg-background/90">
          <div className="flex items-center gap-3 text-sm text-text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary-accent/20 flex items-center justify-center shrink-0">
              <Key className="w-5 h-5 text-primary-accent animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-primary-accent">API Key Required</p>
              <p className="text-text-secondary text-xs">
                Add your Gemini API key to unlock AI generation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const heroSection = document.getElementById("hero-api-key");
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: "smooth" });
                  window.dispatchEvent(new CustomEvent("open-api-key-input"));
                } else {
                  window.location.href = "/#hero-api-key";
                }
              }}
              className="whitespace-nowrap text-xs font-bold bg-primary-accent text-background px-4 py-2 rounded-xl hover:bg-primary-hover transition-all shadow-glow"
            >
              Set Key
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
