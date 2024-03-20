import { Container } from "@/components/common/container";
import React from "react";

const Available = () => {
  return (
    <Container>
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
