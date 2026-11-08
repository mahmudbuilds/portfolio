import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud Tella",
  handle: "@mahmudbuilds",
  title: "Full-Stack Software Engineer",
  tagline: "Building clean, fast, and reliable web applications.",
  bio: "Full-stack software engineer who builds fast, reliable web and mobile apps. I work with React, Next.js, TypeScript, Python, PostgreSQL, and Convex, and I care about clean code, thoughtful UX, and software that solves real problems.",
  location: "Nigeria · Remote / Global",
  email: "akinadetella@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  instagram: "https://instagram.com/mahmudtella_",
  availability: "Available for engineering roles",
};

export const projectsData: Project[] = [
  {
    id: "resonance",
    title: "Resonance",
    tagline: "Next-generation AI voice generator, text-to-speech studio, and voice cloning platform",
    description: "A full-stack AI audio platform that generates natural human voiceovers across 9+ languages, clones voices from live microphone recordings or file uploads, and provides real-time waveform previews.",
    fullDescription: "Built with Next.js 16 (App Router), Convex real-time backend and file storage, Inworld AI neural TTS, Clerk authentication, and Wavesurfer.js. Includes character-level credit deduction, automated API key rotation with fallback, and live waveform visualization.",
    category: "AI & Systems",
    stack: ["Next.js 16", "Convex", "Inworld AI TTS", "Clerk", "Wavesurfer.js", "Tailwind CSS v4"],
    features: [
      "Neural Text-to-Speech across 9+ languages with pacing, emotion, and temperature controls",
      "AI Voice Cloning using live microphone recordings or uploaded audio samples",
      "Real-time backend powered by Convex for instant telemetry, mutations, and file storage",
      "Automated API key rotation with seamless fallback and auto-cloning from cached audio",
      "Interactive waveform audio previews and microphone recorder powered by Wavesurfer.js"
    ],
    metrics: [
      { label: "Status", value: "Live & Deployed" },
      { label: "AI Engine", value: "Inworld Neural TTS" },
      { label: "Backend", value: "Convex Realtime" }
    ],
    architecture: {
      clientArchitecture: "Next.js 16 App Router interface featuring an interactive studio, script editor, live microphone waveform recorder, and Clerk route protection.",
      backendArchitecture: "Convex real-time serverless actions and queries executing neural speech synthesis with Inworld AI TTS and managing user credits.",
      databaseAndStorage: "Convex real-time reactive database schema storing user credits, voice library rankings, audio files, and generation telemetry.",
      securityAndAuth: "User authentication via Clerk with route proxy protection, session management, and server-side credit deduction validation.",
      deploymentPipeline: "Deployed on Vercel with high-speed asset caching and automated continuous integration.",
      keyTechnicalChallenge: "Preventing synthesis failures during traffic spikes while supporting real-time voice cloning and large audio buffer generation.",
      solutionEngineered: "Engineered an automatic multi-key rotation and failover system across Inworld API keys, auto-cloning voices from cached samples when a fallback key engages."
    },
    liveUrl: "https://tryresonance.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: true,
    accentHex: "#f43f5e"
  },
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Real-time warehouse and inventory management platform for businesses",
    description: "A cloud-based web app that helps businesses track inventory across multiple warehouses, manage stock levels, and prevent overselling items in real time.",
    fullDescription: "Inventry is a decoupled full-stack platform built with Next.js 16 (App Router) on the frontend and Python (Django REST Framework) with PostgreSQL on the backend. It tracks warehouse stock levels, enforces role-based access control (RBAC), and prevents inventory race conditions with database transaction locks.",
    category: "Full-Stack",
    stack: ["Next.js 16", "React", "Python (Django)", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time stock tracking across multiple warehouse locations",
      "Prevents overselling when multiple orders are placed at the exact same moment",
      "Role-based access control (RBAC) for Admins, Managers, and Staff",
      "Low-stock automated alerts and inventory reorder notifications",
      "Fast, responsive dashboard optimized for desktop, tablets, and mobile"
    ],
    metrics: [
      { label: "Status", value: "Live & Deployed" },
      { label: "Stack", value: "Next.js + Python" },
      { label: "Database", value: "PostgreSQL" }
    ],
    architecture: {
      clientArchitecture: "Modern responsive web app built with Next.js 16 and React, giving users instant page loads and real-time updates.",
      backendArchitecture: "Python backend powered by Django REST Framework to handle business logic, orders, and user permissions securely.",
      databaseAndStorage: "Hosted PostgreSQL database that stores inventory records, warehouse locations, and order histories.",
      securityAndAuth: "Secure user logins with JWT encryption and role-based permissions to keep company data protected.",
      deploymentPipeline: "Frontend hosted on Vercel and backend hosted in the cloud with automated deployments.",
      keyTechnicalChallenge: "Preventing items from accidentally being oversold if two warehouse managers sell the last item at the exact same time.",
      solutionEngineered: "Used database transaction locks (SELECT FOR UPDATE) so concurrent orders process sequentially, ensuring stock never drops below zero."
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#10b981"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "In-browser ATS resume analyzer and job description keyword matcher",
    description: "A privacy-first tool that reads complex PDF resumes directly inside the browser, compares them against job descriptions, and highlights missing skills with instant scoring.",
    fullDescription: "Built with React Router 7 and TypeScript. ResuMind analyzes resumes 100% client-side without uploading sensitive personal information to an external server. It resolves multi-column text ordering and scores keyword density against target job postings.",
    category: "AI & Systems",
    stack: ["React Router 7", "TypeScript", "Tailwind CSS", "PDF Parser", "Vite"],
    features: [
      "Reads PDF resumes directly in the browser without scrambling two-column text",
      "100% private: resume data never leaves the user's browser or touches a remote server",
      "Highlights missing keywords, skill gaps, and ATS formatting recommendations",
      "Instant compatibility score showing match percentage against job specifications",
      "Zero latency with instant local processing"
    ],
    metrics: [
      { label: "Privacy", value: "100% In-Browser" },
      { label: "Engine", value: "React Router 7" },
      { label: "Processing", value: "Instant Local" }
    ],
    architecture: {
      clientArchitecture: "Single-page React Router 7 application that handles document analysis right inside the web browser.",
      backendArchitecture: "Pure client-side execution: zero external server dependencies for parsing private user documents.",
      databaseAndStorage: "Zero server storage. Files are temporarily analyzed in memory and immediately discarded upon session close.",
      securityAndAuth: "Built with privacy by design—sensitive contact information and employment records never transmit over the network.",
      deploymentPipeline: "Deployed on Vercel with high-speed global CDN delivery.",
      keyTechnicalChallenge: "Standard PDF text extractors get confused by two-column resumes, reading across columns and jumbling sentences together.",
      solutionEngineered: "Created a layout-aware reader that detects column boundaries and reads each section in proper reading order."
    },
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentHex: "#38bdf8"
  },
  {
    id: "flow-batch-automator",
    title: "Flow Batch Automator",
    tagline: "High-throughput browser automation extension with Native File System saving",
    description: "A Manifest V3 Google Chrome extension that automates batch prompt execution on Flow, intercepts uncompressed image buffers in memory, and writes assets directly to local folders without browser popups.",
    fullDescription: "Engineered with Chrome Manifest V3, Shadow DOM CSS isolation, and the Native File System Access API. Features background service workers, MutationObserver state tracking, in-memory 2K buffer capture, and auto-increment file conflict handling.",
    category: "AI & Systems",
    stack: ["JavaScript (ES6+)", "Chrome Manifest V3", "Shadow DOM", "File System API", "MutationObserver"],
    features: [
      "Native File System Access API integration for direct folder writes with zero browser 'Save As' popups",
      "Shadow DOM container architecture ensuring zero CSS styling interference with host application",
      "MAIN-world page script interception that captures uncompressed 2K/4K media buffers directly in memory",
      "Dynamic feed tracking using MutationObserver to detect exact completion states",
      "IndexedDB persistence for destination folder handles and automated file conflict resolution"
    ],
    metrics: [
      { label: "Architecture", value: "Manifest V3" },
      { label: "Isolation", value: "Shadow DOM" },
      { label: "File Access", value: "Native FS API" }
    ],
    architecture: {
      clientArchitecture: "Injected side panel isolated inside a closed Shadow Root to avoid host page CSS collisions, with draggable floating controls.",
      backendArchitecture: "Background Service Worker managing asynchronous queue execution, download streams, and state persistence via chrome.storage.",
      databaseAndStorage: "IndexedDB storage for persistent directory handles and chrome.storage.local for queued prompts and configuration.",
      securityAndAuth: "Follows strict Manifest V3 security boundaries with explicit user folder permissions via the File System Access API.",
      deploymentPipeline: "Engineered and structured as an installable unpacked Chrome extension with full automated testing.",
      keyTechnicalChallenge: "Capturing 2K upscaled media without triggering repetitive browser download popups or losing data across origin boundaries.",
      solutionEngineered: "Engineered an in-memory MAIN-world interceptor that reads the full binary buffer and writes directly to disk via user-authorized file handles."
    },
    liveUrl: "https://github.com/mahmudbuilds/flow-batch-automator",
    githubUrl: "https://github.com/mahmudbuilds/flow-batch-automator",
    featured: false,
    accentHex: "#f59e0b"
  },
  {
    id: "ecommerce",
    title: "Full-Stack Online Store",
    tagline: "Modern e-commerce storefront with live search and shopping cart",
    description: "A complete online shopping platform featuring real-time product search, category filtering, a persistent shopping cart, and a cloud PostgreSQL database.",
    fullDescription: "An end-to-end e-commerce application built with React on the frontend and Node.js with PostgreSQL (hosted on Neon.tech) on the backend. Shoppers can search products, filter categories, and maintain persistent cart state.",
    category: "Full-Stack",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Live product catalog connected to a cloud PostgreSQL database (Neon.tech)",
      "Instant search and category filters to find products quickly",
      "Persistent shopping cart that stays saved when you browse around",
      "Mobile-friendly design with smooth checkout flow"
    ],
    metrics: [
      { label: "Frontend", value: "React + Tailwind" },
      { label: "Backend", value: "Node.js / Express" },
      { label: "Database", value: "PostgreSQL" }
    ],
    architecture: {
      clientArchitecture: "Responsive React frontend with clean shopping cart state and product grids.",
      backendArchitecture: "Node.js and Express REST API that handles product inventory and cart operations.",
      databaseAndStorage: "Hosted PostgreSQL database storing products, categories, and customer orders.",
      securityAndAuth: "Input validation and parameterized queries to keep shopping transactions safe.",
      deploymentPipeline: "Frontend hosted on Vercel with fast asset delivery.",
      keyTechnicalChallenge: "Keeping shopping cart totals accurate and preventing items from disappearing when users reload the page.",
      solutionEngineered: "Saved the cart locally in the browser while validating actual prices and quantities against the server database."
    },
    liveUrl: "https://ecommerce-project-tau-gray.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/ecommerce-project",
    featured: false,
    accentHex: "#f59e0b"
  },
  {
    id: "vesper",
    title: "Vesper",
    tagline: "Clean practice tool and minimalist copilot interface for engineers",
    description: "A modern, distraction-free desktop application concept designed to help software engineers practice and prepare for live coding interviews.",
    fullDescription: "Vesper is an interface concept built with React 19 and smooth animations. It offers a distraction-free dark layout with keyboard shortcuts and instant feedback, helping developers focus during coding practice.",
    category: "Frontend Concepts",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Motion"],
    features: [
      "Ultra-smooth 60 FPS animations that feel fast and responsive",
      "Clean dark mode designed to minimize eye strain and screen glare",
      "Keyboard shortcuts for fast navigation without touching the mouse",
      "Clear, focused layout that highlights only the most important information"
    ],
    metrics: [
      { label: "Tech", value: "React 19" },
      { label: "Speed", value: "60 FPS Fluid" },
      { label: "Style", value: "Dark Minimal" }
    ],
    architecture: {
      clientArchitecture: "Built with modern React 19 components and smooth spring animation physics.",
      backendArchitecture: "Lightweight client-side application with instant keyboard response times.",
      databaseAndStorage: "Stores your personal settings and interview notes right on your device.",
      securityAndAuth: "Completely private and offline-capable without sending data outside.",
      deploymentPipeline: "Deployed on Vercel for fast global access.",
      keyTechnicalChallenge: "Keeping animations completely smooth without any lag or dropped frames.",
      solutionEngineered: "Used GPU-accelerated styling and lightweight state management so the interface stays snappy."
    },
    liveUrl: "https://vesper--ai.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: false,
    accentHex: "#818cf8"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML5 & CSS3" }
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React 19" },
      { name: "Next.js 16 (App Router)" },
      { name: "React Router 7" },
      { name: "Tailwind CSS v4" },
      { name: "Wavesurfer.js & Audio Visualizers" },
      { name: "Vite" },
      { name: "Shadow DOM & Web Components" }
    ]
  },
  {
    name: "Backend & Cloud",
    skills: [
      { name: "Convex (Realtime DB & Serverless)" },
      { name: "Python (Django REST)" },
      { name: "Node.js (Express)" },
      { name: "Inworld AI Neural TTS" },
      { name: "Clerk Authentication" },
      { name: "PostgreSQL Database" },
      { name: "Chrome Extension (Manifest V3)" },
      { name: "REST APIs & JWT Auth" }
    ]
  },
  {
    name: "Developer Tools & APIs",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel Deployment" },
      { name: "File System Access API" },
      { name: "Neon Serverless Postgres" },
      { name: "Database Migrations" },
      { name: "Performance Optimization" }
    ]
  }
];

