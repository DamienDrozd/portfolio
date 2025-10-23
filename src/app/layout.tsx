import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Damien Drozd - Développeur Web Freelance | React, Next.js, Python",
    template: "%s | Damien Drozd - Développeur Web Freelance"
  },
  description: "Développeur web freelance spécialisé en React, Next.js, React Native et Python. Création d'applications web modernes et sites vitrine optimisés SEO. Basé à Montpellier, disponible en remote. Portfolio et projets de Damien Drozd.",
  keywords: [
    // Mots-clés principaux pour développeur web
    "développeur web", "développeur web freelance", "développeur web Montpellier", 
    "développeur React", "développeur Next.js", "développeur JavaScript",
    "développeur Python", "développeur full stack",
    // Spécialités techniques
    "création site web", "application web", "développement web moderne",
    "React Native", "FastAPI", "Django", "TypeScript",
    // Services freelance
    "freelance développement web", "consultant développeur", "expert React",
    "développement site vitrine", "application mobile", "SEO technique",
    // Localisation
    "développeur web Montpellier", "développeur freelance France", "remote développeur",
    // Nom et marque
    "Damien Drozd", "portfolio développeur", "projets web"
  ],
  authors: [{ name: "Damien Drozd" }],
  creator: "Damien Drozd",
  publisher: "Damien Drozd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://damien-drozd.fr",
    title: "Damien Drozd - Développeur Web Freelance | React, Next.js, Python",
    description: "Développeur web freelance spécialisé en React, Next.js, React Native et Python. Création d'applications web modernes et sites vitrine optimisés SEO.",
    siteName: "Damien Drozd - Développeur Web",
    images: [
      {
        url: "/media/photo-pro-carre.jpg",
        width: 400,
        height: 400,
        alt: "Damien Drozd - Développeur Web Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Damien Drozd - Développeur Web Freelance",
    description: "Développeur web freelance spécialisé en React, Next.js, React Native et Python. Création d'applications web modernes.",
    images: ["/media/photo-pro-carre.jpg"],
  },
  metadataBase: new URL("https://damien-drozd.fr"),
  alternates: {
    canonical: "https://damien-drozd.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFC300" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Damien Drozd" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className}`}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
