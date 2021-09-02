import React from 'react';
import { AboutSection } from '../components/AboutSection';
import ContactBanner from '../components/ContactBanner';
// import Footer from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
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
