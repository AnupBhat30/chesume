"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { problemLibrary, Difficulty } from "@/lib/practice/problemLibrary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Brain, Search, Sparkles, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PracticePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    Difficulty | "All"
  >("All");

  const filteredProblems = useMemo(() => {
    return problemLibrary.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.concepts.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDifficulty =
        selectedDifficulty === "All" ||
        problem.difficulty === selectedDifficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, selectedDifficulty]);

  const difficulties: (Difficulty | "All")[] = [
    "All",
    "Easy",
    "Medium",
    "Hard",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70 tracking-tight"
          >
            Guided Practice Mode
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Master coding patterns with a Socratic AI guide that helps you
            discover solutions, not just copy them.
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card/50 p-4 rounded-2xl border border-border/50 backdrop-blur-sm">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search problems, concepts..."
                className="pl-10 bg-background/50 border-border/50 focus:bg-background transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {difficulties.map((diff) => (
                <Button
                  key={diff}
                  variant={selectedDifficulty === diff ? "default" : "outline"}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={cn(
                    "rounded-full px-6 transition-all",
                    selectedDifficulty === diff
                      ? "shadow-lg shadow-primary/20"
                      : "hover:bg-muted"
                  )}
                >
                  {diff}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProblems.length > 0 ? (
              filteredProblems.map((problem, index) => (
                <motion.div
                  layout
                  key={problem.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group relative flex flex-col p-6 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      variant={
                        problem.difficulty === "Easy"
                          ? "default"
                          : problem.difficulty === "Medium"
                          ? "secondary"
                          : "destructive"
                      }
                      className={cn(
                        "px-3 py-1 rounded-full border-0",
                        problem.difficulty === "Easy" &&
                          "bg-green-500/10 text-green-500 hover:bg-green-500/20",
                        problem.difficulty === "Medium" &&
                          "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
                        problem.difficulty === "Hard" &&
                          "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      )}
                    >
                      {problem.difficulty}
                    </Badge>
                    <div className="flex items-center text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 mr-1.5" />
                      {problem.estimatedTime}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">
                    {problem.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {problem.concepts.map((concept) => (
                      <span
                        key={concept}
                        className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/70 bg-muted/50 border border-border/50 px-2.5 py-1 rounded-md"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
                    <Link
                      href={`/practice/${problem.id}?mode=guided`}
                      className="col-span-1"
                    >
                      <Button className="w-full group/btn bg-primary/10 hover:bg-primary/20 text-primary border-0 shadow-none">
                        <Brain className="w-4 h-4 mr-2" />
                        Guided
                      </Button>
                    </Link>
                    <Link
                      href={`/practice/${problem.id}?mode=solo`}
                      className="col-span-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full group/solo hover:border-primary/50"
                      >
                        Solo
                        <Code2 className="w-4 h-4 ml-2 text-muted-foreground group-hover/solo:text-primary transition-colors" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">No problems found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you&apos;re
                  looking for.
                </p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDifficulty("All");
                  }}
                  className="mt-4"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
