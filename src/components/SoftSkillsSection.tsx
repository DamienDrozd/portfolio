export default function SoftSkillsSection() {
  const softSkills = [
    {
      title: "Curiosité",
      description: "Veille technologique constante"
    },
    {
      title: "Esprit d'équipe",
      description: "Collaboration et code review"
    },
    {
      title: "Persévérant",
      description: "Résolution de problèmes complexes"
    },
    {
      title: "Autonomie",
      description: "Gestion de projet indépendante"
    },
    {
      title: "Autodidacte",
      description: "Apprentissage continu"
    },
    {
      title: "Langues",
      description: "Français, Anglais, Langue des Signes"
    }
  ];

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Soft Skills</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <h4 className="text-[#FFC300] font-bold mb-2">{skill.title}</h4>
                <p className="text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
