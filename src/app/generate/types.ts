export type GenerationState = "preview" | "loading" | "complete" | "error";

export interface AnalysisSummary {
  technicalSkills: number;
  projects: number;
  claimsToVerify: number;
}

export interface Questions {
  technical: string[];
  behavioral: string[];
  project_specific: string[];
  scenario_based: string[];
}
