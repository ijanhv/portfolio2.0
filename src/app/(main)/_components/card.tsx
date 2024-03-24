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
  type,
}: {
  i: number;
  title: string;
  type: string;
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
  // color: "#2F3437",
  // text: "#B3FFCB",
  return (
    <div
      ref={container}
      className={`w-full  flex items-center justify-center sticky top-64 text-[#B3FFCB]`}
    >
      <motion.div
        style={{
          backgroundColor: "#2F3437",
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative shadow-lg  w-full h-full transform-origin-top p-5 lg:p-10 rounded-t-xl "
      >
        <div
          className={`w-full flex items-center justify-between font-mono text-[${text}]`}
        >
          <p className={``}>2023</p>
          <p>{type}</p>
        </div>
        <hr className={`bg-[#B3FFCB]/30 my-3 h-[2px]`} />
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
