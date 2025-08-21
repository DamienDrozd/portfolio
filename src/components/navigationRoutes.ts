// Objet définissant toutes les routes de navigation
export const navigationRoutes = {
    internal: [
        { href: "/", label: "Accueil" },
        { href: "/experiences", label: "Expériences" },
        { href: "/projects", label: "Projets" },
        { href: "/contact", label: "Contact" }
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
