"use client";
import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col lg:flex-row  pt-10 ">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-4 w-full">
              <span className="font-mono text-foreground/60">.about</span>
              <hr className="w-full bg-foreground/60 h-0.5" />
            </div>
            <p className="font-manrope text-xl lg:text-2xl leading-loose text-foreground/60 pr-2">
              my craft is building experiences that bring value to people and
              celebrate function over form. let{"'"}s hide the ego and give some
              freedom to creativity and make the first small step changing the
              world to a better place
            </p>
          </div>
          <div className="w-full h-full  flex items-center lg:justify-end">
            <motion.div className="relative h-[350px] lg:h-[500px] w-[465px] my-10">
              <Image
                src="https://media.istockphoto.com/id/608509640/photo/night-portrait.jpg?s=612x612&w=0&k=20&c=m5ofFvM21wu3U9zd4pQTTJT8QhkkqfPBVc2bJ56xjw0="
                fill
                className="object-cover w-full h-full object-top"
                alt="about"
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
