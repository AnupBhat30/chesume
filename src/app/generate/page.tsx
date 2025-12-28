"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import PreGenerationPhase from "@/app/generate/PreGenerationPhase";
import LoadingPhase from "@/app/generate/LoadingPhase";
import CompletionPhase from "@/app/generate/CompletionPhase";
import { GenerationState, AnalysisSummary, Questions } from "./types";
import { getApiKey } from "@/lib/apiKey";

export default function GeneratePage() {
  const [state, setState] = useState<GenerationState>("preview");
  const [analysis, setAnalysis] = useState<AnalysisSummary | null>(null);
  const [questions, setQuestions] = useState<Questions | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resumeText, setResumeText] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = async (uploadedFile: File) => {
    console.log("File upload triggered:", uploadedFile.name);
    setIsAnalyzing(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      console.log("Uploading file to API...");
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      const userApiKey = getApiKey();
      const headers: Record<string, string> = {};
      if (userApiKey) {
        headers["x-api-key"] = userApiKey;
      }

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: headers,
        body: formData,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to analyze resume");
      }

      const data = await response.json();
      console.log("Analysis received:", data.analysis);
      setAnalysis(data.analysis);
      setResumeText(data.resumeText);
    } catch (err) {
      console.error("Upload error:", err);
      setError(
        err instanceof Error ? err.message : "Analysis failed. Try again."
      );
      setState("error");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGenerate = async () => {
    setState("loading");
    try {
      const userApiKey = getApiKey();
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (userApiKey) {
        headers["x-api-key"] = userApiKey;
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ resumeText, jobDescription }),
      });

      if (!response.ok) throw new Error("Failed to generate questions");

      const data = await response.json();
      if (!data.questions) {
        throw new Error("No questions were generated. Please try again.");
      }
      setQuestions(data.questions);
      setState("complete");
    } catch (err) {
      console.error(err);
      setError("Generation failed. Try again.");
      setState("error");
    }
  };

  return (
    <div className="min-h-screen bg-surface text-text-primary flex flex-col items-center p-4" data-theme="default">
      <Navbar />
      <div className="w-full max-w-3xl pt-32">
        {state === "preview" && (
          <PreGenerationPhase
            analysis={analysis}
            onUpload={handleFileUpload}
            onGenerate={handleGenerate}
            isAnalyzing={isAnalyzing}
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
        )}

        {state === "loading" && <LoadingPhase />}

        {state === "complete" && questions && (
          <CompletionPhase questions={questions} />
        )}

        {state === "error" && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-text-secondary mb-6">{error}</p>
            <button
              onClick={() => setState("preview")}
              className="px-6 py-2 bg-primary-accent hover:bg-primary-hover rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
