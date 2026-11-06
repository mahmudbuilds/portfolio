import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { SystemsLab } from "./components/SystemsLab";
import { SkillsMatrix } from "./components/SkillsMatrix";
import { ExperienceMilestones } from "./components/ExperienceMilestones";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ArchitectureModal } from "./components/ArchitectureModal";
import { ResumeViewerModal } from "./components/ResumeViewerModal";
import type { Project } from "./types";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#04060b] text-[#f1f5f9] flex flex-col font-sans selection:bg-sky-500/25 selection:text-sky-200">
      {/* Top Floating Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SystemsLab />

        <SkillsMatrix />

        <ExperienceMilestones />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Architectural Deep-Dive Modal */}
      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Executive Resume Modal */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
