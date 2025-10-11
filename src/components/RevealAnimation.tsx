'use client';

import { useEffect, useState } from 'react';

interface RevealAnimationProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export default function RevealAnimation({ isVisible, children }: RevealAnimationProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Déclencher l'animation de rideau
      setTimeout(() => setShowContent(true), 200);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">

      
      
      {/* Contenu avec animation de révélation */}
      <div 
        className={`relative z-0 transition-all duration-1000 ${
          showContent 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {children}
      </div>
    </div>
  );
}