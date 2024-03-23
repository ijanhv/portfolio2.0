import React from "react";
import { HeroSection } from "./_components/hero-section";
import { Hello } from "@/components/common/hello";
import { ProjectsSection } from "./_components/projects-section";

export default function ProjectsPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <Hello />
    </>
  );
}
