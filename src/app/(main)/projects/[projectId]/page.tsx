import { projects } from "@/utils/data";
import React from "react";
import { HeroSection } from "./_components/hero-section";
import { ProjectDetails } from "./_components/details";
import { Hello } from "@/components/common/hello";
import { ProjectImages } from "./_components/image";
export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = projects[parseInt(params.projectId)];

  return (
    <>
      <HeroSection
        title={project.title}
        desc={project.description}
        image={project.src}
        id={Number(params.projectId)}
      />
      <ProjectDetails techStack={project.techStack} />
      <ProjectImages images={project.images} />

      <Hello />
    </>
  );
}
