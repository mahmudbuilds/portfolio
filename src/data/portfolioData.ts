import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud",
  handle: "@mahmudbuilds",
  title: "Full-Stack, AI & Systems Engineer",
  tagline: "Architecting decoupled cloud platforms, high-performance backends, and pragmatic AI engineering tools.",
  bio: "Full-Stack engineer with an emphasis on production-grade decoupled web platforms, resilient multi-tenant architectures, and high-fidelity user experiences. Creator of Inventry, ResuMind, Vesper, and Resonance. Focused on clean abstractions, type safety, and engineering systems that scale with zero friction.",
  location: "Global / Remote (UTC)",
  email: "mahxgithub@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  instagram: "https://instagram.com/mahmudbuilds",
  availability: "Open to High-Impact Full-Stack & AI Engineering Roles / Select Contracts",
};

export const projectsData: Project[] = [
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Enterprise Multi-Tenant Supply Chain & Logistics Intelligence",
    description: "Decoupled cloud platform engineered for real-time inventory tracking, multi-tier RBAC authorization, automated stock alerts, and multi-tenant warehouse logistics.",
    fullDescription: "Built with Next.js 16 App Router on the client and a high-performance Django REST Framework API on the backend with PostgreSQL. Supports tenant isolation, JWT authentication, inventory auditing, dynamic stock depletion algorithms, and analytics dashboards.",
    category: "Full-Stack",
    stack: ["Next.js 16", "Django REST", "PostgreSQL", "TypeScript", "Tailwind CSS", "RBAC", "Docker"],
    features: [
      "Strict multi-tenant data isolation preventing cross-organization leakage",
      "Granular Role-Based Access Control (Admin, Logistics Manager, Auditor)",
      "Real-time low-stock telemetry & automated re-order replenishment triggers",
      "Decoupled architecture with tokenized JWT authentication & rate limiting",
      "Production deployment orchestrating Vercel Edge with Render backend"
    ],
    metrics: [
      { label: "Tenancy Model", value: "Isolated Multi-Tenant" },
      { label: "Auth Framework", value: "JWT + Hierarchical RBAC" },
      { label: "API Latency", value: "<45ms Edge Proxy" }
    ],
    architecture: {
      clientArchitecture: "Next.js 16 App Router with server-side caching, dynamic tenant route segments, and Tailwind CSS v4 styling.",
      backendArchitecture: "Django REST Framework service with custom tenant middleware extracting tenant IDs from cryptographic JWT claims.",
      databaseAndStorage: "PostgreSQL on Neon with connection pooling and tenant-partitioned database tables.",
      securityAndAuth: "Short-lived JWT access tokens with rotating refresh tokens, CSRF protection, and strict permission decorators on endpoints.",
      deploymentPipeline: "Continuous deployment via Vercel for frontend edge assets and Render with automated database migrations.",
      keyTechnicalChallenge: "Ensuring zero data bleed across concurrent multi-tenant database transactions without sacrificing query throughput.",
      solutionEngineered: "Implemented custom Django query router enforcing tenant schema filters at the ORM base manager level, paired with automated regression tests."
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#10b981"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "AI-Powered Resume Analyzer & ATS Decoding Engine",
    description: "Intelligent career tool decoding modern Applicant Tracking Systems with precision 0-100 scoring, deep multi-column PDF extraction, and role keyword gap analysis.",
    fullDescription: "Solves the recruiter filter black box by evaluating candidate resumes against target job descriptions. Integrates pdfjs-dist for client-side structural parsing of complex multi-column resumes and employs LLM prompt engineering to suggest actionable bullet improvements.",
    category: "AI & Systems",
    stack: ["React Router 7", "TypeScript", "Tailwind CSS", "pdfjs-dist", "LLM APIs", "Vite"],
    features: [
      "Proprietary ATS compatibility scoring algorithm mimicking enterprise HR systems",
      "Client-side deep PDF parsing handling multi-column and non-standard layouts",
      "Missing skills & high-impact keyword gap identification radar",
      "Action-oriented rewrite recommendations for maximum recruiter pass-through",
      "Zero server retention architecture ensuring complete candidate privacy"
    ],
    metrics: [
      { label: "Scoring Engine", value: "0-100 ATS Telemetry" },
      { label: "Parsing Runtime", value: "Client-Side (pdfjs)" },
      { label: "Data Retention", value: "Zero Storage / Privacy-First" }
    ],
    architecture: {
      clientArchitecture: "Single-page React application powered by Vite and React Router 7 with Web Workers for non-blocking PDF text tokenization.",
      backendArchitecture: "Stateless streaming edge function invoking structured LLM evaluation prompts with JSON schema validation.",
      databaseAndStorage: "Local in-memory evaluation cache; resumes are parsed in client memory and discarded after analysis.",
      securityAndAuth: "Client-side sanitation stripping PII before passing anonymized skills/experience tokens to evaluation pipeline.",
      deploymentPipeline: "Automated Git push deployment on Vercel with strict CSP and asset caching headers.",
      keyTechnicalChallenge: "Extracting readable semantic text streams from multi-column tabular PDF resumes where standard parsers jumble words across columns.",
      solutionEngineered: "Built bounding-box coordinate clustering in pdfjs-dist that groups text by horizontal line positions and column gutters before serialization."
    },
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentHex: "#38bdf8"
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "Undetectable AI Copilot Concept for Technical Interviews",
    description: "Futuristic interface concept and high-fidelity experience for an intelligent, context-aware AI assistant designed for live engineering interviews.",
    fullDescription: "Inspired by cutting-edge desktop copilots, featuring hyper-refined dark mode aesthetics, fluid kinetic micro-interactions with Motion, sound design cues, and dynamic preview cards.",
    category: "Frontend Concepts",
    stack: ["React 19", "TypeScript", "Motion", "Tailwind CSS", "Vite"],
    features: [
      "Ultra-tactile dark mode UI inspired by Linear, Raycast, and Cluely",
      "Interactive 60 FPS feature showcases with fluid spring physics",
      "Audio-visual feedback cues and stealth HUD layout concept",
      "Optimized for high-DPI displays with sub-pixel typography tracking"
    ],
    metrics: [
      { label: "Frame Rate", value: "60 FPS Fluid" },
      { label: "Design Fidelity", value: "Linear-Grade" },
      { label: "Stack", value: "React 19 + Motion" }
    ],
    architecture: {
      clientArchitecture: "Component-driven React 19 architecture using Motion for spring-physics transitions and custom keyboard navigation.",
      backendArchitecture: "Mock streaming responses simulating contextual code comprehension and interview prompts.",
      databaseAndStorage: "Client-side localStorage state persistence for interview session history.",
      securityAndAuth: "Sandboxed client interface with zero external network leaks.",
      deploymentPipeline: "Fast static build on Vercel Edge with Brotli compression.",
      keyTechnicalChallenge: "Delivering dense engineering information without visual clutter or perceptual frame drops during animation loops.",
      solutionEngineered: "Applied GPU-accelerated CSS transforms, will-change hints, and decoupled state management to guarantee smooth 60 FPS transitions."
    },
    liveUrl: "https://github.com/mahmudbuilds/vesper",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: true,
    accentHex: "#818cf8"
  },
  {
    id: "resonance",
    title: "Resonance",
    tagline: "High-Performance Audio Streaming & Podcast Discovery",
    description: "Modern web application built for seamless audio streaming, playlist curation, podcast indexing, and low-latency audio playback.",
    fullDescription: "Engineered with a focus on instantaneous response, clean audio wave visualizers, and stateful persistent player controls across page transitions.",
    category: "Full-Stack",
    stack: ["TypeScript", "React", "Web Audio API", "Tailwind CSS"],
    features: [
      "Persistent global audio player maintaining seamless playback across view transitions",
      "Dynamic frequency bar visualizer powered by native Web Audio AnalyserNode",
      "Interactive podcast catalog with genre tagging, queue management, and scrubbing",
      "Lightweight state store with zero audio buffer glitches"
    ],
    metrics: [
      { label: "Playback Engine", value: "Web Audio API" },
      { label: "Audio Visualizer", value: "Real-time FFT Canvas" },
      { label: "Latency", value: "Near-Zero Buffer" }
    ],
    architecture: {
      clientArchitecture: "React with custom Web Audio hook managing AudioContext singleton and AnalyserNode frequency bins.",
      backendArchitecture: "Static audio streaming endpoints with Range header byte serving for instant audio scrubbing.",
      databaseAndStorage: "JSON-indexed podcast metadata and CDN-hosted audio waveforms.",
      securityAndAuth: "CORS-safe audio asset headers allowing canvas pixel analysis without cross-origin taint.",
      deploymentPipeline: "Edge deployment on Vercel with high-cache headers for static media.",
      keyTechnicalChallenge: "Preventing audio interruptions and memory leaks when users navigate between complex views.",
      solutionEngineered: "Decoupled audio element lifecycle into a persistent root context provider outside view re-mount cycles."
    },
    liveUrl: "https://github.com/mahmudbuilds/resonance",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: false,
    accentHex: "#f43f5e"
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Platform",
    tagline: "High-Performance Storefront with Persistent PostgreSQL Backend",
    description: "End-to-end e-commerce application featuring real-time product search, filtering, persistent shopping cart, and automated database seeding.",
    fullDescription: "Frontend built with React.js and Axios, communicating with a decoupled Node.js and Express backend powered by Sequelize ORM and hosted PostgreSQL on Neon.tech.",
    category: "Full-Stack",
    stack: ["React.js", "Node.js", "Express", "Sequelize", "PostgreSQL", "Neon.tech"],
    features: [
      "Dynamic product grid fetching live inventory from cloud PostgreSQL database",
      "Instant client-side multi-parameter filtering and fuzzy keyword search",
      "Persistent cart state with live subtotal calculations and stock validations",
      "Automated DB migrations and seed scripts for rapid reproducible deployment"
    ],
    metrics: [
      { label: "Database", value: "PostgreSQL (Neon)" },
      { label: "API Layer", value: "Node.js & Express" },
      { label: "Deployment", value: "Vercel + Cloud DB" }
    ],
    architecture: {
      clientArchitecture: "React client with modular component architecture, custom Axios instance, and responsive cart state.",
      backendArchitecture: "Express REST API with Sequelize ORM models, input sanitization, and structured error responses.",
      databaseAndStorage: "Managed PostgreSQL database on Neon.tech with indexed relational schemas.",
      securityAndAuth: "Parameterized SQL queries through ORM preventing SQL injection, with CORS origin restrictions.",
      deploymentPipeline: "Decoupled deployment on Vercel with API rewrite proxies for unified domain access.",
      keyTechnicalChallenge: "Managing transactional inventory deduction without race conditions during checkout spikes.",
      solutionEngineered: "Implemented database transactions with row-level locks on stock counters during checkout validation."
    },
    liveUrl: "https://ecommerce-project-tau-gray.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/ecommerce-project",
    featured: false,
    accentHex: "#f59e0b"
  },
  {
    id: "auditor",
    title: "Code & Contract Auditor Backend",
    tagline: "Automated Code Analysis & Static Security Verification Service",
    description: "Automated analysis pipeline assessing backend code and contracts for common vulnerabilities, syntax regressions, and security best practices.",
    fullDescription: "Engineered with Python, Django, and static analysis AST parsing to generate automated audit reports and code quality scores for developers.",
    category: "AI & Systems",
    stack: ["Python", "Django", "Django REST", "AST Parsing", "PostgreSQL"],
    features: [
      "Static code AST analysis parsing syntax trees for dangerous patterns",
      "Vulnerability rule scoring engine categorized by severity (High, Medium, Low)",
      "Automated executive report generation with remediation diffs",
      "REST endpoints for CI/CD hook integrations"
    ],
    metrics: [
      { label: "Engine", value: "Python AST Inspector" },
      { label: "Output", value: "Automated Audit Reports" },
      { label: "Backend", value: "Django REST" }
    ],
    architecture: {
      clientArchitecture: "Lightweight review dashboard rendering vulnerability markers and syntax-highlighted code diffs.",
      backendArchitecture: "Django REST microservice running sandboxed static analysis workers.",
      databaseAndStorage: "PostgreSQL storing rule catalogs, audit execution logs, and vulnerability telemetry.",
      securityAndAuth: "API token authentication with worker isolation preventing untrusted code execution.",
      deploymentPipeline: "Dockerized container deployment with health-check telemetry.",
      keyTechnicalChallenge: "Parsing arbitrary code safely without risking remote code execution in the analyzer.",
      solutionEngineered: "Used Python's built-in `ast` module to analyze structure purely as inert tokens without ever importing or evaluating files."
    },
    liveUrl: "https://github.com/mahmudbuilds/auditor",
    githubUrl: "https://github.com/mahmudbuilds/auditor_backend",
    featured: false,
    accentHex: "#06b6d4"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Frontend Architecture",
    description: "Engineering fluid, accessible, high-performance web applications with tactile micro-interactions.",
    skills: [
      { name: "React 19 & Next.js 16", level: "Core", highlight: true },
      { name: "TypeScript (Strict)", level: "Core", highlight: true },
      { name: "Vite & Modern Tooling", level: "Core", highlight: true },
      { name: "Tailwind CSS v4", level: "Core", highlight: true },
      { name: "Motion / Animations", level: "Advanced", highlight: true },
      { name: "Responsive & Mobile UI", level: "Core", highlight: true },
      { name: "Client Performance (Lighthouse 95+)", level: "Advanced" },
      { name: "Web Audio API", level: "Proficient" }
    ]
  },
  {
    name: "Backend & Systems",
    description: "Designing decoupled, multi-tenant APIs with strict authorization models and resilient schemas.",
    skills: [
      { name: "Python 3", level: "Core", highlight: true },
      { name: "Django & Django REST", level: "Core", highlight: true },
      { name: "Node.js & Express", level: "Advanced", highlight: true },
      { name: "PostgreSQL & Neon", level: "Advanced", highlight: true },
      { name: "Multi-Tenant Architecture", level: "Advanced", highlight: true },
      { name: "RBAC & JWT Security", level: "Core", highlight: true },
      { name: "RESTful API Design", level: "Core", highlight: true },
      { name: "Database Migrations & ORMs", level: "Advanced" }
    ]
  },
  {
    name: "AI & Applied Intelligence",
    description: "Integrating modern LLMs into practical, production-ready developer tooling and document analysis.",
    skills: [
      { name: "LLM API Integration", level: "Core", highlight: true },
      { name: "Prompt Architecture & Validation", level: "Core", highlight: true },
      { name: "ATS Compatibility Algorithms", level: "Advanced", highlight: true },
      { name: "pdfjs-dist Layout Extraction", level: "Advanced", highlight: true },
      { name: "Agentic Engineering Workflows", level: "Proficient", highlight: true },
      { name: "Zero-Retention Privacy Pipelines", level: "Proficient" }
    ]
  },
  {
    name: "Cloud, Tooling & DevOps",
    description: "Reliable build systems, CI/CD pipelines, and cloud edge infrastructure.",
    skills: [
      { name: "Vercel & Edge Functions", level: "Core", highlight: true },
      { name: "Git & GitHub Automation", level: "Core", highlight: true },
      { name: "Render & Neon Cloud DB", level: "Advanced" },
      { name: "Bun & Node Package Ecosystem", level: "Core", highlight: true },
      { name: "Docker Containerization", level: "Proficient" },
      { name: "Linux Virtual Machines & Bash", level: "Proficient" }
    ]
  }
];

