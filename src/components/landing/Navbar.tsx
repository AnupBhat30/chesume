"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ApiKeyBanner from "../ApiKeyBanner";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-glow group-hover:shadow-glow-strong transition-all">
            <Image
              src="/logo.png"
              alt="Chesume Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold text-text-primary tracking-tight">
            Chesume
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-text-secondary hover:text-primary-accent transition-colors"
          >
            Interview Blog
          </Link>
          <Link
            href="/blog/golden-20"
            className="text-sm font-medium text-text-secondary hover:text-primary-accent transition-colors"
          >
            Golden 20
          </Link>
          <Link href="/generate">
            <button className="px-5 py-2 rounded-full bg-primary-accent hover:bg-primary-hover text-background font-bold text-sm transition-all shadow-glow">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
