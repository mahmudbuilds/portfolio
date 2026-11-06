import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { InteractiveWorkbench } from "./components/InteractiveWorkbench";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { ExperienceMilestones } from "./components/ExperienceMilestones";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { ArchitectureModal } from "./components/ArchitectureModal";
import { ResumeViewerModal } from "./components/ResumeViewerModal";
import type { Project } from "./types";

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f1f5f9] flex flex-col font-sans selection:bg-sky-500/25 selection:text-sky-200">
      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <InteractiveWorkbench />

        <SkillsMatrix />

        <ExperienceMilestones />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Modals & Interactive Overlays */}
      <CommandPalette
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
