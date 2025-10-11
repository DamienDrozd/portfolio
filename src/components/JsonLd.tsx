'use client';

import Head from 'next/head';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Damien Drozd',
    jobTitle: 'Développeur Full Stack',
    description: 'Développeur Full Stack spécialisé en React, Next.js, React Native et Python',
    url: 'https://damien-drozd.fr',
    sameAs: [
      'https://www.linkedin.com/in/damiendrozd/',
      'https://github.com/DamienDrozd'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lille',
      addressCountry: 'FR'
    },
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'Python',
      'FastAPI',
      'Django',
      'TypeScript',
      'JavaScript',
      'Data Science',
      'Machine Learning'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Reconomia'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'École Supérieure'
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}