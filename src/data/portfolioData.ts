import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud Tella",
  handle: "@mahmudbuilds",
  title: "Full-Stack Software Engineer",
  tagline: "Resilient web applications, transactional backends, and fast interfaces.",
  bio: "Full-stack software engineer building end-to-end web products with TypeScript, React, Next.js, Python (Django REST), PostgreSQL, and Convex. Focused on data integrity under load, fault-tolerant API integrations, and responsive interfaces.",
  location: "Nigeria · Remote worldwide",
  timezone: "WAT (UTC+1)",
  responsePromise: "Usually replies within 24 hours",
  email: "mahxgithub@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  siteUrl: "https://mahmudtella.vercel.app",
  resumePdfUrl: "/Mahmud-Tella-Resume.pdf",
  availability: "Open to full-time full-stack roles",
};

export const projectsData: Project[] = [
  {
    id: "resonance",
    title: "Resonance",
    tagline: "Generates studio-grade narration and cloned voices in 9+ languages without dropping requests under API limits",
    description:
      "A real-time speech synthesis studio with live microphone voice cloning and interactive waveform scrubbing. Server-side credit metering and automated provider key failover keep synthesis reliable under concurrent load.",
    fullDescription:
      "Built with Next.js 16 (App Router), Convex reactive queries and serverless actions, Clerk authentication, Inworld neural TTS, and Wavesurfer.js. Enforces atomic character-level credit deduction on the server and automatically rotates API keys with cached voice re-cloning on provider failure.",
    category: "AI & Systems",
    stack: ["Next.js 16", "TypeScript", "Convex", "Clerk", "Inworld TTS", "Wavesurfer.js"],
    features: [
      "Server-enforced character-level credit metering and reactive balance updates via Convex mutations",
      "Automated multi-key API rotation with transparent failover and automatic voice re-cloning from cached audio samples",
      "Multi-language neural text-to-speech (9+ languages) with pacing, emotion, and temperature controls",
      "Voice cloning pipeline supporting live browser microphone capture and uploaded audio files",
      "Interactive waveform visualization and playback scrubbing powered by Wavesurfer.js",
    ],
    metrics: [
      { label: "Languages", value: "9+ neural voices" },
      { label: "Reliability", value: "Multi-key failover" },
      { label: "Metering", value: "Server-enforced" },
    ],
    architecture: {
      clientArchitecture:
        "Next.js 16 App Router workspace with Clerk route protection, script editor, live microphone recorder, and Wavesurfer.js playback.",
      backendArchitecture:
        "Convex serverless actions orchestrate speech synthesis against Inworld TTS while reactive queries and mutations manage credit balances and audio storage.",
      databaseAndStorage:
        "Convex reactive database and object storage tracking user credit ledgers, voice profiles, generated audio assets, and synthesis telemetry.",
      securityAndAuth:
        "Clerk session authentication with middleware route guards and server-side credit validation before dispatching external synthesis requests.",
      deploymentPipeline:
        "Continuous deployment on Vercel with edge asset caching and managed Convex cloud functions.",
      keyTechnicalChallenge:
        "Preventing failed voice generations when third-party TTS API keys hit rate limits or quota ceilings during concurrent usage.",
      solutionEngineered:
        "Built a key-rotation and failover layer in Convex actions that detects upstream quota errors, switches to a healthy key, and re-clones custom voices from cached audio buffers.",
    },
    liveUrl: "https://tryresonance.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: true,
    accentHex: "#2563eb",
    screenshot: "/projects/resonance.png",
    screenshotAlt:
      "Resonance AI voice synthesis studio showing the landing hero, studio microphone setup, and interactive audio waveform player",
  },
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Stops simultaneous warehouse orders from overselling the last unit in stock",
    description:
      "A decoupled multi-warehouse inventory platform with role-based permissions for Admins, Managers, and Staff. Conflicting checkout and transfer requests are serialized inside atomic PostgreSQL transactions so stock counts never drift negative.",
    fullDescription:
      "Architected with a Next.js 16 (App Router) client and a Python / Django REST Framework API backed by PostgreSQL. Models multi-warehouse stock ledgers, enforces RBAC across Admins, Managers, and Staff, and serializes concurrent inventory mutations inside atomic database transactions.",
    category: "Full-Stack",
    stack: ["Next.js 16", "TypeScript", "Python", "Django REST", "PostgreSQL"],
    features: [
      "Atomic stock decrements with PostgreSQL row-level locking to prevent negative inventory under concurrent orders",
      "Multi-warehouse stock ledger with automated low-stock threshold alerts and reorder visibility",
      "Role-based access control (RBAC) with JWT authentication scoping permissions for Admins, Managers, and Staff",
      "Decoupled Django REST Framework API with serializer validation and relational audit trails",
      "Responsive operations dashboard built with Next.js 16 for desktop, tablet, and warehouse floor devices",
    ],
    metrics: [
      { label: "Concurrency", value: "Row-level locks" },
      { label: "Access", value: "3-role RBAC" },
      { label: "Integrity", value: "Atomic Postgres" },
    ],
    architecture: {
      clientArchitecture:
        "Next.js 16 and React frontend consuming typed REST endpoints with optimistic UI feedback and role-aware navigation.",
      backendArchitecture:
        "Python / Django REST Framework service layer handling order processing, stock ledger updates, and granular permission checks.",
      databaseAndStorage:
        "Relational PostgreSQL schema modeling warehouses, SKUs, stock levels, and transactional order histories with referential integrity.",
      securityAndAuth:
        "Stateless JWT authentication paired with Django permission classes enforcing role-scoped read and write boundaries.",
      deploymentPipeline:
        "Decoupled deployment separating the Next.js frontend from the Django REST API and managed PostgreSQL database.",
      keyTechnicalChallenge:
        "Eliminating race conditions where two simultaneous checkout or transfer requests read the same remaining stock count and drive inventory negative.",
      solutionEngineered:
        "Wrapped stock-decrement workflows in atomic database transactions with row-level locks, serializing conflicting writes so stock invariants hold under concurrency.",
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#0f766e",
    diagram: "inventry-locking",
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "Parses multi-column PDF resumes locally so candidate data never leaves the browser",
    description:
      "A zero-backend ATS resume analyzer that reconstructs reading order from complex PDF layouts in memory and scores keyword alignment against job descriptions with zero server storage.",
    fullDescription:
      "Built with React Router 7 and TypeScript. Performs 100% in-browser PDF parsing so sensitive candidate data never leaves the device, using coordinate-aware text reconstruction to handle multi-column layouts accurately.",
    category: "AI & Systems",
    stack: ["React Router 7", "TypeScript", "Vite", "Tailwind CSS", "PDF Parsing"],
    features: [
      "Coordinate-aware PDF text reconstruction that preserves reading order across single- and multi-column resumes",
      "100% client-side execution so resumes are parsed in memory and never sent to an external server",
      "Job description keyword extraction and gap analysis highlighting missing skills and formatting issues",
      "Instant compatibility scoring with zero network round-trips",
    ],
    metrics: [
      { label: "Privacy", value: "Zero server PII" },
      { label: "Parser", value: "Multi-column PDF" },
      { label: "Runtime", value: "100% client-side" },
    ],
    architecture: {
      clientArchitecture:
        "React Router 7 and TypeScript SPA executing PDF extraction, tokenization, and keyword scoring entirely in the browser.",
      backendArchitecture:
        "Intentionally serverless: removing backend ingestion eliminates PII storage risk and network latency.",
      databaseAndStorage:
        "Ephemeral in-memory processing. Document buffers are discarded as soon as the session closes.",
      securityAndAuth:
        "Privacy-by-architecture design ensuring personal contact details and employment history never cross the network.",
      deploymentPipeline: "Static build deployed to Vercel's edge CDN via Vite.",
      keyTechnicalChallenge:
        "Standard PDF text extraction reads horizontally across coordinates, scrambling unrelated sentences in two-column resumes and breaking keyword matching.",
      solutionEngineered:
        "Implemented a layout-aware parser that clusters text runs by bounding-box geometry and column boundaries before reconstructing sequential reading order.",
    },
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: false,
    accentHex: "#0369a1",
  },
  {
    id: "flow-batch-automator",
    title: "Flow Batch Automator",
    tagline: "Queues batch media jobs and streams full 2K/4K outputs straight to disk without Save As dialogs",
    description:
      "A Chrome Manifest V3 extension with an isolated side panel that automates prompt queues on Google Flow, captures uncompressed media in memory, and writes directly to user-authorized folders.",
    fullDescription:
      "Built on Chrome Manifest V3 using closed Shadow DOM UI encapsulation, MAIN-world script interception, MutationObserver state tracking, IndexedDB directory-handle persistence, and automated filename conflict resolution.",
    category: "AI & Systems",
    stack: ["JavaScript (ES6+)", "Chrome Manifest V3", "Shadow DOM", "File System Access API", "IndexedDB"],
    features: [
      "MAIN-world interception capturing full uncompressed 2K/4K binary media buffers directly in memory",
      "Direct local folder writes via the File System Access API with automatic filename conflict resolution",
      "Closed Shadow DOM side-panel UI preventing CSS and DOM collisions with the host web application",
      "MutationObserver state machine tracking asynchronous job completion across dynamic feed updates",
      "IndexedDB persistence for authorized directory handles paired with chrome.storage.local queue state",
    ],
    metrics: [
      { label: "Platform", value: "Manifest V3" },
      { label: "Output", value: "2K/4K direct disk" },
      { label: "Isolation", value: "Closed Shadow DOM" },
    ],
    architecture: {
      clientArchitecture:
        "Injected control panel encapsulated inside a closed Shadow Root to guarantee CSS isolation from host page updates.",
      backendArchitecture:
        "Manifest V3 background service worker coordinating asynchronous prompt queues, completion events, and chrome.storage state.",
      databaseAndStorage:
        "IndexedDB persists FileSystemDirectoryHandle references across sessions while chrome.storage.local stores queued jobs and settings.",
      securityAndAuth:
        "Scoped to strict Manifest V3 permission boundaries with explicit user-granted folder access through the File System Access API.",
      deploymentPipeline:
        "Packaged as a modular Manifest V3 Chrome extension with separated content, MAIN-world, and service-worker scripts.",
      keyTechnicalChallenge:
        "Capturing full-resolution media buffers across isolated extension worlds without triggering repetitive browser download prompts.",
      solutionEngineered:
        "Bridged a MAIN-world buffer interceptor with the extension context to stream raw binary payloads straight to user-authorized local file handles.",
    },
    githubUrl: "https://github.com/mahmudbuilds/flow-batch-automator",
    featured: false,
    accentHex: "#b45309",
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "A keyboard-first React workspace exploring 60 FPS spring choreography and offline state",
    description:
      "A frontend interaction and motion study built with React 19, TypeScript, and Motion. Focused on mouse-free command navigation, GPU-composited transitions without layout thrashing, and local-first note persistence.",
    fullDescription:
      "Built with React 19, TypeScript, Tailwind CSS, and Motion to explore crisp interaction design for developer tools: global keyboard shortcuts, GPU-composited spring animations, and distraction-free dark-mode ergonomics.",
    category: "Frontend Concepts",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Keyboard-first command and navigation model designed for mouse-free workflow speed",
      "GPU-composited spring transitions tuned for consistent 60 FPS frame pacing without layout thrashing",
      "Local-first state persistence keeping workspace notes and preferences instant and offline-capable",
      "High-contrast dark interface with restrained visual hierarchy",
    ],
    metrics: [
      { label: "Motion", value: "60 FPS springs" },
      { label: "Input", value: "Keyboard-first" },
      { label: "Storage", value: "Local-first" },
    ],
    architecture: {
      clientArchitecture:
        "Modular React 19 component architecture using strict TypeScript, keyboard event orchestration, and Motion spring primitives.",
      backendArchitecture:
        "Zero-latency client-side runtime with instant keyboard dispatch and local persistence.",
      databaseAndStorage:
        "Browser-local storage preserving user preferences and workspace notes offline without external dependencies.",
      securityAndAuth:
        "Fully local execution: workspace notes and settings stay on the user's machine.",
      deploymentPipeline: "Deployed on Vercel with optimized static asset bundling.",
      keyTechnicalChallenge:
        "Maintaining locked 60 FPS panel transitions while keeping bundle size and React re-render overhead minimal.",
      solutionEngineered:
        "Restricted animations to GPU-composited transform and opacity properties and isolated high-frequency UI state to prevent cascading re-renders.",
    },
    liveUrl: "https://vesper--ai.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: false,
    accentHex: "#6366f1",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Languages & UI",
    skills: [
      { name: "TypeScript" },
      { name: "React 19" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      { name: "Python" },
      { name: "Django REST" },
      { name: "PostgreSQL" },
      { name: "Convex" },
    ],
  },
  {
    name: "Platform & Web",
    skills: [
      { name: "Node.js" },
      { name: "Auth & RBAC" },
      { name: "Manifest V3" },
      { name: "Vercel" },
    ],
  },
];

export const experienceMilestonesData: ExperienceMilestone[] = [
  {
    year: "2023 – Present",
    role: "Independent Full-Stack Engineer",
    company: "Self-Directed Product Engineering",
    description:
      "Designing, building, and operating end-to-end web products and browser tools from database schema to production UI, with full ownership over data consistency, API resilience, and frontend performance.",
    highlights: [
      "Engineered transactional PostgreSQL and Django REST backends with atomic write serialization, JWT authentication, and three-tier role-based access control.",
      "Built fault-tolerant serverless workflows in Convex and Next.js featuring automated API key failover, server-side usage metering, and real-time reactive state.",
      "Shipped privacy-first browser software including a client-side multi-column PDF parser and a Manifest V3 Chrome extension using closed Shadow DOM and the File System Access API.",
    ],
  },
];
