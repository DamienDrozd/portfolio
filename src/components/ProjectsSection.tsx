import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "GenPulse",
      period: "2023 - Actuel",
      description: "Plateforme web innovante cofondée et développée de A à Z. Pilotage complet du développement web avec Next.js et Fastify.",
      technologies: ["Next.js", "Fastify", "Architecture"],
      features: "Plateforme complète, infrastructure web, expérience utilisateur optimale",
      slug: "genpulse"
    },
    {
      title: "RetroGameCollec",
      period: "2025",
      description: "Application pour collectionneurs de jeux vidéo rétro. Gestion de collections, découverte de titres et interaction communautaire.",
      technologies: ["Next.js", "MongoDB", "IGDB API"],
      features: "Collections, recherche, partage, SEO optimisé",
      slug: "retrogamecollec"
    },
    {
      title: "PEEL",
      period: "2022 - 2024",
      description: "Application de rencontre mobile centrée sur la compatibilité réelle. Matching basé sur centres d'intérêt et activités communes.",
      technologies: ["React Native", "API REST", "Push Notifications"],
      features: "Swipe, matching, messagerie, App Store/Google Play",
      slug: "peel"
    }
  ];

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Projets personnels</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
