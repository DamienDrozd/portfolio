'use client';

import ProfileSection from "../components/ProfileSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperiencesSection from "../components/ExperiencesSection";
import SkillsSection from "../components/SkillsSection";
import SoftSkillsSection from "../components/SoftSkillsSection";
import CVSection from "../components/CVSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      {/* Profile Section */}
      <ProfileSection />

      {/* Separator */}
      <hr className="border-t-4 border-white mx-20 mb-12" />

      {/* Resume Section */}
      <ResumeSection />

      {/* Projets personnels */}
      <ProjectsSection />

      {/* Expériences professionnelles */}
      <ExperiencesSection />

      {/* Competences Section */}
      <SkillsSection />

      {/* Soft Skills Section */}
      <SoftSkillsSection />

      {/* CV Section */}
      <CVSection />
    </div>
  );
}
