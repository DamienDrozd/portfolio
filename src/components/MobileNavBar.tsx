'use client';

import React from "react";
import Link from "next/link";
import { navigationRoutes } from "./navigationRoutes";

// Composant pour un lien de navigation mobile
const MobileNavLink = ({ route, onClose }: { route: any; onClose: () => void }) => {
    const baseClasses = "block text-[#FFC300] hover:text-[#FFD700] px-3 py-2 transition-colors";
    
    const handleClick = () => {
        onClose();
    };

    if (route.target) {
        // Lien externe
        return (
            <a 
                className={baseClasses}
                href={route.href}
                target={route.target}
                rel={route.rel}
                onClick={handleClick}
            >
                {route.label}
            </a>
        );
    } else {
        // Lien interne
        return (
            <Link 
                className={baseClasses}
                href={route.href}
                onClick={handleClick}
            >
                {route.label}
            </Link>
        );
    }
};

// Composant pour le menu mobile déroulant
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#000814] border-t border-[#FFC300]">
                {navigationRoutes.internal.map(route => (
                    <MobileNavLink key={route.href} route={route} onClose={onClose} />
                ))}
                {navigationRoutes.external.map(route => (
                    <MobileNavLink key={route.href} route={route} onClose={onClose} />
                ))}
            </div>
        </div>
    );
};

// Composant pour le bouton hamburger mobile
const MobileMenuButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => (
    <div className="md:hidden">
        <button
            onClick={onToggle}
            className="text-[#FFC300] hover:text-[#FFD700] focus:outline-none focus:text-[#FFD700]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
);

interface MobileNavBarProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}

export default function MobileNavBar({ isMenuOpen, toggleMenu, closeMenu }: MobileNavBarProps) {
    return (
        <>
            <div className="flex justify-between items-center h-16">
                <MobileMenuButton isOpen={isMenuOpen} onToggle={toggleMenu} />
            </div>
            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}
