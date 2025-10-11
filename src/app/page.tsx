'use client';

import { useState, useEffect } from 'react';
import ProfileSection from "../components/ProfileSection";
import { useScrollTrigger } from '../hooks/useScrollTrigger';
import ScrollToResumeButton from "../components/ScrollToResumeButton";
import ResumeSection from "../components/ResumeSection";
import TimelineSection from "../components/TimelineSection";
import SkillsSection from "../components/SkillsSection";
import SoftSkillsSection from "../components/SoftSkillsSection";
import CVSection from "../components/CVSection";
import StructuredData from "../components/StructuredData";
import RevealAnimation from "../components/RevealAnimation";

export default function Home() {
  const [showResumeSection, setShowResumeSection] = useState(false);
  
  // Utiliser le hook personnalisé comme alternative
  const scrollTriggered = useScrollTrigger(400);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Calculer le pourcentage de scroll
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Révéler la section si l'utilisateur a scrollé plus de 15% de la page
      // ou s'il a scrollé plus de 300px
      if (scrollPercentage > 0.15 || scrollPosition > 400) {
        setShowResumeSection(true);
      }
    };

    // Ajouter un throttle pour améliorer les performances
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Vérifier immédiatement au montage du composant
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  // Mettre à jour showResumeSection quand le scroll trigger se déclenche
  useEffect(() => {
    if (scrollTriggered) {
      setShowResumeSection(true);
    }
  }, [scrollTriggered]);

  const handleShowResume = () => {
    setShowResumeSection(true);
  };

  return (
    <>
      {/* Données structurées pour le SEO */}
      <StructuredData />

      <div className="min-h-screen bg-[#000814] text-white">
        {/* Profile Section */}
        <ProfileSection />

        {!showResumeSection && (
          <ScrollToResumeButton onShowResume={handleShowResume} />
        )}

        {/* Contenu SEO-friendly - Toujours présent dans le DOM */}
        <div
          className={`transition-opacity duration-500 ${
            showResumeSection
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none h-0 overflow-hidden"
          }`}
          aria-hidden={!showResumeSection}
        >
          <RevealAnimation isVisible={showResumeSection}>
            {/* Resume Section avec animation bounce */}
            <div
              className={`${
                showResumeSection
                  ? "animate-fade-in-up animation-delay-100"
                  : "animate-on-reveal"
              }`}
            >
              <ResumeSection />
              <TimelineSection />
              <SkillsSection />
              <SoftSkillsSection />
              <CVSection />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </>
  );
}
