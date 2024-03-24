import React from "react";
import { Container } from "@/components/common/container";
import { Lines } from "@/components/common/lines";
import { Title } from "@/components/common/title";

export const WorkExperience = () => {
  const workExperience = [
    {
      duration: "Nov 2022 - Feb 2023",
      position: "Web Developer",
      company: "Webskyne",
      desc: "Developed a range of web applications for clients using Nextjs and Nestjs.",
    },

    {
      duration: "Aug 2023 - Present",
      position: "Full Stack Developer",
      company: "Cosedege",
      desc: "Contributing to various client projects using Next.js, TypeScript, MongoDB, Prisma, and Tailwind CSS. In addition to my technical responsibilities, I actively participate in meetings to ensure seamless collaboration.",
    },

    {
      duration: "Dec 2021 - Aug 2022",
      position: "Jr. Public Relations Officer",
      company: "CSI VESIT",
      desc: "Created promotional content such as social media posts and flyers to generate interest and increase attendance. Involved in promoting and creating awareness about the various events and workshops organized by CSI-VESIT",
    },
    {
      duration: "Jul 2023 - Present",
      position: "Student Design Head",
      company: "VESITConnect",
      desc: "Collaborated with other team members to curate engaging content and lead the design team to ensure visually appealing and professional publications.",
    },
    {
      duration: "Jan 2022 - March 2023",
      position: "Freelance Graphic Designer",
      company: "VESCOP",
      desc: "Designed and laid out a 120-page college annual magazine and a 50-page brochure featuring articles, interviews, and photographs on InDesign.",
    },
  ];
  return (
    <Container>
      <Lines>
        <div className="h-full my-10 flex flex-col gap-5 w-full mt-24 ">
          <Title title="work experience" />

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
        <hr className="w-full bg-[#252525] h-[1px]  absolute top-0" />
        <div className="h-7 w-7 rounded-full border border-foreground/30 absolute -right-3 group cursor-pointer">
          <div className="h-[1px] w-20 items-center mx-auto bg-[#252525] absolute top-[0.8rem] -right-[1.4rem] line transform transition duration-500 ease-in-out group-hover:rotate-180" />
        </div>
      </div>
    </>
  );
};
