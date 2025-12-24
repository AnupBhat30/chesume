"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  RefreshCcw,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,184,205,0.1),transparent_70%)] -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-accent text-sm font-bold uppercase tracking-widest mb-10">
            <Sparkles className="w-4 h-4" />
            Ready to crush it?
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold text-text-primary mb-10 tracking-tight leading-[1.1]">
            Stop Guessing.
            <br />
            <span className="text-primary-accent">Start Mastering.</span>
          </h2>

          <div className="flex flex-col items-center gap-8">
            <Link href="/generate">
              <button className="group h-20 px-12 rounded-full bg-primary-accent hover:bg-primary-hover text-background font-bold text-2xl flex items-center gap-4 transition-all transform hover:scale-[1.05] shadow-glow hover:shadow-glow-strong">
                Master Your Resume
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>

            <p className="text-text-secondary text-xl font-medium">
              Join the community.{" "}
              <span className="text-text-primary">100% Free.</span>
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-success" />
              </div>
              <span className="text-text-muted font-medium">
                100% Free & Open Source
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-warning/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-warning" />
              </div>
              <span className="text-text-muted font-medium">
                Community Driven
              </span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-accent/10 flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-primary-accent" />
              </div>
              <span className="text-text-muted font-medium">
                Regularly Updated
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
