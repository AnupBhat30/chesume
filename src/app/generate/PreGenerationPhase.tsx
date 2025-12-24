"use client";

import { useState } from "react";
import { AnalysisSummary } from "./types";
import { Upload, AlertTriangle } from "lucide-react";

interface PreGenerationPhaseProps {
  analysis: AnalysisSummary | null;
  onUpload: (file: File) => void;
  onGenerate: () => void;
  isAnalyzing: boolean;
  jobDescription: string;
  setJobDescription: (value: string) => void;
}

export default function PreGenerationPhase({
  analysis,
  onUpload,
  onGenerate,
  isAnalyzing,
  jobDescription,
  setJobDescription,
}: PreGenerationPhaseProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input changed");
    if (e.target.files && e.target.files[0]) {
      console.log("File selected:", e.target.files[0].name);
      onUpload(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        return;
      }
      onUpload(file);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {!analysis ? (
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Upload your resume to begin
          </h1>
          <p className="text-text-secondary text-lg">
            We&apos;ll analyze your experience and prepare personalized
            questions.
          </p>

          <label
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-2xl cursor-pointer transition-all bg-[#242424] ${
              isDragging
                ? "border-primary-accent bg-primary-accent/5"
                : "border-[#3a3a3a] hover:border-primary-accent"
            }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload
                className={`w-12 h-12 mb-4 transition-colors ${
                  isDragging ? "text-primary-accent" : "text-text-secondary"
                }`}
              />
              <p className="mb-2 text-sm text-text-secondary">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-text-secondary">PDF (MAX. 10MB)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={handleFileChange}
              disabled={isAnalyzing}
            />
          </label>

          <div className="text-left space-y-2">
            <label className="text-sm font-medium text-text-secondary">
              Job Description / Requirements (Optional)
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here to get more targeted questions..."
              className="w-full h-32 p-4 bg-[#242424] border border-[#3a3a3a] rounded-xl focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all resize-none text-sm"
            />
          </div>

          {isAnalyzing && (
            <div className="flex items-center justify-center gap-2 text-primary-accent">
              <div className="w-4 h-4 border-2 border-primary-accent border-t-transparent rounded-full animate-spin" />
              <span>Analyzing resume...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">
              Ready to see what interviewers will actually ask?
            </h2>
            <p className="text-text-secondary">
              We&apos;ve analyzed your resume. Here&apos;s what we found:
            </p>
          </div>

          <div className="text-left space-y-2">
            <label className="text-sm font-medium text-text-secondary">
              Job Description / Requirements (Optional)
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here to get more targeted questions..."
              className="w-full h-32 p-4 bg-[#242424] border border-[#3a3a3a] rounded-xl focus:border-primary-accent focus:ring-1 focus:ring-primary-accent outline-none transition-all resize-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#242424] p-6 rounded-xl border border-[#3a3a3a] text-center">
              <div className="text-3xl font-bold text-primary-accent mb-1">
                {analysis.technicalSkills}
              </div>
              <div className="text-sm text-text-secondary">
                Technical Skills
              </div>
            </div>
            <div className="bg-[#242424] p-6 rounded-xl border border-[#3a3a3a] text-center">
              <div className="text-3xl font-bold text-primary-accent mb-1">
                {analysis.projects}
              </div>
              <div className="text-sm text-text-secondary">Projects Found</div>
            </div>
            <div className="bg-[#242424] p-6 rounded-xl border border-[#3a3a3a] text-center">
              <div className="text-3xl font-bold text-primary-accent mb-1">
                {analysis.claimsToVerify}
              </div>
              <div className="text-sm text-text-secondary">
                Claims to Verify
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-amber-200 text-sm">
              ⚠️ These aren&apos;t softball questions. We&apos;ve identified{" "}
              {analysis.claimsToVerify} specific claims that need deep
              verification.
            </p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-primary-accent font-medium">
              Specific promise: 25+ personalized questions
            </p>
            <button
              onClick={onGenerate}
              className="w-full py-4 bg-primary-accent hover:bg-primary-hover text-white font-bold text-xl rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary-accent/20"
            >
              Generate My Interview Questions
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
