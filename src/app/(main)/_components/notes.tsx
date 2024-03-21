"use client";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Notes = () => {
  const notes = [
    {
      title: "Starting and growing a career in Web Development",
      date: "April 8, 2023",
      image:
        "https://framerusercontent.com/images/u5jNVG9wj9EcOdKVCMRYRudfPs.jpg?scale-down-to=1024",
    },
    {
      title: "Create a Landing Page that performs great",
      date: "April 8, 2023",
      image:
        "	https://framerusercontent.com/images/eKeTMLWj1quFFSlY3KspMmvHiw.jpg?scale-down-to=1024",
    },
    {
      title: "How can developers make a difference in the world?",
      date: "May 8, 2023",
      image:
        "https://framerusercontent.com/images/XP1TmI8Qxk6itlKJCAerOsT08u4.jpg?scale-down-to=1024",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col lg:flex-row  pt-10 ">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-4 w-full">
              <p className="font-mono text-foreground/60  flex-shrink-0">
                .three latest notes
              </p>
              <hr className="w-full bg-foreground/60 h-0.5" />
            </div>

            {/* <div className="h-full w-full  noise	">
         <Image
                src="https://framerusercontent.com/images/u5jNVG9wj9EcOdKVCMRYRudfPs.jpg?scale-down-to=1024"
                fill
                className="object-cover w-full h-full  opacity-85"
                alt="about"
                unoptimized
              /> 
            </div>  */}

            <div className="flex flex-col gap-4 w-full mt-20 ">
              {notes.map((note, i) => (
                <SingNote
                  key={i}
                  title={note.title}
                  date={note.date}
                  image={note.image}
                />
              ))}
            </div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};

const SingNote = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <Link
      href="/"
      className="flex items-center justify-between gap-4 w-full group text-foreground/60 relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="flex flex-col gap-2 my-8">
        <p className="text-xl lg:text-3xl font-manrope group-hover:text-foreground transistion-all duration-300 ease-in-out">
          {title}
        </p>
        <p className="text-foreground/40 text-sm font-mono">{date}</p>
      </div>

      {show && (
        <motion.div
          initial={{ x: -130, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="h-48 w-[154px] absolute right-[9.7rem] noise hidden lg:block "
        >
          <Image
            src={image}
            fill
            className="object-cover w-full h-full opacity-85 "
            alt="about"
            unoptimized
          />
        </motion.div>
      )}
      <div className="group-hover:text-foreground transistion-all duration-300 ease-in-out ">
        <ArrowRight
          size={40}
          className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};
