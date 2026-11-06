import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud",
  handle: "@mahmudbuilds",
  title: "Full-Stack Software Engineer",
  tagline: "Building multi-tenant web platforms, decoupled APIs, and developer tooling.",
  bio: "Full-stack software engineer specializing in decoupled web platforms, multi-tenant backend architectures, and client-side tooling. Creator of Inventry, ResuMind, and Code Auditor. Focused on clean database transactions, strict tenant isolation, and responsive frontend systems.",
  location: "Remote / Global",
  email: "mahxgithub@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  instagram: "https://instagram.com/mahmudbuilds",
  availability: "Open to full-time engineering roles and select software contracts",
};

export const projectsData: Project[] = [
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Multi-tenant cloud supply chain and warehouse management platform",
    description: "Decoupled cloud application for real-time inventory tracking, multi-tier RBAC authorization, automated stock alerts, and multi-tenant warehouse logistics.",
    fullDescription: "Built with Next.js 16 App Router on the client and Django REST Framework on the backend with PostgreSQL. Features tenant data isolation, JWT authentication, inventory auditing, atomic stock depletion transactions, and operational analytics.",
    category: "Full-Stack",
    stack: ["Next.js 16", "Django REST", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker"],
    features: [
      "Tenant data isolation enforced at the ORM base manager level to prevent cross-organization queries",
      "Hierarchical Role-Based Access Control distinguishing Admins, Logistics Managers, and Auditors",
      "Atomic stock transactions using row-level database locking (SELECT FOR UPDATE) to prevent overselling",
      "Decoupled deployment orchestrating Next.js on Vercel Edge with Django REST on Render",
      "Live low-stock telemetry with automated replenishment notifications"
    ],
    metrics: [
      { label: "Tenancy Model", value: "Isolated Schema ORM" },
      { label: "Stock Transactions", value: "Row-Level Locked" },
      { label: "Deployment", value: "Vercel Edge + Render" }
    ],
    architecture: {
      clientArchitecture: "Next.js 16 App Router with React Server Components, client-side optimistic UI updates, and Tailwind CSS.",
      backendArchitecture: "Django REST Framework API with custom middleware validating cryptographic JWT claims to extract organization tenant context.",
      databaseAndStorage: "PostgreSQL on Neon with connection pooling, tenant foreign keys, and row-level locked transaction blocks.",
      securityAndAuth: "Short-lived JWT access tokens with rotating refresh tokens, CSRF protection, and endpoint permission decorators.",
      deploymentPipeline: "Continuous deployment: Frontend on Vercel Edge; backend API on Render with automated database migrations.",
      keyTechnicalChallenge: "Preventing inventory race conditions when multiple warehouse managers place high-volume depletion orders simultaneously.",
      solutionEngineered: "Wrapped order fulfillment in atomic database transactions using select_for_update() on inventory rows, serializing concurrent writes and rejecting over-allocations."
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#10b981"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "Client-side ATS resume analyzer with coordinate-clustered PDF parsing",
    description: "Browser-based document analysis engine that extracts text from complex multi-column resumes and identifies skill gaps against job requirements without storing user files.",
    fullDescription: "Solves recruiter parsing failures by evaluating resumes locally in browser memory. Integrates pdfjs-dist to parse text positions via bounding-box coordinate clustering, comparing extracted terms against target requirements with zero server retention.",
    category: "AI & Systems",
    stack: ["React Router 7", "TypeScript", "Tailwind CSS", "pdfjs-dist", "Vite", "Web Workers"],
    features: [
      "Client-side PDF text extraction using coordinate bounding-box clustering for multi-column layouts",
      "Zero server data retention: resumes are processed entirely in browser memory for complete privacy",
      "Semantic keyword gap analysis highlighting missing technical proficiencies against job descriptions",
      "Deterministic ATS scoring breakdown evaluating formatting, section clarity, and skill density",
      "Web Worker execution keeping document parsing off the primary UI thread"
    ],
    metrics: [
      { label: "PDF Parser", value: "Client-Side pdfjs" },
      { label: "Data Retention", value: "Zero Storage (In-Memory)" },
      { label: "Execution Thread", value: "Dedicated Web Worker" }
    ],
    architecture: {
      clientArchitecture: "Vite and React Router 7 single-page application with responsive layouts and Web Worker thread delegation.",
      backendArchitecture: "Stateless evaluation pipeline; document tokenization occurs locally without uploading source files to external storage.",
      databaseAndStorage: "Ephemeral in-memory cache; parsed document tokens are cleared when the session closes.",
      securityAndAuth: "Client-side PII scrubbing stripping sensitive contact data prior to keyword evaluation.",
      deploymentPipeline: "Static asset distribution on Vercel Edge with HTTP/2 and Brotli compression.",
      keyTechnicalChallenge: "Standard PDF text extractors read text in document stream order, scrambling multi-column resume layouts into unreadable sentences.",
      solutionEngineered: "Developed a spatial clustering algorithm that groups pdfjs-dist text fragments by horizontal line bounds and vertical column gutters before serializing into paragraphs."
    },
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentHex: "#38bdf8"
  },
  {
    id: "auditor",
    title: "Code Auditor",
    tagline: "Python abstract syntax tree static security and vulnerability scanner",
    description: "Automated static analysis engine parsing Python abstract syntax trees (AST) to detect SQL injection, insecure deserialization, and dangerous command execution.",
    fullDescription: "Built with Python and Django to provide automated code security auditing. Traverses AST nodes to identify dangerous coding patterns, string-interpolated SQL statements, and insecure library usage with line-accurate reports.",
    category: "AI & Systems",
    stack: ["Python 3", "Django", "Django REST", "AST Module", "PostgreSQL"],
    features: [
      "Abstract Syntax Tree (AST) visitor inspecting source code syntax without code execution",
      "Detection rules for SQL string formatting, eval() calls, and unsafe subprocess execution",
      "Categorized vulnerability reports tagged by severity (Critical, High, Medium, Informational)",
      "Automated remediation diff suggestions showing secure parameterization alternatives",
      "RESTful API endpoints for CI/CD pipeline automation and webhook integration"
    ],
    metrics: [
      { label: "Analysis Engine", value: "Python AST Visitor" },
      { label: "Execution Mode", value: "Static (Zero Code Run)" },
      { label: "Vulnerability Rules", value: "CWE-89, CWE-95, CWE-78" }
    ],
    architecture: {
      clientArchitecture: "Clean audit report dashboard rendering vulnerability findings, code snippets, and remediation patches.",
      backendArchitecture: "Django service utilizing Python's native ast.NodeVisitor to analyze syntax trees deterministically.",
      databaseAndStorage: "PostgreSQL storing historical audit reports, rule definitions, and severity metrics.",
      securityAndAuth: "Sandboxed AST parser running isolated from filesystem and shell execution contexts.",
      deploymentPipeline: "Containerized deployment via Docker with automated test coverage on API endpoints.",
      keyTechnicalChallenge: "Differentiating safe SQL queries with parameterized arguments from unsafe queries using string formatting or f-strings.",
      solutionEngineered: "Created an AST visitor node handler inspecting Call nodes targeting db execute methods, flagging any argument resolved to JoinedStr or BinOp (% formatting) as a CWE-89 injection risk."
    },
    liveUrl: "https://github.com/mahmudbuilds",
    githubUrl: "https://github.com/mahmudbuilds",
    featured: true,
    accentHex: "#f59e0b"
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "High-fidelity 60 FPS developer HUD and technical copilot concept",
    description: "Interface concept designed for developer productivity during live technical sessions, featuring fluid spring micro-interactions and low-distraction dark mode.",
    fullDescription: "Built with React 19, TypeScript, and Motion. Employs hardware-accelerated transitions, keyboard shortcuts, and structured visual hierarchy to deliver technical information without UI clutter.",
    category: "Frontend Concepts",
    stack: ["React 19", "TypeScript", "Motion", "Tailwind CSS", "Vite"],
    features: [
      "60 FPS spring-physics animations calibrated for low-latency visual feedback",
      "High-density HUD layout prioritizing rapid glanceability and scanability",
      "Custom keyboard navigation shortcuts for all primary interface actions",
      "Sub-pixel typography and border contrast optimized for high-DPI displays"
    ],
    metrics: [
      { label: "Target Frame Rate", value: "60 FPS (Hardware Accel)" },
      { label: "Animation Engine", value: "Motion (Spring Physics)" },
      { label: "Stack", value: "React 19 + TypeScript" }
    ],
    architecture: {
      clientArchitecture: "Component hierarchy structured around React 19 primitives with Motion layout animations.",
      backendArchitecture: "Client-side state management with zero external network overhead.",
      databaseAndStorage: "Local storage caching for user interface preferences and session history.",
      securityAndAuth: "Client-side sandbox with strict Content Security Policy.",
      deploymentPipeline: "Edge deployment on Vercel with automatic asset compression.",
      keyTechnicalChallenge: "Eliminating animation jank and layout shifts during rapid keyboard-driven view transitions.",
      solutionEngineered: "Restricted all animated properties to transform and opacity, leveraging will-change hints to maintain GPU acceleration throughout user navigation."
    },
    liveUrl: "https://github.com/mahmudbuilds/vesper",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: false,
    accentHex: "#818cf8"
  },
  {
    id: "ecommerce",
    title: "Full-Stack E-Commerce Engine",
    tagline: "Decoupled storefront with Express REST API and PostgreSQL database",
    description: "End-to-end commerce web application featuring real-time product search, multi-facet filtering, shopping cart state persistence, and Neon database hosting.",
    fullDescription: "Frontend built with React and Tailwind CSS, communicating with a decoupled Node.js and Express REST API powered by Sequelize ORM and cloud PostgreSQL on Neon.",
    category: "Full-Stack",
    stack: ["React.js", "Node.js", "Express", "Sequelize", "PostgreSQL", "Neon.tech"],
    features: [
      "Dynamic catalog fetching live inventory from cloud PostgreSQL database on Neon",
      "Multi-parameter category filtering, sorting, and client-side search indexing",
      "Persistent cart state with client validation and live total calculation",
      "Automated database seeding scripts and schema migration workflows"
    ],
    metrics: [
      { label: "Database", value: "PostgreSQL (Neon Serverless)" },
      { label: "API Framework", value: "Node.js & Express" },
      { label: "Live Deployment", value: "Vercel Edge Proxy" }
    ],
    architecture: {
      clientArchitecture: "React client with modular component architecture, custom Axios service layer, and responsive layouts.",
      backendArchitecture: "Express REST API with Sequelize ORM, input validation middleware, and structured error handlers.",
      databaseAndStorage: "Managed PostgreSQL on Neon with connection pooling and relational indexing.",
      securityAndAuth: "ORM-parameterized SQL queries preventing injection, paired with CORS origin restrictions.",
      deploymentPipeline: "Decoupled architecture: Frontend on Vercel with API rewrite proxies for single-origin routing.",
      keyTechnicalChallenge: "Managing reliable cart synchronization across page refreshes while ensuring checkout inventory integrity.",
      solutionEngineered: "Implemented client localStorage state hydration synchronized with server-side stock availability checks at checkout initiation."
    },
    liveUrl: "https://ecommerce-project-tau-gray.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/ecommerce-project",
    featured: false,
    accentHex: "#f59e0b"
  },
  {
    id: "resonance",
    title: "Resonance",
    tagline: "Web Audio streaming platform with real-time waveform visualization",
    description: "Audio streaming application featuring persistent playback across page transitions, playlist queue management, and native Web Audio API frequency analysis.",
    fullDescription: "Engineered with React and TypeScript, leveraging the browser Web Audio API AnalyserNode and HTML5 Canvas to render real-time audio spectrums without UI stutter.",
    category: "Full-Stack",
    stack: ["TypeScript", "React", "Web Audio API", "HTML5 Canvas", "Tailwind CSS"],
    features: [
      "Persistent audio player maintaining uninterrupted stream playback during app navigation",
      "Real-time audio frequency visualizer rendered via Web Audio AnalyserNode and Canvas",
      "Podcast and track catalog with metadata indexing, scrub bars, and queue management",
      "Byte-range audio streaming support allowing instant scrubbing to unbuffered timestamps"
    ],
    metrics: [
      { label: "Audio Engine", value: "Native Web Audio API" },
      { label: "Visualizer", value: "60 FPS Canvas AnalyserNode" },
      { label: "Playback", value: "Stateful Root Provider" }
    ],
    architecture: {
      clientArchitecture: "React with a custom useAudioPlayer hook managing a persistent AudioContext singleton and AnalyserNode frequency bins.",
      backendArchitecture: "Static audio streaming endpoints supporting HTTP Range headers for partial content delivery.",
      databaseAndStorage: "JSON metadata store indexing track artists, durations, and cover assets.",
      securityAndAuth: "CORS cross-origin credentials configuration allowing Canvas pixel reads without security violations.",
      deploymentPipeline: "Edge asset distribution on Vercel with long-term cache headers for media files.",
      keyTechnicalChallenge: "Audio playback dropping or resetting whenever users navigate between different catalog views.",
      solutionEngineered: "Extracted the audio element and AudioContext into a top-level React context provider outside view route mounts, decoupling playback lifecycle from UI routing."
    },
    liveUrl: "https://github.com/mahmudbuilds/resonance",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: false,
    accentHex: "#f43f5e"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Languages & Runtimes",
    skills: [
      { name: "TypeScript", level: "Production" },
      { name: "Python 3", level: "Production" },
      { name: "JavaScript (ES2024)", level: "Production" },
      { name: "SQL", level: "Production" },
      { name: "Node.js", level: "Production" },
      { name: "HTML5 / CSS3", level: "Production" }
    ]
  },
  {
    name: "Backend Architecture & APIs",
    skills: [
      { name: "Django REST Framework", level: "Production" },
      { name: "PostgreSQL (Neon / RDS)", level: "Production" },
      { name: "Express.js", level: "Production" },
      { name: "Multi-Tenant Schema Isolation", level: "Production" },
      { name: "Row-Level Database Locking", level: "Production" },
      { name: "JWT & Session Auth", level: "Production" },
      { name: "Docker & Containerization", level: "Production" },
      { name: "RESTful API Design", level: "Production" }
    ]
  },
  {
    name: "Client Systems & UI Engineering",
    skills: [
      { name: "React 19 & React 18", level: "Production" },
      { name: "Next.js 16 (App Router / RSC)", level: "Production" },
      { name: "Tailwind CSS (v3 / v4)", level: "Production" },
      { name: "Vite & Modern Bundlers", level: "Production" },
      { name: "Web Workers", level: "Production" },
      { name: "Web Audio API", level: "Production" },
      { name: "HTML5 Canvas", level: "Production" },
      { name: "pdfjs-dist (AST Parsing)", level: "Production" }
    ]
  },
  {
    name: "Engineering Practices & Tooling",
    skills: [
      { name: "Abstract Syntax Tree (AST) Analysis", level: "Production" },
      { name: "Decoupled Deployments (Vercel + Render)", level: "Production" },
      { name: "Database Migrations & Seeding", level: "Production" },
      { name: "Git & GitHub Workflows", level: "Production" },
      { name: "Concurrency & Race Condition Prevention", level: "Production" },
      { name: "Performance Optimization", level: "Production" }
    ]
  }
];

export const experienceMilestonesData: ExperienceMilestone[] = [
  {
    year: "2024 – Present",
    role: "Full-Stack Software Engineer",
    company: "Independent Systems & Product Engineering",
    description: "Designed, engineered, and deployed 6 full-stack web applications, focusing on multi-tenant SaaS architectures, distributed database integrity, and client-side document processing.",
    highlights: [
      "Architected Inventry, an enterprise supply chain management platform with Next.js 16 and Django REST, implementing row-level database locking to guarantee atomic stock depletions.",
      "Engineered ResuMind, building a custom bounding-box clustering parser in pdfjs-dist to extract multi-column resume text directly in browser memory with zero server data retention.",
      "Developed Code Auditor, a Python static analysis tool utilizing native AST parsing to identify SQL injection and dangerous function executions in application codebases.",
      "Configured decoupled deployment pipelines across Vercel Edge and Render, orchestrating PostgreSQL connection pooling and sub-50ms API response times."
    ]
  },
  {
    year: "2023 – 2024",
    role: "Full-Stack Developer",
    company: "Web Platforms & Cloud Solutions",
    description: "Built scalable frontend interfaces, decoupled REST APIs, and database-backed storefronts with focus on relational data modeling and responsive client architecture.",
    highlights: [
      "Constructed full-stack e-commerce engine with Node.js, Express, and PostgreSQL on Neon, managing relational schemas, cart synchronization, and search filtering.",
      "Created Resonance, an audio discovery web app leveraging the browser Web Audio API AnalyserNode for real-time waveform canvas visualizers.",
      "Created high-fidelity frontend prototypes in React 19, focusing on keyboard navigation, accessibility, and sub-frame interaction latency."
    ]
  }
];
