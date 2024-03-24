import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import Image from "next/image";

export const ProjectImages = ({ images }: { images: string[] }) => {
  // const projectImages = [
  //   {
  //     image:
  //       "https://framerusercontent.com/images/EfACArKelgoVc0zJiK0XniB0Arg.jpg",
  //     desc: "Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.",
  //   },

  //   {
  //     image:
  //       "https://framerusercontent.com/images/EfACArKelgoVc0zJiK0XniB0Arg.jpg",
  //     desc: "Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.",
  //   },
  //   {
  //     image:
  //       "https://framerusercontent.com/images/EfACArKelgoVc0zJiK0XniB0Arg.jpg",
  //     desc: "Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.",
  //   },
  //   {
  //     image:
  //       "https://framerusercontent.com/images/EfACArKelgoVc0zJiK0XniB0Arg.jpg",
  //     desc: "Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.",
  //   },
  //   {
  //     image:
  //       "https://framerusercontent.com/images/EfACArKelgoVc0zJiK0XniB0Arg.jpg",
  //     desc: "Entrepreneurs engaging in a lively discussion during a Bizz Buzz networking event.",
  //   },
  // ];

  return (
    <Container>
      <Lines>
        <div className="flex flex-col gap-20 w-full pt-20">
          {images.map((project, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-3">
                <p className="font-mono">00{i + 1}</p>
                <hr className="w-full bg-foreground h-[1px]" />
              </div>
              <div className="relative h-[250px]  lg:h-[600px] w-full">
                <Image
                  src={project}
                  alt="project image"
                  fill
                  className="object-cover w-full h-full border-8 lg:border-[12px] border-gray-600"
                  unoptimized
                />
              </div>
              <p className="text-sm font-mono text-foreground/60 w-full lg:w-72 mt-5">
                {/* {project.desc} */}
                Entrepreneurs engaging in a lively discussion during a Bizz Buzz
                networking event.
              </p>
            </div>
          ))}
        </div>
      </Lines>
    </Container>
  );
};
