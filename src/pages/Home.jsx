import React from "react";
import { AboutSection } from "../components/AboutSection/AboutSection";
import ContactBanner from "../components/ContactBanner/ContactBanner";
// import Footer from '../components/Footer';
import { HeroSection } from "../components/HeroSection/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection/ProjectsSection";
// import { SkillsSection } from '../components/SkillsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      {/* <SkillsSection /> */}
      <ContactBanner />
      {/* <Footer /> */}
    </>
  );
}
