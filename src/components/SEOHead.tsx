'use client';

import Head from 'next/head';

interface SEOHeadProps {
  structuredData?: object;
  additionalMeta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

export default function SEOHead({ structuredData, additionalMeta = [] }: SEOHeadProps) {
  return (
    <Head>
      {/* Meta tags géographiques */}
      <meta name="geo.region" content="FR-34" />
      <meta name="geo.placename" content="Montpellier" />
      <meta name="geo.position" content="43.6109;3.8763" />
      <meta name="ICBM" content="43.6109, 3.8763" />

      {/* Meta tags pour développeur web */}
      <meta name="category" content="Développement Web" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Meta tags OpenGraph supplémentaires */}
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:see_also" content="https://linkedin.com/in/damiendrozd" />
      <meta property="og:see_also" content="https://github.com/DamienDrozd" />
      
      {/* Meta tags business */}
      <meta name="business:contact_data:street_address" content="Montpellier" />
      <meta name="business:contact_data:locality" content="Montpellier" />
      <meta name="business:contact_data:region" content="Occitanie" />
      <meta name="business:contact_data:postal_code" content="34000" />
      <meta name="business:contact_data:country_name" content="France" />
      
      {/* Meta tags additionnels */}
      {additionalMeta.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      
      {/* Données structurées */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Prefetch des domaines externes */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//github.com" />
      
      {/* Préconnexion aux services critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}