import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahmudtella.vercel.app"),
  title: "Mahmud (@mahmudbuilds) | Full-Stack & AI Engineer",
  description: "Indie builder in the making | Solving problems with code | Full-stack & AI software engineer architecting resilient cloud systems and intelligent developer tools.",
  keywords: [
    "Mahmud",
    "mahmudtella",
    "mahmudbuilds",
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js 16",
    "React 19",
    "Django REST",
    "PostgreSQL",
    "Inventry",
    "ResuMind",
    "Flow Batch Automator",
    "TypeScript",
    "Tailwind CSS v4"
  ],
  authors: [{ name: "Mahmud", url: "https://github.com/mahmudbuilds" }],
  creator: "Mahmud (@mahmudbuilds)",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mahmudtella.vercel.app",
    title: "Mahmud | Full-Stack & AI Engineer",
    description: "Indie builder in the making | Solving problems with code | Next.js 16, React 19, Django REST, and AI tools.",
    siteName: "Mahmud Tella Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmud (@mahmudbuilds) | Full-Stack & AI Engineer",
    description: "Indie builder solving problems with code. Next.js 16, Django REST, and AI tools.",
    creator: "@mahmudbuilds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080a0f] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
