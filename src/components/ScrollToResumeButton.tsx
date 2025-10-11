'use client';

import { useState } from 'react';

interface ScrollToResumeButtonProps {
  onShowResume: () => void;
}

export default function ScrollToResumeButton({ onShowResume }: ScrollToResumeButtonProps) {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToResume = () => {
    setIsScrolling(true);
    
    // D'abord montrer la ResumeSection
    onShowResume();
    
    // Attendre un peu que le composant soit rendu avant de scroller
    setTimeout(() => {
      const resumeElement = document.getElementById('resume-section');
      if (resumeElement) {
        resumeElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
    
    // Réinitialiser l'état après l'animation
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="flex justify-center py-12 bg-gradient-to-b from-transparent to-[#000814]/50">
      <button
        onClick={scrollToResume}
        disabled={isScrolling}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#FFC300] to-[#FFD60A] rounded-full shadow-2xl hover:shadow-[#FFC300]/25 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {/* Effet de brillance */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
        
        {/* Contenu du bouton */}
        <span className="relative flex items-center text-[#000814] font-bold">
          {isScrolling ? (
            <>
              <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Défilement...
            </>
          ) : (
            <>
              Voir plus
              <svg 
                className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                  isScrolling ? 'translate-y-1' : 'group-hover:translate-y-1'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </>
          )}
        </span>

        {/* Indicateur de pulsation */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC300] to-[#FFD60A] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}