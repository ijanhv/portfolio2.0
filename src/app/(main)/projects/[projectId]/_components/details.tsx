"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";

export const ProjectDetails = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full flex flex-col   my-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex lg:flex-row flex-col items-center gap-16 lg:gap-[19rem] justify-between"
          >
            <div className="space-y-3 relative">
              <h3 className="text-2xl font-bold text-foreground">Problem</h3>
              <p className="text-foreground/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quidem explicabo assumenda hic? Inventore ipsam, fuga nisi
                possimus quae laboriosam cum aliquid amet, placeat libero est
                aspernatur molestiae, maxime modi.
              </p>
              <div className="h-7 w-7 rounded-full border border-foreground/30 absolute -right-3  -bottom-20 items-center justify-center group cursor-pointer">
                <div className="h-[1px] w-20 top-[0.8rem] -right-[1.8rem] absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
              </div>
            </div>
            <div className="space-y-3 relative">
              <h3 className="text-2xl font-bold text-foreground">Solution</h3>
              <p className="text-foreground/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                quidem explicabo assumenda hic? Inventore ipsam, fuga nisi
                possimus quae laboriosam cum aliquid amet, placeat libero est
                aspernatur molestiae, maxime modi.
              </p>
              <div className="h-7 w-7 rounded-full border border-foreground/30 absolute -right-3 -bottom-20 items-center justify-center group cursor-pointer">
                <div className="h-[1px] w-20 top-[0.8rem] -right-[1.8rem] absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-col-1 lg:grid-cols-8 gap-10 lg:gap-0  mt-40 h-full relative">
            <div className=" lg:col-span-5 w-full h-full space-y-10">
              <p className="text-lg lg:text-2xl text-foreground/60 leading-10">
                The idea for Snackify was sparked by the founders{"'"} shared
                passion for healthy living and the recognition of the challenges
                individuals face in making nutritious snack choices. They
                understood the importance of snacking in maintaining overall
                well-being and sought to create a service that would
                revolutionize the way people approach snacking. The founders
                envisioned a platform that would empower individuals to snack
                smartly and conveniently, without compromising on taste or their
                unique dietary requirements.
              </p>

              <div className="relative h-[600px] w-full">
                <Image
                  src="https://framerusercontent.com/images/tIJLQaKMWYO3KwzZwjFMsSU0CE.jpg"
                  alt="Snackify"
                  fill
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>

            <div className="lg:col-span-1  " />

            <div className="lg:col-span-2 space-y-3 relative ">
              <div className="top-32 sticky">
                <div className="flex items-center gap-3 ">
                  <p className="font-mono text-foreground/60 flex-shrink-0">
                    .tech stack
                  </p>
                  <hr className="w-full bg-foreground/30 h-0.5" />
                </div>
                <p className="text-foreground/60 leading-loose  ">
                  next.js, tailwindcss, framer-motion, typescript next.js,
                  tailwindcss, framer-motion, typescript next.js, tailwindcss,
                  framer-motion, typescript
                </p>
              </div>
            </div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