export const experienceMilestonesData: ExperienceMilestone[] = [
  {
    year: "2024 – Present",
    role: "Full-Stack Software Engineer",
    company: "Personal Projects & Independent Engineering",
    description: "Designed, built, and launched multiple full-stack web applications, AI audio systems, and browser tools, focusing on clean user experiences, real-time databases, and useful developer tools.",
    highlights: [
      "Engineered Resonance (tryresonance.vercel.app), a full-stack AI voice generator and voice cloning studio built with Next.js 16, Convex real-time backend, Clerk auth, and Inworld neural TTS with multi-key rotation.",
      "Built Inventry, a complete warehouse management system using Next.js 16, Python/Django, and PostgreSQL that tracks inventory in real time and prevents stock errors.",
      "Engineered Flow Batch Automator, a Manifest V3 Chrome Extension featuring Shadow DOM isolation, MutationObserver, and the Native File System Access API for direct disk asset streaming.",
      "Created ResuMind, an in-browser privacy-first ATS resume scanner that evaluates PDF documents and calculates job description keyword match scores.",
      "Deployed all web applications to production with fast loading speeds, mobile responsiveness, and automated updates."
    ]
  },
  {
    year: "2023 – 2024",
    role: "Web Developer",
    company: "Full-Stack Web Development",
    description: "Built responsive websites, full-stack web applications, and database-driven tools with clean code and modern frameworks.",
    highlights: [
      "Constructed a full-stack e-commerce store with React, Node.js, and PostgreSQL featuring live product search and cart saving.",
      "Built modern, responsive user interfaces tested across desktop, tablet, and mobile screens."
    ]
  }
];
