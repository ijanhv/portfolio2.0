"use client";
import React from "react";

import { Container } from "@/components/common/container";
import { useScroll, motion } from "framer-motion";

export const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <Container>
      <div className="relative">
        <div className="h-0.5 bg-zinc-800 w-full absolute" />
        <motion.div
          className=" h-0.5 bg-zinc-700 w-full origin-left absolute
    "
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </Container>
  );
};
