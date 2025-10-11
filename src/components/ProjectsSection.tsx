import ProjectCard from "./ProjectCard";
import { getProjectsSortedByYear } from "../data/projects";

export default function ProjectsSection() {
  const projects = getProjectsSortedByYear();

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Projets personnels</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
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
