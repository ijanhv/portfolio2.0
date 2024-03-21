import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";
import React from "react";
export const Hello = () => {
  return (
    <Container>
      <Lines>
        <div className="h-full  flex flex-col md:flex-row gap-36 items-start my-20  ">
          <div className="h-[600px] w-full md:h-[700px] md:w-[1700px] noise relative">
            <Image
              src="	https://framerusercontent.com/images/INr3fWPwNzKVuKbZgjxl5xvZaSA.jpg?scale-down-to=2048"
              alt="hero"
              fill
              className="object-cover w-full h-full  opacity-90 grayscale"
              unoptimized
            />
          </div>

          <div className="w-full flex flex-col gap-52 h-full items-start">
            <div className="flex items-center gap-2 w-full">
              <p className="font-mono text-foreground/60  flex-shrink-0">
                .hello
              </p>
              <hr className="w-full bg-foreground/60 h-0.5" />
            </div>

            <p className="text-foreground/50 text-3xl font-light  ">
              my craft is building experiences that bring value to people and
              celebrate function over form. let{"'"}s hide the ego and give some
              freedom to creativity and make the first small step changing the
              world to a better place
            </p>
          </div>
          <div className="h-10 w-10 rounded-full border border-foreground/40 absolute -right-5 bottom-36 items-center justify-center group cursor-pointer">
            <div className="h-[1px] w-20 top-1/2 -right-1/2 absolute bg-foreground/40 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
          </div>
        </div>
      </Lines>
    </Container>
  );
};