export const experienceMilestonesData: ExperienceMilestone[] = [
  {
    year: "2026",
    role: "Full-Stack & AI Systems Builder",
    company: "Flagship Engineering Projects",
    description: "Architected and delivered multi-tenant cloud supply chain platform Inventry (Next.js 16 + Django REST) and AI career ATS engine ResuMind. Designed high-fidelity frontend concepts like Vesper.",
    highlights: [
      "Engineered tenant isolation database router preventing cross-tenant data leakage.",
      "Built client-side PDF structural extraction with pdfjs-dist handling complex multi-column resumes.",
      "Achieved sub-50ms API proxy latencies and 60 FPS fluid browser animations."
    ],
    tags: ["Next.js 16", "Django REST", "PostgreSQL", "React 19", "AI Tools", "TypeScript"]
  },
  {
    year: "2025 - 2026",
    role: "Full-Stack Software Developer",
    company: "Web Platforms & Cloud Applications",
    description: "Built persistent PostgreSQL storefront systems, real-time audio discovery platforms (Resonance), and smart contract analysis tools.",
    highlights: [
      "Implemented decoupled React + Node/Express backend with hosted PostgreSQL on Neon.",
      "Engineered persistent Web Audio player with dynamic FFT frequency visualizer.",
      "Designed responsive component architecture adhering to anti-slop design standards."
    ],
    tags: ["React", "PostgreSQL", "Node.js", "Express", "Web Audio API", "Tailwind CSS"]
  },
  {
    year: "2025",
    role: "Software Engineering & Systems Foundation",
    company: "Systems & Backend Development",
    description: "Deepened core software engineering fundamentals in Python, relational database modeling, algorithms, REST standards, and version control workflows.",
    highlights: [
      "Built Flask microservices, weather forecasting utilities, and database seed pipelines.",
      "Mastered Git branching strategies, GitHub Actions, and headless Linux virtual environments."
    ],
    tags: ["Python", "Flask", "SQL", "Git", "Algorithms"]
  }
];
