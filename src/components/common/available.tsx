import { Container } from "@/components/common/container";
import React from "react";
import { Spotlight } from "../ui/spotlight";

const Available = () => {
  return (
    <Container>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full flex flex-col md:flex-row justify-between lg:items-center gap-3  my-4 font-mono text-foreground/45">
        <p className=" text-sm font-extralight">Hey, I{"'"}m Janhavi</p>

        <div className="flex gap-4 items-center">
          <div className="h-3 w-3 rounded-full bg-green-700 animate-pulse font-extralight" />
          <p className="text-sm ">available for new projects</p>
        </div>
      </div>
    </Container>
  );
};

export default Available;
