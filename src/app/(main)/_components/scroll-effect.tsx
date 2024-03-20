"use client";
import React from "react";
import { useRef } from "react";
import Card from "./card";
import { useScroll } from "framer-motion";
import { projects } from "@/utils/data";

const ScrollEffect = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <main ref={container} className=" sticky top-20">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.02;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            url={project.link}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default ScrollEffect;
