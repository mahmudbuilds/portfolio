export type ProjectCategory = "All" | "Full-Stack" | "AI & Systems" | "Frontend Concepts";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ArchitectureSpec {
  clientArchitecture: string;
  backendArchitecture: string;
  databaseAndStorage: string;
  securityAndAuth: string;
  deploymentPipeline: string;
  keyTechnicalChallenge: string;
  solutionEngineered: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: "Full-Stack" | "AI & Systems" | "Frontend Concepts";
  stack: string[];
  features: string[];
  metrics: ProjectMetric[];
  architecture: ArchitectureSpec;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentHex: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  name: string;
  description?: string;
  skills: SkillItem[];
}

export interface ExperienceMilestone {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  tags?: string[];
}
