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

export default function Home() {
  const [showResumeSection, setShowResumeSection] = useState(false);
  const [scrollDebug, setScrollDebug] = useState({ scrollY: 0, percentage: 0 });
  
  // Utiliser le hook personnalisé comme alternative
  const scrollTriggered = useScrollTrigger(400);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Calculer le pourcentage de scroll
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      // Mise à jour du debug (temporaire)
      setScrollDebug({ scrollY: scrollPosition, percentage: Math.round(scrollPercentage * 100) });
      
      // Révéler la section si l'utilisateur a scrollé plus de 20% de la page
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
    <div className="min-h-screen bg-[#000814] text-white">
      {/* Profile Section */}
      <ProfileSection />

      {/* Scroll to Resume Button */}
      <ScrollToResumeButton onShowResume={handleShowResume} />

      {showResumeSection && (
        <div className="animate-fade-in-up">
          {/* Resume Section - Conditionnel */}
          <ResumeSection />

          {/* Timeline - Projets et Expériences */}
          <TimelineSection />

          {/* Competences Section */}
          <SkillsSection />

          {/* Soft Skills Section */}
          <SoftSkillsSection />

          {/* CV Section */}
          <CVSection />
        </div>
      )}
    </div>
  );
}
