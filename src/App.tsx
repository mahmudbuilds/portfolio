import { useState } from "react";
import { Header } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ContactFooter } from "./components/ContactFooter";
import { ResumeModal } from "./components/ResumeModal";
import { useTheme } from "./hooks/useTheme";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-paper text-ink antialiased font-sans transition-colors duration-200">
      <main
        className={`max-w-4xl mx-auto px-5 sm:px-8 py-8 sm:py-14 md:py-20 space-y-20 sm:space-y-28 ${
          isResumeOpen ? "no-print" : ""
        }`}
      >
        <Header
          onOpenResume={() => setIsResumeOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <ProjectsSection />

        <ExperienceSection />

        <SkillsSection />

        <PhilosophySection />

        <ContactFooter />
      </main>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
