import React from "react";
import { HeroSection } from "./_components/hero-section";

import { WorkExperience } from "./_components/work-experience";
import { TechStack } from "./_components/tech-stack";
import { Hello } from "@/components/common/hello";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <Hello />
      <WorkExperience />
      <TechStack />
      <Hello />
    </>
  );
}
