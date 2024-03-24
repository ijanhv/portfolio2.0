import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const ProjectCard = ({
  title,
  desc,
  img,
  href,
  type,
  bgColor,
  index,
}: Readonly<{
  title: string;
  desc: string;
  img: string;
  href: string;
  bgColor: string;
  type: string;
  index: number;
}>) => {
  return (
    <Link
      href={`/projects/${index}`}
      className={`grid grid-cols-1 lg:grid-cols-8 items-start justify-center w-full h-full relative gap-10 lg:gap-2 `}
    >
      <div className="bg-[#2F3437] w-full h-full flex flex-col gap-2 lg:gap-4  lg:col-span-5 rounded-lg p-5">
        <div className="flex justify-between items-center gap-4 text-[#99D9AE]">
          <p className="font-mono">2023</p>
          <p className="font-mono">{type}</p>
        </div>

        <hr className={`bg-[#99D9AE] my-3 h-[1.5px]`} />
        <div className="group w-full flex gap-3 justify-between items-center">
          <h3 className=" font-manrope text-xl lg:text-3xl  text-[#99D9AE] my-4">
            {title}
          </h3>

          <ArrowRight
            size={50}
            className="group-hover:-rotate-45 cursor-pointer transition-all text-[#99D9AE] duration-300 ease-in-out transform
        "
          />
        </div>
        <div className=" relative h-[200px] lg:h-[400px] w-full">
          <Image
            src={img}
            alt={title}
            className=" cursor-pointer  object-cover w-full h-full"
            fill
            unoptimized
          />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-1" />
      <div className="font-mono text-[#99D9AE]/70 w-full  sticky text-sm top-24 lg:col-span-2  ">
        {desc}
      </div>

      <div className="h-7 w-7 rounded-full border border-foreground/40 absolute -right-3 bottom-3  items-center justify-center group cursor-pointer">
        <div className="h-[1px] w-20 top-[0.8rem] -right-[1.8rem] absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
      </div>
    </Link>
  );
};
