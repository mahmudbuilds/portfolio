export type ProjectCategory = "Full-Stack" | "AI & Systems" | "Frontend Concepts";

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
  category: ProjectCategory;
  stack: string[];
  features: string[];
  metrics: ProjectMetric[];
  architecture: ArchitectureSpec;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentHex: string;
  screenshot?: string;
  screenshotAlt?: string;
  diagram?: "inventry-locking";
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillItem[];
}

export interface ExperienceMilestone {
  year: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}
