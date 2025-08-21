import Link from "next/link";

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  technologies: string[];
  features: string;
  slug?: string;
}

export default function ProjectCard({ title, period, description, technologies, features, slug }: ProjectCardProps) {
  const CardContent = () => (
    <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-left hover:border-[#FFD700] transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[#FFC300] font-bold text-lg">{title}</h3>
        <span className="text-[#FFC300] text-sm">{period}</span>
      </div>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-[#FFC300] text-[#000814] px-2 py-1 rounded text-xs font-semibold">
            {tech}
          </span>
        ))}
      </div>
      <div className="text-[#FFC300] text-sm">
        <span className="font-semibold">Fonctionnalités :</span> {features}
      </div>
      {slug && (
        <div className="mt-4 text-center">
          <span className="text-[#FFC300] text-sm font-semibold hover:text-[#FFD700] transition-colors">
            Voir plus →
          </span>
        </div>
      )}
    </div>
  );

  if (slug) {
    return (
      <Link href={`/projects/${slug}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
