import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import React from "react";

export const HeroSection = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col  gap-44 pt-10 ">
          <div className="flex justify-between  gap-3 w-full">
            <h3 className="text-5xl md:text-6xl lg:text-9xl text-foreground/40">
              say hello
            </h3>

            <div className="h-10 w-10 rounded-full border border-foreground/40 absolute -right-5 top-24 lg:top-28 items-center justify-center group cursor-pointer">
              <div className="h-[1px] w-20 top-1/2 -right-1/2 absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
            </div>
          </div>

          <div className="w-full items-center justify-center flex">
            <p className="text-foreground/50 text-left text-3xl md:text-4xl lg:text-6xl mx-auto max-w-[58rem] leading-[1.4] mb-10">
              let{"'"}s collaborate. feel free to drop me a line about your
              project or follow me on social networks
            </p>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
