'use client';

import React, { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

// Hook personnalisé pour détecter la taille de l'écran
const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // 768px = breakpoint md de Tailwind
        };

        // Vérification initiale
        checkScreenSize();

        // Écouteur d'événement pour les changements de taille
        window.addEventListener('resize', checkScreenSize);

        // Nettoyage
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useScreenSize();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Fermer automatiquement le menu mobile quand on passe en desktop
    useEffect(() => {
        if (!isMobile && isMenuOpen) {
            setIsMenuOpen(false);
        }
    }, [isMobile, isMenuOpen]);

    return(
        <nav className="bg-[#000814] fixed top-0 w-full z-50 shadow-lg border-b border-[#FFC300]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {isMobile ? (
                    <MobileNavBar 
                        isMenuOpen={isMenuOpen} 
                        toggleMenu={toggleMenu} 
                        closeMenu={closeMenu} 
                    />
                ) : (
                    <DesktopNavBar />
                )}
            </div>
        </nav>
    );
}
