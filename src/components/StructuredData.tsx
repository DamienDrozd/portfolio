export default function StructuredData() {
  // Données principales de la personne
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Damien Drozd",
    "jobTitle": "Développeur Web Freelance",
    "description": "Développeur web freelance spécialisé en React, Next.js, React Native et Python. Expert en création d'applications web modernes et optimisation SEO.",
    "url": "https://damien-drozd.fr",
    "image": "https://damien-drozd.fr/media/photo-pro-carre.jpg",
    "sameAs": [
      "https://linkedin.com/in/damien-drozd",
      "https://github.com/DamienDrozd"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montpellier",
      "addressCountry": "FR"
    },
    "knowsAbout": [
      "Développement Web",
      "React",
      "Next.js", 
      "React Native",
      "JavaScript",
      "TypeScript",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "Développement Frontend",
      "Développement Backend",
      "Applications Web",
      "Applications Mobile",
      "Optimisation SEO",
      "Architecture Cloud",
      "DevOps"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Paris Ynov Campus",
      "description": "Mastère Informatique"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeur Web Freelance",
      "occupationLocation": {
        "@type": "City",
        "name": "Montpellier, France"
      },
      "skills": [
        "Développement Web",
        "React",
        "Next.js",
        "Python",
        "JavaScript",
        "TypeScript",
        "Développement Mobile",
        "Architecture Cloud",
        "SEO Technique"
      ]
    }
  };

  // Service professionnel freelance
  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Damien Drozd - Services de Développement Web",
    "description": "Services de développement web freelance : création d'applications React, sites web Next.js, applications mobiles React Native et APIs Python.",
    "provider": {
      "@type": "Person",
      "name": "Damien Drozd"
    },
    "areaServed": ["France", "Europe"],
    "availableLanguage": ["French", "English"],
    "serviceType": [
      "Développement Web",
      "Développement d'Applications",
      "Conseil Technique",
      "Optimisation SEO"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Développement Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Développement d'Applications React",
            "description": "Création d'applications web modernes avec React et Next.js"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Développement d'Applications Mobile",
            "description": "Applications mobiles cross-platform avec React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "APIs et Backend",
            "description": "Développement d'APIs REST avec Python FastAPI et Django"
          }
        }
      ]
    }
  };

  // Portfolio/Site Web
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Damien Drozd - Développeur Web Freelance",
    "description": "Portfolio professionnel de Damien Drozd, développeur web freelance spécialisé en React, Next.js et Python. Découvrez mes projets et services.",
    "url": "https://damien-drozd.fr",
    "author": {
      "@type": "Person",
      "name": "Damien Drozd"
    },
    "inLanguage": "fr-FR",
    "about": {
      "@type": "Thing",
      "name": "Développement Web Freelance",
      "description": "Services de développement web, applications React, Next.js et mobile React Native"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://damien-drozd.fr/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Organisation freelance
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Damien Drozd - Développeur Web Freelance",
    "description": "Services de développement web freelance à Montpellier. Spécialiste React, Next.js, Python. Création d'applications web et mobiles sur mesure.",
    "founder": {
      "@type": "Person",
      "name": "Damien Drozd"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montpellier",
      "addressCountry": "FR"
    },
    "areaServed": ["Montpellier", "Occitanie", "France", "Europe"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 43.6109,
        "longitude": 3.8763
      }
    },
    "knowsAbout": [
      "Développement Web",
      "React",
      "Next.js",
      "Python",
      "JavaScript",
      "Applications Web"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}