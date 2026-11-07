export interface SkillCategory {
  name: string;
  description: string;
  color: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Architecture",
    description: "Building responsive, highly tactile user interfaces with 60 FPS fluid animations.",
    color: "cyan",
    skills: [
      { name: "Next.js 16 (App Router)", level: "Core", highlight: true },
      { name: "React 19", level: "Core", highlight: true },
      { name: "TypeScript", level: "Core", highlight: true },
      { name: "Tailwind CSS v4", level: "Core", highlight: true },
      { name: "Motion (Framer Motion)", level: "Advanced", highlight: true },
      { name: "State Management", level: "Proficient" },
      { name: "Responsive & Accessible UI", level: "Core" },
      { name: "Client-Side Performance", level: "Advanced" }
    ]
  },
  {
    name: "Backend & Systems",
    description: "Designing decoupled, multi-tenant APIs with strict authorization and clean schemas.",
    color: "emerald",
    skills: [
      { name: "Python", level: "Core", highlight: true },
      { name: "Django & Django REST", level: "Core", highlight: true },
      { name: "Node.js & Express", level: "Advanced", highlight: true },
      { name: "RESTful API Design", level: "Core" },
      { name: "JWT & RBAC Security", level: "Core", highlight: true },
      { name: "PostgreSQL & Sequelize", level: "Advanced", highlight: true },
      { name: "Multi-Tenant Architecture", level: "Advanced", highlight: true },
      { name: "API Rate Limiting & Proxying", level: "Proficient" }
    ]
  },
  {
    name: "AI & Applied Intelligence",
    description: "Integrating modern LLM capabilities into pragmatic, problem-solving developer tools.",
    color: "violet",
    skills: [
      { name: "LLM API Integration", level: "Core", highlight: true },
      { name: "Prompt Engineering & Evaluation", level: "Core", highlight: true },
      { name: "ATS Compatibility Algorithms", level: "Advanced", highlight: true },
      { name: "pdfjs-dist Text Extraction", level: "Advanced" },
      { name: "Agentic Workflows", level: "Proficient", highlight: true },
      { name: "Zero-Data-Retention Pipelines", level: "Proficient" }
    ]
  },
  {
    name: "Cloud, Tooling & DevOps",
    description: "Modern developer ergonomics, version control, and cloud continuous deployment.",
    color: "amber",
    skills: [
      { name: "Bun Runtimes & Package Mgmt", level: "Core", highlight: true },
      { name: "Git & GitHub Workflows", level: "Core", highlight: true },
      { name: "Vercel & Cloud Edge", level: "Core", highlight: true },
      { name: "Render & Neon.tech (Postgres)", level: "Advanced" },
      { name: "Docker Basics", level: "Proficient" },
      { name: "CI / CD Pipelines", level: "Proficient" }
    ]
  }
];

export const experienceMilestones = [
  {
    year: "2026",
    role: "Indie Builder & Open Source Engineer",
    company: "Independent Projects",
    description: "Architected Inventry, an enterprise multi-tenant supply chain intelligence platform with Next.js 16 and Django REST. Engineered ResuMind to help job seekers beat automated ATS rejection.",
    tags: ["Next.js 16", "Django REST", "React 19", "AI Tools"]
  },
  {
    year: "2025 - 2026",
    role: "Full-Stack Software Developer",
    company: "Web & Cloud Engineering",
    description: "Built decoupled cloud web applications, browser automation tools for AI platforms (Flow Batch Automator), and audio streaming applications (Resonance, Vesper Copilot concept).",
    tags: ["React", "Chrome Extensions", "Node.js", "Express", "TypeScript"]
  },
  {
    year: "2025",
    role: "Python & Backend Systems Enthusiast",
    company: "Systems & Automation",
    description: "Deepened engineering foundation in Python, data structures, Flask web microservices, and database architecture.",
    tags: ["Python", "Flask", "SQL", "Git"]
  }
];
