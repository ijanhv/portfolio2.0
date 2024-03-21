import React from "react";
import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  text,
  color,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  text: string;
  color: string;

  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={`w-full  flex items-center justify-center sticky top-64 text-[${text}]`}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative   w-full h-full transform-origin-top p-5 lg:p-10 rounded-t-xl "
      >
        <div
          className={`w-full flex items-center justify-between font-mono text-[${text}]`}
        >
          <p className={``}>2023</p>
          <p>Personal Project</p>
        </div>
        <hr className={`bg-[${text}] my-3`} />
        <div className="group w-full flex gap-3 justify-between items-center">
          <h3 className=" font-manrope text-xl lg:text-3xl  my-4">{title}</h3>

          <ArrowRight
            size={50}
            className="group-hover:-rotate-45 cursor-pointer transition-all duration-300 ease-in-out transform
        "
          />
        </div>
        {/* <p className="text-foreground/40 font-mono text-sm font-light">
          {description}
        </p> */}

        <div className="relative h-[400px] lg:h-[500px] w-full">
          <motion.div style={{ scale: imageScale }} className="">
            <Image
              fill
              src={src}
              alt="image"
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
