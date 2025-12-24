"use client";

import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-2xl font-bold text-text-primary mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-accent flex items-center justify-center shadow-glow">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              Chesume
            </div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
              Transform interview anxiety into confident mastery. Built for
              developers who want to prove their worth through technical
              excellence.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">
              Resources
            </h4>
            <ul className="space-y-4 text-text-muted font-medium">
              <li>
                <a
                  href="/blog"
                  className="hover:text-primary-accent transition-colors"
                >
                  Interview Blog
                </a>
              </li>
              <li>
                <a
                  href="/blog/golden-20"
                  className="hover:text-primary-accent transition-colors"
                >
                  Golden 20 Patterns
                </a>
              </li>
              <li>
                <a
                  href="/blog/puzzles"
                  className="hover:text-primary-accent transition-colors"
                >
                  Interview Puzzles
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">
              Community
            </h4>
            <ul className="space-y-4 text-text-muted font-medium">
              <li>
                <a
                  href="https://github.com"
                  className="hover:text-primary-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Contributors
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold mb-8 uppercase tracking-widest text-xs">
              Legal
            </h4>
            <ul className="space-y-4 text-text-muted font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-accent transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-text-muted text-sm font-medium">
          <p>© 2025 Chesume AI. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
