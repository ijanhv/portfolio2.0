import React from "react";
import { Container } from "./container";
import { Lines } from "./lines";
import { Button } from "./button";
import { Title } from "./title";

export const Hello = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full md:h-screen flex flex-col lg:flex-row  pt-10 ">
          <div className="w-full flex flex-col gap-4 items-center justify-center">
            <div className="w-full">


            <Title
            title="say hello"
            />
                        </div>

            <div className="flex items-start justify-start w-full flex-col gap-10">
              <p className="font-manrope text-xl sm:text-2xl md:text-4xl lg:text-6xl leading-loose text-foreground/60  mt-10 w-4/5 text-left ">
                i{"'"}m open for freelance projects, feel free to email me to
                see how can we collaborate
              </p>
            </div>

            <div className="flex items-center justify-senter w-[310px] flex-col gap-10 my-10">
              <Button name="contact me" href="/contact" />
            </div>
          </div>
        </div>
      </Lines>
    </Container>
  );
};
