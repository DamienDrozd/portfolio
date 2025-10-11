// Types pour les routes de navigation
export interface NavigationRoute {
    href: string;
    label: string;
    target?: string;
    rel?: string;
}

// Objet définissant toutes les routes de navigation
export const navigationRoutes: {
    internal: NavigationRoute[];
    external: NavigationRoute[];
} = {
    internal: [
        { href: "/", label: "Accueil" },
        { href: "/experiences", label: "Expériences" },
        { href: "/projects", label: "Projets" },
        { href: "/contact", label: "Contact" },
        { href: "/cv", label: "CV" }
    ],
    external: [
        { 
            href: "https://www.linkedin.com/in/damiendrozd/", 
            label: "LinkedIn",
            target: "_blank",
            rel: "noopener noreferrer"
        },
        { 
            href: "https://github.com/DamienDrozd", 
            label: "GitHub",
            target: "_blank",
            rel: "noopener noreferrer"
        }
    ]
};
