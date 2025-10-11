import ExperienceCard from "./ExperienceCard";
import { getExperiencesSortedByYear } from "../data/experiences";

export default function ExperiencesSection() {
  const experiences = getExperiencesSortedByYear();

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Expériences professionnelles</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
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
