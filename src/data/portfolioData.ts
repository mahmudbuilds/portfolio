import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud Tella",
  handle: "@mahmudbuilds",
  title: "Full-Stack Software Engineer",
  tagline: "Resilient web applications, transactional backends, and fast interfaces.",
  bio: "Full-stack software engineer with end-to-end ownership across TypeScript, React, Next.js, Python (Django REST), PostgreSQL, and Convex. Focused on transactional data integrity, fault-tolerant API integrations, and responsive interfaces built for production use.",
  location: "Nigeria · Remote / Global",
  email: "akinadetella@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  instagram: "https://instagram.com/mahmudtella_",
  availability: "Open to full-time full-stack engineering roles",
};

export const projectsData: Project[] = [
  {
    id: "resonance",
    title: "Resonance",
    tagline: "Real-time AI voice synthesis studio with voice cloning and fault-tolerant API routing",
    description: "Full-stack speech synthesis platform supporting 9+ languages, live microphone voice cloning, and interactive waveform playback, backed by server-enforced credit metering and automated provider key failover.",
    fullDescription: "Built with Next.js 16 (App Router), Convex reactive queries and serverless actions, Clerk authentication, Inworld neural TTS, and Wavesurfer.js. Enforces atomic character-level credit deduction on the server and automatically rotates API keys with cached voice re-cloning on provider failure.",
    category: "AI & Systems",
    stack: ["Next.js 16", "TypeScript", "Convex", "Clerk", "Inworld TTS", "Wavesurfer.js", "Tailwind CSS v4"],
    features: [
      "Server-enforced character-level credit metering and real-time reactive state via Convex mutations",
      "Automated multi-key API rotation with transparent failover and automatic voice re-cloning from cached audio samples",
      "Multi-language neural text-to-speech (9+ languages) with granular pacing, emotion, and temperature controls",
      "Voice cloning pipeline supporting both live browser microphone capture and uploaded audio files",
      "Interactive waveform visualization and playback scrubbing powered by Wavesurfer.js"
    ],
    metrics: [
      { label: "Status", value: "Live & Deployed" },
      { label: "Runtime", value: "Next.js 16 + Convex" },
      { label: "Auth", value: "Clerk + Server Validation" }
    ],
    architecture: {
      clientArchitecture: "Next.js 16 App Router workspace with protected Clerk routes, script editor, live microphone recorder, and Wavesurfer.js waveform playback.",
      backendArchitecture: "Convex serverless actions orchestrate speech synthesis against Inworld TTS while reactive queries and mutations handle credit balances and audio storage.",
      databaseAndStorage: "Convex reactive database and object storage tracking user credit ledgers, voice profiles, generated audio assets, and synthesis telemetry.",
      securityAndAuth: "Clerk session authentication with middleware route guards and server-side credit validation prior to dispatching external synthesis requests.",
      deploymentPipeline: "Continuous deployment on Vercel with edge asset caching and managed Convex cloud functions.",
      keyTechnicalChallenge: "Preventing user-facing synthesis failures when third-party TTS API keys hit rate limits or quota ceilings during concurrent voice generation.",
      solutionEngineered: "Built a multi-key rotation and failover layer in Convex actions that detects upstream quota/rate errors, switches to a healthy key, and transparently re-clones custom voices from cached audio buffers."
    },
    liveUrl: "https://tryresonance.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: true,
    accentHex: "#f43f5e"
  },
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Multi-warehouse inventory platform engineered for transactional stock accuracy",
    description: "Decoupled full-stack inventory system that tracks stock across multiple warehouses, enforces role-based access control, and eliminates overselling under concurrent order load using PostgreSQL row-level locks.",
    fullDescription: "Architected with a Next.js 16 (App Router) client and a Python / Django REST Framework API backed by PostgreSQL. Models multi-warehouse stock ledgers, enforces RBAC across Admins, Managers, and Staff, and serializes concurrent inventory mutations inside atomic database transactions.",
    category: "Full-Stack",
    stack: ["Next.js 16", "TypeScript", "Python", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Atomic inventory mutations using PostgreSQL SELECT FOR UPDATE row locks to eliminate overselling under concurrent orders",
      "Multi-warehouse stock ledger with automated low-stock threshold alerts and reorder visibility",
      "Role-based access control (RBAC) with JWT authentication scoping permissions for Admins, Managers, and Staff",
      "Decoupled Django REST Framework API with strict serializer validation and relational audit trails",
      "Responsive operations dashboard built with Next.js 16 for desktop, tablet, and warehouse floor devices"
    ],
    metrics: [
      { label: "Status", value: "Live & Deployed" },
      { label: "Backend", value: "Django REST + Postgres" },
      { label: "Concurrency", value: "Row-Level Locks" }
    ],
    architecture: {
      clientArchitecture: "Next.js 16 and React frontend consuming typed REST endpoints with optimistic UI feedback and role-aware navigation.",
      backendArchitecture: "Python / Django REST Framework service layer handling order processing, stock ledger updates, and granular permission checks.",
      databaseAndStorage: "Relational PostgreSQL schema modeling warehouses, SKUs, stock levels, and transactional order histories with referential integrity.",
      securityAndAuth: "Stateless JWT authentication paired with Django permission classes enforcing role-scoped read/write boundaries.",
      deploymentPipeline: "Decoupled cloud deployment with Vercel serving the Next.js frontend and managed cloud hosting for the Django API and PostgreSQL.",
      keyTechnicalChallenge: "Eliminating race conditions where two simultaneous checkout or transfer requests read the same remaining stock count and drive inventory negative.",
      solutionEngineered: "Wrapped stock-decrement workflows in atomic database transactions with SELECT FOR UPDATE row-level locks, serializing conflicting writes so stock invariants hold under concurrency."
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#10b981"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "Client-side ATS resume parser and job-description keyword matcher",
    description: "Zero-backend document analysis tool that parses multi-column PDF resumes locally in the browser, extracts structured text in reading order, and scores keyword alignment against target job descriptions.",
    fullDescription: "Built with React Router 7 and TypeScript. Performs 100% in-browser PDF parsing so sensitive candidate data never leaves the device, using coordinate-aware text reconstruction to handle multi-column layouts accurately.",
    category: "AI & Systems",
    stack: ["React Router 7", "TypeScript", "Vite", "Tailwind CSS", "Client-Side PDF Parsing"],
    features: [
      "Coordinate-aware PDF text reconstruction that preserves reading order across single- and multi-column resume layouts",
      "100% client-side execution: resumes are parsed in memory and never transmitted to or stored on an external server",
      "Job description keyword extraction and gap analysis highlighting missing technical skills and ATS formatting issues",
      "Instant compatibility scoring with zero network round-trips"
    ],
    metrics: [
      { label: "Execution", value: "100% Client-Side" },
      { label: "Framework", value: "React Router 7" },
      { label: "Privacy", value: "Zero Server Storage" }
    ],
    architecture: {
      clientArchitecture: "React Router 7 and TypeScript SPA executing PDF extraction, tokenization, and keyword scoring entirely in the browser.",
      backendArchitecture: "Intentionally serverless: removing backend ingestion eliminates PII storage risk and network latency.",
      databaseAndStorage: "Ephemeral in-memory processing. Document buffers are discarded as soon as the session closes.",
      securityAndAuth: "Privacy-by-architecture design ensuring personal contact details and employment history never cross the network.",
      deploymentPipeline: "Static build deployed to Vercel's global edge CDN via Vite.",
      keyTechnicalChallenge: "Naive PDF text extraction reads horizontally across page coordinates, interleaving unrelated sentences in two-column resumes and breaking keyword matching.",
      solutionEngineered: "Implemented a layout-aware parser that clusters text runs by bounding-box geometry and column boundaries before reconstructing sequential reading order."
    },
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentHex: "#38bdf8"
  },
  {
    id: "flow-batch-automator",
    title: "Flow Batch Automator",
    tagline: "Manifest V3 Chrome extension for queued prompt automation and direct-to-disk media capture",
    description: "Browser automation extension that queues batch jobs on Flow, intercepts uncompressed 2K/4K media buffers directly in memory, and streams assets to local folders via the File System Access API without Save As prompts.",
    fullDescription: "Built on Chrome Manifest V3 using closed Shadow DOM UI encapsulation, MAIN-world script interception, MutationObserver state tracking, IndexedDB directory-handle persistence, and automated filename conflict resolution.",
    category: "AI & Systems",
    stack: ["JavaScript (ES6+)", "Chrome Manifest V3", "Shadow DOM", "File System Access API", "IndexedDB"],
    features: [
      "MAIN-world interception that captures full uncompressed 2K/4K binary media buffers directly in memory",
      "Direct local folder writes via the Native File System Access API with auto-incrementing filename conflict resolution",
      "Closed Shadow DOM side-panel UI preventing CSS and DOM collisions with the host web application",
      "MutationObserver state machine tracking asynchronous job completion across dynamic feed updates",
      "IndexedDB persistence for authorized directory handles paired with chrome.storage.local queue state"
    ],
    metrics: [
      { label: "Platform", value: "Chrome Manifest V3" },
      { label: "Isolation", value: "Closed Shadow DOM" },
      { label: "Storage", value: "IndexedDB + Native FS" }
    ],
    architecture: {
      clientArchitecture: "Injected control panel encapsulated inside a closed Shadow Root to guarantee complete CSS isolation from host page updates.",
      backendArchitecture: "Manifest V3 background service worker coordinating asynchronous prompt queues, completion events, and chrome.storage state.",
      databaseAndStorage: "IndexedDB persists FileSystemDirectoryHandle references across sessions while chrome.storage.local stores queued jobs and settings.",
      securityAndAuth: "Scoped to strict Manifest V3 permission boundaries with explicit user-granted folder access through the File System Access API.",
      deploymentPipeline: "Packaged as an unpacked Manifest V3 Chrome extension with modular content, MAIN-world, and service-worker scripts.",
      keyTechnicalChallenge: "Capturing full-resolution upscaled media buffers across isolated extension worlds without triggering repetitive browser download dialogs or dropping files.",
      solutionEngineered: "Bridged a MAIN-world network/buffer interceptor with the extension context to stream raw binary payloads straight to user-authorized local file handles."
    },
    liveUrl: "https://github.com/mahmudbuilds/flow-batch-automator",
    githubUrl: "https://github.com/mahmudbuilds/flow-batch-automator",
    featured: false,
    accentHex: "#f59e0b"
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "Keyboard-first, low-latency workspace UI for technical interview practice",
    description: "Minimalist frontend workspace built with React 19, TypeScript, and Motion, designed around keyboard-driven navigation, GPU-composited transitions, and local-first state persistence.",
    fullDescription: "Built with React 19, TypeScript, Tailwind CSS, and Motion to explore crisp interaction design for developer tools: global keyboard shortcuts, zero-jank spring animations, and distraction-free dark-mode ergonomics.",
    category: "Frontend Concepts",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Keyboard-first command and navigation model built for mouse-free workflow speed",
      "GPU-composited spring animations tuned for consistent 60 FPS frame pacing without layout thrashing",
      "Local-first state persistence keeping notes and workspace preferences instant and offline-capable",
      "High-contrast dark interface with restrained visual hierarchy to keep focus on code and notes"
    ],
    metrics: [
      { label: "Runtime", value: "React 19 + TS" },
      { label: "Motion", value: "GPU-Composited 60 FPS" },
      { label: "Storage", value: "Local-First" }
    ],
    architecture: {
      clientArchitecture: "Modular React 19 component architecture using strict TypeScript, keyboard event orchestration, and Motion spring primitives.",
      backendArchitecture: "Zero-latency client-side runtime with instant keyboard dispatch and local persistence.",
      databaseAndStorage: "Browser-local storage preserving user preferences and practice notes offline without external dependencies.",
      securityAndAuth: "Fully local execution: session notes and settings remain exclusively on the user's machine.",
      deploymentPipeline: "Deployed on Vercel with optimized static asset bundling.",
      keyTechnicalChallenge: "Maintaining locked 60 FPS panel transitions and interactive feedback while keeping bundle size and re-render overhead minimal.",
      solutionEngineered: "Restricted animations to GPU-composited transform/opacity properties and isolated high-frequency UI state to prevent cascading React re-renders."
    },
    liveUrl: "https://vesper--ai.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: false,
    accentHex: "#818cf8"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML5 & CSS3" }
    ]
  },
  {
    name: "Frontend Engineering",
    skills: [
      { name: "React 19" },
      { name: "Next.js (App Router)" },
      { name: "React Router 7" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Web Components & Shadow DOM" },
      { name: "Browser & Web APIs" }
    ]
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "PostgreSQL" },
      { name: "Django REST Framework" },
      { name: "Node.js & Express" },
      { name: "Convex (Realtime & Serverless)" },
      { name: "REST API Design" },
      { name: "Auth & RBAC (Clerk, JWT)" },
      { name: "Transactions & Schema Design" }
    ]
  },
  {
    name: "Infrastructure & Tooling",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "Neon Serverless Postgres" },
      { name: "Chrome Extensions (Manifest V3)" },
      { name: "Performance Optimization" },
      { name: "Automated Deployments" }
    ]
  }
];

