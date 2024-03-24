"use client";
import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/common/button";

export const About = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col lg:flex-row  mt-32 ">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-4 w-full">
              <span className="font-mono text-foreground/60">.about</span>
              <hr className="w-full bg-foreground/60 h-0.5" />
            </div>
            <p className="font-manrope text-xl lg:text-2xl leading-loose text-foreground/60 pr-2">
              {/* my craft is building experiences that bring value to people and
              celebrate function over form. let{"'"}s hide the ego and give some
              freedom to creativity and make the first small step changing the
              world to a better place */}
              my craft is building user interfaces and experiences that bring
              value to people and celebrate function over form. I believe in
              hiding the ego and giving freedom to creativity to make the first
              small step in changing the world to a better place.
            </p>
            <div className="w-full mt-10">
              <div className="w-1/2 items-start justify-start flex  ">
                <Button name="about me" href="/about" />
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex items-center lg:justify-end">
            <motion.div className="relative h-[350px] lg:h-[500px] w-[465px] my-10 overflow-hidden">
              <Image
                src="/my-pic2.png"
                fill
                className="object-cover w-full h-full object-top scale-110"
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
