import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import { Title } from "@/components/common/title";
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
      icon: "/logos/1.png",
      name: "Nextjs",
      for: "web development",
    },
    {
      icon: "/logos/2.png",
      name: "React.js",
      for: "web development",
    },
    {
      icon: "/logos/3.png",
      name: "Tailwindcss",
      for: "styling",
    },
    {
      icon: "	/logos/4.png",
      name: "Typescript",
      for: "type checking",
    },
    {
      icon: "/logos/5.png",
      name: "Javascript",
      for: "programming",
    },
    {
      icon: "/logos/6.png",
      name: "Prisma",
      for: "orm",
    },
    {
      icon: "/logos/7.png",
      name: "React Query",
      for: "fetching data",
    },
    {
      icon: "/logos/8.png",
      name: "Docker",
      for: "containerization",
    },
    {
      icon: "/logos/9.png",
      name: "MongoDB",
      for: "database",
    },
    {
      icon: "/logos/10.png",
      name: "Postgres",
      for: "database",
    },
    {
      icon: "/logos/11.png",
      name: "Mysql",
      for: "database",
    },
    {
      icon: "/logos/12.png",
      name: "Java",
      for: "programming",
    },
    {
      icon: "/logos/13.png",
      name: "Python",
      for: "programming",
    },
    {
      icon: "/logos/14.png",
      name: "Node.js",
      for: "server",
    },
    {
      icon: "/logos/15.png",
      name: "Nest.js",
      for: "server",
    },
    {
      icon: "/logos/16.png",
      name: "Flutter",
      for: "mobile",
    },
    {
      icon: "/logos/17.png",
      name: "GraphQL",
      for: "api",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full flex flex-col gap-20 mt-32">
          <Title title="tech stack" />
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
      <div className="space-y-3 flex flex-row gap-6 lg:flex-col">
        <div className="noise relative h-[70px] w-[70px]">
          <Image
            src={icon}
            alt={name}
            className="group-hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer grayscale opacity-90 object-cover w-full h-full"
            fill
            unoptimized
          />
        </div>
        <div className="">
          <p className="text-foreground font-manrope text-lg">{name}</p>
          <p className="text-foreground/50 font-light font-mono">{forWhat}</p>
        </div>
      </div>

      <div className="flex items-center justify-between relative ">
        <hr className="w-full bg-[#252525] h-[1px]  " />
        <div className="h-8 w-8 rounded-full border border-foreground/30 absolute group -right-4  cursor-pointer">
          <div className="h-[1px] w-20 items-center mx-auto bg-foreground/20 absolute top-[0.9rem] -right-6 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
        </div>
      </div>
    </div>
  );
};
