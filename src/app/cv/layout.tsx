import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV - Curriculum Vitae",
  description: "Consultez le CV complet de Damien Drozd, développeur Full Stack. Formations, expériences, compétences techniques en React, Next.js, Python, React Native. Téléchargement PDF disponible.",
  keywords: ["CV", "curriculum vitae", "Damien Drozd", "développeur full stack", "compétences", "formations", "télécharger CV", "PDF"],
  openGraph: {
    title: "CV - Curriculum Vitae | Damien Drozd - Développeur Full Stack",
    description: "Consultez mon CV complet avec toutes mes expériences, formations et compétences techniques.",
    url: "https://damien-drozd.fr/cv",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "CV - Curriculum Vitae | Damien Drozd",
    description: "Consultez mon CV complet avec toutes mes expériences, formations et compétences techniques.",
  }
};

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}