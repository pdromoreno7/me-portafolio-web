import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
