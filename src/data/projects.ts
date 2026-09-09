export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: "Full-Stack" | "AI & ML" | "Frontend" | "Systems";
  stack: string[];
  features: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Enterprise-Grade Multi-Tenant Supply Chain Intelligence Platform",
    description: "Decoupled cloud platform engineered for real-time inventory tracking, multi-tier RBAC authorization, automated stock alerts, and multi-tenant warehouse logistics.",
    fullDescription: "Built with Next.js 16 App Router on the client and a high-performance Django REST Framework API on the backend with PostgreSQL. Supports tenant isolation, JWT authentication, inventory auditing, dynamic stock depletion algorithms, and analytics dashboards.",
    category: "Full-Stack",
    stack: ["Next.js 16", "Django REST", "PostgreSQL", "TypeScript", "Tailwind CSS", "RBAC", "Docker"],
    features: [
      "Multi-tenant data isolation with strict tenant segregation",
      "Granular Role-Based Access Control (Admin, Manager, Auditor)",
      "Real-time low-stock telemetry & automatic replenishment alerts",
      "Comprehensive REST API with JWT authentication & rate limiting",
      "Decoupled architecture deployed with Vercel and Render"
    ],
    metrics: [
      { label: "Architecture", value: "Decoupled" },
      { label: "Tenancy", value: "Multi-Tenant" },
      { label: "Auth", value: "JWT + RBAC" },
    ],
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentColor: "from-emerald-500/20 to-cyan-500/10"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "AI-Powered Resume Analyzer & ATS Decoding Engine",
    description: "Intelligent career tool decoding modern Applicant Tracking Systems with precision 0-100 scoring, deep multi-column PDF extraction, and role keyword gap analysis.",
    fullDescription: "Solves the recruiter filter black box by evaluating resumes against target job descriptions. Integrates pdfjs-dist for client-side structural parsing of complex multi-column resumes and employs LLM prompt engineering to suggest actionable bullet improvements.",
    category: "AI & ML",
    stack: ["React Router 7", "TypeScript", "Tailwind CSS", "pdfjs-dist", "LLM APIs", "Vite"],
    features: [
      "Proprietary ATS compatibility scoring algorithm mimicking enterprise HR systems",
      "Client-side deep PDF parsing handling multi-column and non-standard layouts",
      "Missing skills & high-impact keyword gap identification",
      "Action-oriented rewrite recommendations for maximum recruiter pass-through"
    ],
    metrics: [
      { label: "ATS Accuracy", value: "0-100 Scoring" },
      { label: "PDF Parsing", value: "Deep Client" },
      { label: "Privacy", value: "Zero Retention" }
    ],
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentColor: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "Undetectable AI Copilot Concept for Technical Interviews",
    description: "Sleek, futuristic landing page and interface concept for an intelligent, context-aware AI copilot designed for live engineering interviews and problem-solving.",
    fullDescription: "Inspired by cutting-edge desktop copilots, featuring hyper-refined dark mode aesthetics, fluid kinetic micro-interactions with Motion, sound design cues, and dynamic preview cards.",
    category: "Frontend",
    stack: ["React 19", "TypeScript", "Motion", "Tailwind CSS", "Vite"],
    features: [
      "High-aesthetic visual design with glowing frosted glass cards",
      "Dynamic interactive feature showcases with smooth scroll-driven animations",
      "Responsive layout optimized for micro-interactions and high DPI displays"
    ],
    metrics: [
      { label: "UI Polish", value: "60 FPS" },
      { label: "Design", value: "Linear-Grade" }
    ],
    liveUrl: "https://github.com/mahmudbuilds/vesper",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: true,
    accentColor: "from-violet-500/20 to-indigo-500/10"
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
      "Persistent global audio player with seamless route changes",
      "Interactive waveform visualization and playback velocity controls",
      "Podcast discovery with genre categorization and queue management"
    ],
    liveUrl: "https://github.com/mahmudbuilds/resonance",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: false,
    accentColor: "from-fuchsia-500/20 to-pink-500/10"
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
      "Dynamic product grid fetching live inventory from cloud PostgreSQL",
      "Instant client-side search and category filtering",
      "Persistent cart state with live quantity adjustment and subtotal calculations",
      "Automated database seeding and production Vercel rewrite proxy configuration"
    ],
    metrics: [
      { label: "Database", value: "PostgreSQL (Neon)" },
      { label: "Backend", value: "Node/Express" }
    ],
    liveUrl: "https://ecommerce-project-tau-gray.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/ecommerce-project",
    featured: false,
    accentColor: "from-amber-500/20 to-orange-500/10"
  },
  {
    id: "thoughtbot",
    title: "Thoughtbot Design System Clone",
    tagline: "Pixel-Perfect Responsive Landing Page Experience",
    description: "Frontend design study recreating the design agency's clean typographic aesthetic and layout precision using modern responsive web standards.",
    category: "Frontend",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Pixel-accurate typography and layout architecture",
      "Fully responsive viewport adaptations for mobile, tablet, and desktop",
      "Performant CSS animations with zero heavy framework overhead"
    ],
    liveUrl: "https://github.com/mahmudbuilds/thought_bot_project",
    githubUrl: "https://github.com/mahmudbuilds/thought_bot_project",
    featured: false,
    accentColor: "from-red-500/20 to-rose-500/10"
  }
];
