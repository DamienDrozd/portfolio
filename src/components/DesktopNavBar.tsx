'use client';

import React from "react";
import Link from "next/link";
import { navigationRoutes } from "./navigationRoutes";

// Composant pour un lien de navigation desktop
const DesktopNavLink = ({ route }: { route: any }) => {
    const baseClasses = "text-[#FFC300] hover:text-[#FFD700] transition-colors";

    if (route.target) {
        // Lien externe
        return (
            <a 
                className={baseClasses}
                href={route.href}
                target={route.target}
                rel={route.rel}
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
            >
                {route.label}
            </Link>
        );
    }
};


export default function DesktopNavBar() {
    const allRoutes = [...navigationRoutes.internal, ...navigationRoutes.external];

    return (
        <div className="flex justify-between items-center h-16">
            <Link className="text-[#FFC300] text-xl font-bold hover:text-[#FFD700] transition-colors" href="/">
                Damien Drozd
            </Link>
            
            <div className="flex items-center space-x-12 px-10">
                {allRoutes.map(route => (
                    <DesktopNavLink key={route.href} route={route} />
                ))}
            </div>
        </div>
    );
}
