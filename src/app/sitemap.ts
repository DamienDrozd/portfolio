import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://damien-drozd.fr'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    // Projets
    {
      url: `${baseUrl}/projects/genpulse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/peel`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/retrogamecollec`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Expériences
    // {
    //   url: `${baseUrl}/experiences/reconomia`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/experiences/lawebox`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.7,
    // },
    // {
    //   url: `${baseUrl}/experiences/freelance`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.6,
    // },
  ]
}