"use client";

import { useState } from "react";
import { useTheme } from "@/lib/themeContext";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "midnight" as const, name: "Midnight", color: "#3b82f6" },
  { id: "nebula" as const, name: "Nebula", color: "#a855f7" },
  { id: "abyss" as const, name: "Abyss", color: "#0ea5e9" },
  { id: "emerald" as const, name: "Emerald", color: "#10b981" },
  { id: "sakura" as const, name: "Sakura", color: "#ec4899" },
  { id: "solarized-light" as const, name: "Solarized", color: "#fdf6e3" },
  { id: "latte" as const, name: "Latte", color: "#eff1f5" },
  { id: "clean" as const, name: "Clean", color: "#ffffff" },
  { id: "nord" as const, name: "Nord", color: "#88c0d0" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-surface hover:bg-surface-hover border border-foreground/10 transition-colors"
      >
        <Palette className="icon-md text-foreground" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 bg-surface border border-foreground/10 rounded-xl shadow-xl p-3 z-50 min-w-50"
          >
            <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-3">
              Theme
            </p>
            <div className="space-y-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    theme === t.id
                      ? "bg-primary-accent/20 border border-primary-accent/30"
                      : "hover:bg-surface-hover"
                  }`}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-sm text-foreground">{t.name}</span>
                  {theme === t.id && (
                    <span className="ml-auto text-primary-accent text-sm">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
