import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import { projects } from "@/utils/data";
import React from "react";
import { ProjectCard } from "./project-card";

export const ProjectsSection = () => {
  return (
    <Container>
      <Lines>
        <div className="flex flex-col gap-20 w-full my-20">
          {projects.map((project, i) => (
            <div key={i}>
              <ProjectCard
                title={project.title}
                desc={project.description}
                img={project.src}
                type={project.type}
                bgColor={project.color}
                href={project.link}
                index={i}
              />
            </div>
          ))}
        </div>
      </Lines>
    </Container>
  );
};
