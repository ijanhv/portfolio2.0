import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import React from "react";
import { TextAnimation } from "./text";
export const HeroSection = () => {
  return (
    <Container>
      <Lines>
        <div className="flex items-center justify-center h-full md:h-screen py-32 md:py-5 ">
          <div className="text-foreground/45 text-4xl md:text-7xl lg:text-9xl text-left ">
            a developer focusing on crisp and catchy
            <br />
            <TextAnimation />
          </div>
        </div>
      </Lines>
    </Container>
  );
};
