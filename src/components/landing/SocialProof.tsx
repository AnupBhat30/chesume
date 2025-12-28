"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Candidates Prepared",
    value: "14,000+",
    color: "text-primary-accent",
  },
  {
    label: "From Top Tech",
    value: "Meta, Google, Amazon",
    color: "text-text-primary",
  },
  { label: "Average Rating", value: "4.9/5", color: "text-success" },
];

const logos = [
  "Meta",
  "Google",
  "Amazon",
  "Netflix",
  "Stripe",
  "Airbnb",
  "Uber",
  "Microsoft",
  "Meta",
  "Google",
  "Amazon",
  "Netflix",
  "Stripe",
  "Airbnb",
  "Uber",
  "Microsoft",
];

export default function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-foreground/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              <div
                className={`text-5xl lg:text-6xl font-bold mb-3 tracking-tight ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-text-muted font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="text-center mb-10">
            <p className="text-text-muted text-sm font-medium uppercase tracking-[0.2em]">
              Trusted by candidates at
            </p>
          </div>

          <div className="flex overflow-hidden group">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            >
              {logos.map((logo, index) => (
                <span
                  key={index}
                  className="text-3xl md:text-4xl font-bold text-text-muted/30 hover:text-text-primary transition-colors cursor-default select-none"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