export const experienceMilestonesData: ExperienceMilestone[] = [
  {
    year: "2024 – Present",
    role: "Full-Stack Software Engineer",
    company: "Independent Engineering",
    description: "Architected, shipped, and operated end-to-end web applications and browser systems, owning relational schemas, API resilience, authentication, and frontend performance from initial design to production deployment.",
    highlights: [
      "Designed transactional PostgreSQL schemas and Django REST APIs with row-level locking (SELECT FOR UPDATE) and RBAC to enforce data consistency under concurrent writes.",
      "Built fault-tolerant external API integrations in serverless backends, implementing automated multi-key rotation, failover recovery, and server-side usage metering.",
      "Architected reactive Next.js (App Router) and TypeScript frontends with Clerk/JWT auth boundaries, optimistic updates, and client-side document/media processing.",
      "Engineered Manifest V3 browser tooling leveraging closed Shadow DOM encapsulation, MAIN-world buffer interception, IndexedDB, and the Native File System Access API."
    ]
  },
  {
    year: "2023 – 2024",
    role: "Full-Stack Web Developer",
    company: "Independent Engineering",
    description: "Established production fundamentals across React, Node.js, Express, and relational SQL databases, shipping responsive full-stack web applications.",
    highlights: [
      "Built RESTful Node.js and Express services backed by hosted PostgreSQL with parameterized queries, input validation, and server-verified pricing/state logic.",
      "Developed responsive, accessible React and Tailwind CSS interfaces engineered for consistent behavior across desktop, tablet, and mobile viewports."
    ]
  }
];
