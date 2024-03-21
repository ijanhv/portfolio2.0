import React from "react";
import { HeroSection } from "./_components/hero-section";
import Available from "../../components/common/available";
import { Projects } from "./_components/projects";
import { About } from "./_components/about";
import { Notes } from "./_components/notes";
import { Hello } from "@/components/common/hello";

export default function Home() {
  return (
    <>
      <Available />
      <HeroSection />
      <Projects />
      <About />
      <Notes />
      <Hello />
    </>
  );
}
