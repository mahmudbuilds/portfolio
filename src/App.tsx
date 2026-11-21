import { useState, useRef } from "react";
import { SiteNav, HeroSection } from "./components/Header";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ContactFooter } from "./components/ContactFooter";
import { ResumeModal } from "./components/ResumeModal";
import { useTheme } from "./hooks/useTheme";

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const { theme, toggleTheme } = useTheme();

  const handleOpenResume = (trigger?: HTMLElement | null) => {
    lastTriggerRef.current = trigger ?? (document.activeElement as HTMLElement | null);
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-paper text-ink antialiased font-sans transition-colors duration-200"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-ink focus:text-paper focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      <div className={isResumeOpen ? "no-print" : ""}>
        <SiteNav
          onOpenResume={handleOpenResume}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main
          id="main-content"
          className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-10 sm:pt-14 md:pt-20 pb-20 sm:pb-28 space-y-24 sm:space-y-32"
        >
          <HeroSection onOpenResume={handleOpenResume} />

          <ProjectsSection />

          <ExperienceSection />

          <SkillsSection />

          <PhilosophySection />
        </main>

        <ContactFooter onOpenResume={handleOpenResume} />
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

export default App;
