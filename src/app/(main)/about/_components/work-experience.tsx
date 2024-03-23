import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";

export const WorkExperience = () => {
  const workExperience = [
    {
      duration: "2021 - Present",
      position: "Software Engineer",
      company: "Google",
      desc: "Spearhead the design direction and strategy for a range of cutting-edge products.",
    },
    {
      duration: "2019 - 2021",
      position: "Frontend Developer",
      company: "Facebook",
      desc: "Lead a team of designers and developers to create a range of digital products.",
    },
    {
      duration: "2017 - 2019",
      position: "UI/UX Designer",
      company: "Apple",
      desc: "Worked closely with the product team to design and develop a range of digital products.",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full my-10 flex flex-col gap-5 w-full md:h-screen ">
          <div className="flex items-center gap-3">
            <p className="font-mono text-foreground/60 flex-shrink-0">
              .work experience
            </p>
            <hr className="w-full bg-foreground/60 h-0.5" />
          </div>

          <div className="flex flex-col gap-24 w-full lg:pt-10">
            {workExperience.map((work, i) => (
              <SingWorkExperience
                key={i}
                duration={work.duration}
                position={work.position}
                company={work.company}
                desc={work.desc}
              />
            ))}
          </div>
        </div>
      </Lines>
    </Container>
  );
};

const SingWorkExperience = ({
  duration,
  position,
  company,
  desc,
}: {
  duration: string;
  position: string;
  company: string;
  desc: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between md:flex-row flex-col gap-x-32 gap-y-3 w-full ">
        <p className="text-foreground/70 text-3xl w-full">{duration}</p>

        <div className="flex flex-col gap-2 w-full">
          <p className="text-foreground text-3xl">{company}</p>

          <p className="text-foreground/50 font-mono">{position}</p>
        </div>

        <p className="text-foreground/70 text-lg text-left w-full md:w-[70rem]">
          {desc}
        </p>
      </div>

      <div className="flex items-center justify-between relative ">
        <hr className="w-full bg-[#252525] h-[1px]  absolute top-0 " />
        <div className="h-10 w-10 rounded-full border border-foreground/30 absolute -right-5 group cursor-pointer">
          <div className="h-[1px] w-20 items-center mx-auto bg-[#252525] absolute top-[1.20rem] -right-[1rem] line transform transition duration-500 ease-in-out group-hover:rotate-180" />
        </div>
      </div>
    </>
  );
};
