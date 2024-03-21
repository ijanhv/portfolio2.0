import React from "react";
import { Container } from "./container";
import { Lines } from "./lines";
import { Button } from "./button";

export const Hello = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col lg:flex-row  pt-10 ">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="flex items-center gap-4 w-full">
              <p className="font-mono text-foreground/60  flex-shrink-0">
                .say hello
              </p>
              <hr className="w-full bg-foreground/30 h-0.5" />
            </div>
            <div className="flex items-start justify-start w-full flex-col gap-10">
              <p className="font-manrope text-xl sm:text-2xl md:text-4xl lg:text-6xl leading-loose text-foreground/60  mt-10 w-4/5 text-left ">
                i{"'"}m open for freelance projects, feel free to email me to
                see how can we collaborate
              </p>
            </div>

            <div className="flex items-center justify-senter w-[310px] flex-col gap-10 my-10">
              <Button name="contact me" href="/" />
            </div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
