import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import React from "react";

export const HeroSection = () => {
  const about = [
    {
      title: "experience",
      desc: "3 years",
    },
    {
      title: "location",
      desc: "Mumbai, India",
    },
    {
      title: "freelance",
      desc: "Available",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col  gap-44 pt-10 ">
          <div className="flex justify-between  gap-3 w-full">
            <h3 className="text-5xl md:text-6xl lg:text-9xl text-foreground/40">
              about
            </h3>

            <div className="h-10 w-10 rounded-full border border-foreground/40 absolute -right-5 top-24 lg:top-28 items-center justify-center group cursor-pointer">
              <div className="h-[1px] w-20 top-1/2 -right-1/2 absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
            </div>
          </div>

          <div className="w-full items-center justify-center flex">
            <p className="text-foreground/50 text-left text-3xl md:text-4xl lg:text-6xl mx-auto max-w-[58rem] leading-[1.4]">
              i{"'"}m a designer, maker, nomad, and coffee lover obsessed with
              the world of digital
            </p>
          </div>

          <div className="flex items-start gap-10 lg:gap-40 justify-between w-full lg:flex-row flex-col mt-10">
            {about.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <p className="text-foreground/50 font-mono">.{item.title}</p>
                  <hr className="w-full bg-foreground/50 h-[1px]" />
                </div>
                <p className="text-foreground/70 text-xl lg:text-3xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Lines>
    </Container>
  );
};
