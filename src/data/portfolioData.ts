import type { Project, SkillCategory, ExperienceMilestone } from "../types";

export const developerBio = {
  name: "Mahmud",
  handle: "@mahmudbuilds",
  title: "Full-Stack Software Engineer",
  tagline: "Building clean, fast, and reliable web applications.",
  bio: "Full-stack software engineer building reliable web applications with React, Next.js, Python, and PostgreSQL. Creator of Inventry (warehouse management), ResuMind (resume analyzer), and Code Auditor (security scanner). Focused on clean code, great user experience, and practical software that solves real problems.",
  location: "Remote / Global",
  email: "mahxgithub@gmail.com",
  github: "https://github.com/mahmudbuilds",
  twitter: "https://x.com/mahmudbuilds",
  instagram: "https://instagram.com/mahmudbuilds",
  availability: "Available for full-time engineering roles and projects",
};

export const projectsData: Project[] = [
  {
    id: "inventry",
    title: "Inventry",
    tagline: "Real-time warehouse and inventory management platform for businesses",
    description: "A cloud-based web app that helps businesses track inventory across multiple warehouses, manage stock levels, and prevent overselling items in real time.",
    fullDescription: "Inventry is a full-stack inventory platform built with Next.js on the frontend and Python (Django) with PostgreSQL on the backend. It allows companies to track warehouse stock levels, assign different permissions to managers and staff, and automatically prevents stock errors when multiple orders come in at once.",
    category: "Full-Stack",
    stack: ["Next.js", "React", "Python (Django)", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Real-time stock tracking across multiple warehouse locations",
      "Prevents overselling when multiple orders are placed at the exact same moment",
      "Different access levels for Admins, Warehouse Managers, and Staff",
      "Low-stock alerts so you know exactly when to reorder items",
      "Fast, responsive dashboard that works on desktop, tablets, and phones"
    ],
    metrics: [
      { label: "Status", value: "Live & Deployed" },
      { label: "Stack", value: "Next.js + Python" },
      { label: "Database", value: "PostgreSQL" }
    ],
    architecture: {
      clientArchitecture: "Modern responsive web app built with Next.js and React, giving users instant page loads and real-time updates.",
      backendArchitecture: "Python backend powered by Django REST Framework to handle business logic, orders, and user permissions securely.",
      databaseAndStorage: "Hosted PostgreSQL database that stores inventory records, warehouse locations, and order histories.",
      securityAndAuth: "Secure user logins with password encryption and role-based permissions to keep company data protected.",
      deploymentPipeline: "Frontend hosted on Vercel and backend hosted in the cloud with continuous updates.",
      keyTechnicalChallenge: "Preventing items from accidentally being oversold if two warehouse managers sell the last item at the exact same time.",
      solutionEngineered: "Used database transaction locks so orders are processed one by one, ensuring stock numbers never drop below zero."
    },
    liveUrl: "https://inventry-roan.vercel.app",
    githubUrl: "https://github.com/mahmudbuilds/inventry",
    featured: true,
    accentHex: "#10b981"
  },
  {
    id: "resumind",
    title: "ResuMind",
    tagline: "Smart resume scanner that checks your resume against job descriptions",
    description: "An easy-to-use resume tool that reads your PDF resume in your browser, compares it to a job description, and shows you which important skills you are missing.",
    fullDescription: "ResuMind helps job seekers optimize their resumes for company hiring systems. It reads complex two-column PDF resumes right inside your web browser without uploading your sensitive personal files to a server. It gives you a clear score and suggestions to improve your resume.",
    category: "AI & Systems",
    stack: ["React", "TypeScript", "Tailwind CSS", "PDF Reader", "Vite"],
    features: [
      "Reads PDF resumes directly in your browser without scrambling two-column text",
      "100% private: your resume is never saved on a server or shared with anyone",
      "Highlights missing keywords and skills from the job description",
      "Simple score showing how closely your resume matches the job",
      "Works on any modern browser with instant results"
    ],
    metrics: [
      { label: "Privacy", value: "100% In-Browser" },
      { label: "File Support", value: "PDF Documents" },
      { label: "Results", value: "Instant Match" }
    ],
    architecture: {
      clientArchitecture: "Single-page React app that handles the entire document analysis right inside the user's web browser.",
      backendArchitecture: "Completely client-side: no external servers are needed to parse your private document.",
      databaseAndStorage: "Zero data storage. The file is temporarily analyzed in your computer's memory and deleted when you close the tab.",
      securityAndAuth: "Built with privacy as the number one priority, so sensitive contact info never leaves your device.",
      deploymentPipeline: "Deployed on Vercel for fast global loading speeds.",
      keyTechnicalChallenge: "Standard PDF text extractors get confused by two-column resumes, reading across columns and jumbling sentences together.",
      solutionEngineered: "Created a layout-aware reader that detects columns and reads each section in the proper reading order."
    },
    liveUrl: "https://github.com/mahmudbuilds/ResuMind",
    githubUrl: "https://github.com/mahmudbuilds/ResuMind",
    featured: true,
    accentHex: "#38bdf8"
  },
  {
    id: "auditor",
    title: "Code Auditor",
    tagline: "Automated security tool that finds vulnerabilities in Python code",
    description: "A developer tool that automatically inspects Python code to find security flaws, dangerous database queries, and unsafe commands before software goes live.",
    fullDescription: "Code Auditor is an automated security scanner for developers. It scans Python code to catch common security risks like SQL injection, unsafe user inputs, and dangerous functions. It explains what the security bug is and gives you the exact code to fix it.",
    category: "AI & Systems",
    stack: ["Python", "Django", "Security Analysis", "PostgreSQL"],
    features: [
      "Checks code for dangerous security holes without needing to run untrusted code",
      "Detects SQL injection risks where hackers could steal or delete data",
      "Explains vulnerabilities in plain language with severity ratings",
      "Provides exact before-and-after code examples showing how to fix the problem",
      "Can run automatically every time a developer updates their code"
    ],
    metrics: [
      { label: "Language", value: "Python" },
      { label: "Scan Mode", value: "Fast Static Scan" },
      { label: "Detection", value: "Security Bugs" }
    ],
    architecture: {
      clientArchitecture: "Clean report dashboard where developers can view scan results, issue locations, and code fixes.",
      backendArchitecture: "Python backend that inspects code syntax and checks each function against a list of security rules.",
      databaseAndStorage: "PostgreSQL database that keeps track of audit history, scanned projects, and security reports.",
      securityAndAuth: "Analyzes code safely in an isolated environment so malicious code cannot harm the server.",
      deploymentPipeline: "Automated deployment with test suites ensuring all scanner rules work properly.",
      keyTechnicalChallenge: "Telling the difference between safe database queries and dangerous ones that could let attackers inject SQL commands.",
      solutionEngineered: "Built a rule engine that inspects how queries are assembled and warns developers whenever user input is combined unsafely."
    },
    liveUrl: "https://github.com/mahmudbuilds",
    githubUrl: "https://github.com/mahmudbuilds",
    featured: true,
    accentHex: "#f59e0b"
  },
  {
    id: "ecommerce",
    title: "Full-Stack Online Store",
    tagline: "Modern e-commerce storefront with live search and shopping cart",
    description: "A complete online shopping website featuring product search, category filtering, a persistent shopping cart, and a cloud database.",
    fullDescription: "An end-to-end e-commerce store built with React on the frontend and Node.js with PostgreSQL on the backend. Shoppers can search for products, filter by category, add items to their shopping cart, and have their cart saved even if they refresh the page.",
    category: "Full-Stack",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Live product catalog connected to a cloud PostgreSQL database",
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
    liveUrl: "https://github.com/mahmudbuilds/vesper",
    githubUrl: "https://github.com/mahmudbuilds/vesper",
    featured: false,
    accentHex: "#818cf8"
  },
  {
    id: "resonance",
    title: "Resonance",
    tagline: "Music and podcast streaming app with a live sound visualizer",
    description: "A web audio player where you can listen to podcasts and music tracks, manage your playback queue, and see live sound wave animations as you listen.",
    fullDescription: "Built with React and the browser's Web Audio system. The music keeps playing smoothly even as you click around different pages, and includes an animated sound frequency bar that dances to the beat.",
    category: "Full-Stack",
    stack: ["React", "TypeScript", "Web Audio", "Tailwind CSS"],
    features: [
      "Music keeps playing without interruptions even when you browse between pages",
      "Live audio sound wave visualizer rendered in real time",
      "Podcast and song queue where you can add, skip, and reorder tracks",
      "Instant scrubbing to jump to any part of the audio file"
    ],
    metrics: [
      { label: "Audio Engine", value: "Web Audio" },
      { label: "Visualizer", value: "Live Sound Wave" },
      { label: "Playback", value: "Uninterrupted" }
    ],
    architecture: {
      clientArchitecture: "React player with an audio manager that connects to a live sound wave canvas.",
      backendArchitecture: "Fast media streaming that lets users skip to any second of a song instantly.",
      databaseAndStorage: "Stores track titles, cover artwork, and playlist queues.",
      securityAndAuth: "Safe cross-origin audio loading for reliable playback in all browsers.",
      deploymentPipeline: "Hosted on Vercel with high-speed asset caching.",
      keyTechnicalChallenge: "Making sure music doesn't stop or restart when the user navigates between different pages.",
      solutionEngineered: "Kept the audio player running at the top level of the app so changing pages never interrupts playback."
    },
    liveUrl: "https://github.com/mahmudbuilds/resonance",
    githubUrl: "https://github.com/mahmudbuilds/resonance",
    featured: false,
    accentHex: "#f43f5e"
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML5 & CSS3" }
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Responsive UI Design" },
      { name: "Web Audio & Canvas" }
    ]
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "Python (Django)" },
      { name: "Node.js (Express)" },
      { name: "PostgreSQL Database" },
      { name: "REST APIs" },
      { name: "User Authentication & Permissions" },
      { name: "Docker" }
    ]
  },
  {
    name: "Developer Tools & Cloud",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel Deployment" },
      { name: "Render Cloud" },
      { name: "Code Security Scanning" },
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
    description: "Designed, built, and launched multiple full-stack web applications, focusing on clean user experiences, reliable databases, and useful developer tools.",
    highlights: [
      "Built Inventry, a complete warehouse management app using Next.js, Python, and PostgreSQL that tracks inventory in real time and prevents stock errors.",
      "Created ResuMind, a fast and private resume scanner that helps job seekers match their skills to job requirements without saving their personal data.",
      "Developed Code Auditor, an automated security tool for Python developers that finds security vulnerabilities and shows how to fix them.",
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
      "Built Resonance, a streaming audio web application with an animated sound wave visualizer that plays music seamlessly across pages.",
      "Created modern, responsive user interfaces tested across desktop, tablet, and mobile screens."
    ]
  }
];
