import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";
import React from "react";
export const TechStack = () => {
  const techStack = [
    {
      icon: "https://framerusercontent.com/images/xGMl2JtzWCkY93Eh9uDu5q0mtjI.png",
      name: "Notion",
      for: "productivity",
    },
    {
      icon: "https://framerusercontent.com/images/ZyUAP2z2bGNQ0Z5A48uqBwAZlU.png",
      name: "Swift",
      for: "iOS Development",
    },
    {
      icon: "https://framerusercontent.com/images/ToOUdfjjF90Qk0Bkg1SYk1u8GBw.png",
      name: "Soundcloud",
      for: "music",
    },
    {
      icon: "	https://framerusercontent.com/images/rTlp3ubLXMDBnQMp5f19E16qdic.png",
      name: "PSN",
      for: "gaming",
    },
    {
      icon: "	https://framerusercontent.com/images/I5y9mCZoZQ16JTVNB5kQdN01jg.png",
      name: "Mailchimp",
      for: "email marketing",
    },
    {
      icon: "https://framerusercontent.com/images/ZyUAP2z2bGNQ0Z5A48uqBwAZlU.png",
      name: "Swift",
      for: "iOS Development",
    },
    {
      icon: "https://framerusercontent.com/images/ToOUdfjjF90Qk0Bkg1SYk1u8GBw.png",
      name: "Soundcloud",
      for: "music",
    },
    {
      icon: "https://framerusercontent.com/images/xGMl2JtzWCkY93Eh9uDu5q0mtjI.png",
      name: "Notion",
      for: "productivity",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full flex flex-col gap-20 pt-36 ">
          <div className="flex items-center gap-3">
            <p className="font-mono text-foreground/60 flex-shrink-0">
              .tech stack
            </p>
            <hr className="w-full bg-foreground/30 h-0.5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[9.6rem] w-full h-full">
            {techStack.map((tech, i) => (
              <StackCard
                key={i}
                name={tech.name}
                icon={tech.icon}
                for={tech.for}
              />
            ))}
          </div>
        </div>
      </Lines>
    </Container>
  );
};

const StackCard = ({
  name,
  icon,
  for: forWhat,
}: {
  name: string;
  icon: string;
  for: string;
}) => {
  return (
    <div className="flex items-center gap-4 w-full  justify-between group">
      <div className="space-y-3">
        <div className="noise relative h-[70px] w-[70px]">
          <Image
            src={icon}
            alt={name}
            className="group-hover:grayscale-0 cursor-pointer grayscale opacity-90 object-cover w-full h-full"
            fill
            unoptimized
          />
        </div>
        <div className="">
          <p className="text-foreground font-manrope text-lg">{name}</p>
          <p className="text-foreground/50 font-light font-mono">{forWhat}</p>
        </div>
      </div>

      <div className="flex items-center justify-between relative">
        <hr className="w-full bg-[#252525] h-[1px]  " />
        <div className="h-8 w-8 rounded-full border border-foreground/30 absolute group -right-4  cursor-pointer">
          <div className="h-[1px] w-20 items-center mx-auto bg-foreground/20 absolute top-[0.8rem] -right-6 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
        </div>
      </div>
    </div>
  );
};
