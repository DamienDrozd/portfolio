import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  const experiences = [
    {
      company: "Reconomia",
      period: "2023 - 2025",
      location: "Lille",
      position: "Développeur Web Fullstack - Alternance",
      description: "Développement d'application mobile React Native, création d'APIs avec FastAPI et déploiement sur Azure.",
      technologies: ["React Native", "FastAPI", "Azure"],
      slug: "reconomia"
    },
    {
      company: "LaWEbox",
      period: "2022 - 2023",
      location: "Paris",
      position: "Développeur Full Stack / Data Scientist",
      description: "Conception d'APIs REST et interfaces back-office. Projets data de bout en bout avec Django et Flask.",
      technologies: ["Django", "Flask", "Data Science"],
      slug: "lawebox"
    },
    {
      company: "Freelance",
      period: "2023",
      location: "Paris",
      position: "Développeur NextJS",
      description: "Site web vitrine accessible aux personnes sourdes et mal voyantes. CMS léger avec Firebase.",
      technologies: ["Next.js", "Firebase", "Accessibilité"],
      slug: "freelance"
    }
  ];

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Expériences professionnelles</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              period={experience.period}
              location={experience.location}
              position={experience.position}
              description={experience.description}
              technologies={experience.technologies}
              slug={experience.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
