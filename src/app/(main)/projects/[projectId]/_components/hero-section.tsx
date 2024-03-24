"use client";
import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = ({
  id,
  image,
  title,
  desc,
}: {
  id: number;
  image: string;
  title: string;
  desc: string;
}) => {
  return (
    <Container>
      <Lines>
        <motion.div
          className="h-full md:h-screen relative flex flex-col lg:flex-row gap-10 lg:gap-28 items-center justify-between w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex-1 relative z-10 w-full mt-28"
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="overflow-hidden h-[200px] lg:h-[450px] w-full lg:w-[850px]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover w-full h-full"
                unoptimized
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl  font-bold text-foreground">
              {title}
            </h1>
            <motion.p
              className="text-lg mt-4 text-foreground/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {desc}
            </motion.p>
          </motion.div>
        </motion.div>
      </Lines>
    </Container>
  );
};
