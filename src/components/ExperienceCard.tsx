import Link from "next/link";

interface ExperienceCardProps {
  company: string;
  period: string;
  location: string;
  position: string;
  description: string;
  technologies: string[];
  slug?: string;
}

export default function ExperienceCard({ company, period, location, position, description, technologies, slug }: ExperienceCardProps) {
  const CardContent = () => (
    <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-left hover:border-[#FFD700] transition-colors">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-[#FFC300] font-bold text-lg">{company}</h3>
        <span className="text-[#FFC300] text-sm">{period}</span>
      </div>
      <p className="text-gray-300 text-sm mb-2">{location}</p>
      <p className="text-white font-semibold mb-3">{position}</p>
      <p className="text-gray-300 text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-[#FFC300] text-[#000814] px-2 py-1 rounded text-xs font-semibold">
            {tech}
          </span>
        ))}
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
      <Link href={`/experiences/${slug}`}>
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}
