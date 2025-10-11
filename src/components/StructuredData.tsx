export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Damien Drozd",
    "jobTitle": "Développeur Full Stack",
    "description": "Développeur web Full Stack spécialisé en JavaScript/TypeScript (Next.js, React/React Native) et Python (FastAPI, Django/Flask). Étudiant en Mastère Informatique à Paris Ynov Campus.",
    "url": "https://damien-drozd.fr",
    "sameAs": [
      "https://linkedin.com/in/damien-drozd",
      "https://github.com/DamienDrozd"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "React Native",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "Express",
      "Fastify",
      "Cloud Architecture",
      "DevOps"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Paris Ynov Campus",
      "description": "Mastère Informatique"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeur Full Stack",
      "occupationLocation": {
        "@type": "City",
        "name": "Paris, France"
      },
      "skills": [
        "Développement Web",
        "Développement Mobile", 
        "Architecture Cloud",
        "DevOps",
        "Gestion de Projet"
      ]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "En alternance - Paris Ynov Campus"
    }
  };

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Portfolio Damien Drozd",
    "description": "Portfolio professionnel présentant les projets et compétences de Damien Drozd, développeur Full Stack",
    "url": "https://damien-drozd.fr",
    "author": {
      "@type": "Person",
      "name": "Damien Drozd"
    },
    "inLanguage": "fr-FR",
    "about": {
      "@type": "Thing",
      "name": "Développement Web Full Stack",
      "description": "Projets et expériences en développement web, mobile et architecture cloud"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
    </>
  );
}