import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expériences Professionnelles",
  description: "Découvrez mon parcours professionnel : alternance chez Reconomia (React Native, FastAPI), LaWEbox (Django, Data Science), mission freelance accessibilité. Compétences full stack et mobile.",
  keywords: ["expériences", "parcours professionnel", "alternance", "développeur fullstack", "React Native", "Django", "FastAPI", "data science"],
  openGraph: {
    title: "Mes Expériences Professionnelles | Damien Drozd - Développeur Full Stack",
    description: "Découvrez mon parcours professionnel et mes expériences en développement web et mobile.",
    url: "https://damien-drozd.fr/experiences",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mes Expériences Professionnelles | Damien Drozd",
    description: "Découvrez mon parcours professionnel et mes expériences en développement web et mobile.",
  }
};

export default function ExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}