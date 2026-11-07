import { useState } from "react";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ContactFooter } from "./components/ContactFooter";
import { ResumeModal } from "./components/ResumeModal";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white antialiased font-sans">
      {/* Responsive multi-viewport container: tight on mobile, spacious multi-column on desktop */}
      <main className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-12 md:py-16 space-y-16 sm:space-y-24">
        {/* Header & Introduction */}
        <Header onOpenResume={() => setIsResumeOpen(true)} />

        {/* Selected Work & Projects */}
        <ProjectsSection />

        {/* Work & Milestones */}
        <ExperienceSection />

        {/* Technical Stack */}
        <SkillsSection />

        {/* Engineering Philosophy */}
        <PhilosophySection />

        {/* Contact & Footer */}
        <ContactFooter />
      </main>

      {/* Clean Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
