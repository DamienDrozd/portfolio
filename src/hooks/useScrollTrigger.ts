'use client';

import { useState, useEffect } from 'react';

export function useScrollTrigger(threshold: number = 300) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > threshold && !isTriggered) {
        setIsTriggered(true);
      }
    };

    // Vérification initiale
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, isTriggered]);

  return isTriggered;
}

export function useIntersectionTrigger(targetId: string) {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se déclenche quand l'élément sort de la vue (bas de l'écran)
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setIsTriggered(true);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [targetId]);

  return isTriggered;
}