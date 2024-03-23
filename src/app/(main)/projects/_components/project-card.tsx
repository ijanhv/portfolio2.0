import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const ProjectCard = ({
  title,
  desc,
  img,
  href,
  bgColor,
  index,
}: Readonly<{
  title: string;
  desc: string;
  img: string;
  href: string;
  bgColor: string;
  index: number;
}>) => {
  return (
    <Link
      href={`/projects/${index}`}
      className={`flex lg:flex-row flex-col gap-32 items-start justify-center w-full h-full relative  `}
    >
      <div className="bg-[#FF6202] w-full h-full flex flex-col gap-4 rounded-lg p-5">
        <div className="flex justify-between items-center gap-4 text-black">
          <p className="font-mono">2023</p>
          <p className="font-mono">Personal Project</p>
        </div>

        <hr className={`bg-black my-3`} />
        <div className="group w-full flex gap-3 justify-between items-center">
          <h3 className=" font-manrope text-xl lg:text-3xl  my-4">{title}</h3>

          <ArrowRight
            size={50}
            className="group-hover:-rotate-45 cursor-pointer transition-all duration-300 ease-in-out transform
        "
          />
        </div>
        <div className=" relative h-[600px] w-full">
          <Image
            src={img}
            alt={title}
            className=" cursor-pointer  object-cover w-full h-full"
            fill
            unoptimized
          />
        </div>
      </div>
      <div className="font-mono text-[#FF6202] w-full lg:w-[13rem] sticky text-sm top-0 ">
        {desc}
      </div>

      <div className="h-7 w-7 rounded-full border border-foreground/40 absolute -right-3 bottom-3  items-center justify-center group cursor-pointer">
        <div className="h-[1px] w-20 top-[0.8rem] -right-[1.8rem] absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
      </div>
    </Link>
  );
};
