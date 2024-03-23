import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export const Socials = () => {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/ijanhv",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janhavi-patil-2847a1212/",
      icon: CiLinkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/patil_janhavi7",
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/patil_janhavi7",
      icon: FaInstagram,
    },
  ];
  return (
    <div className="w-full flex flex-col gap-10 ">
      {socials.map((social, i) => (
        <div
          key={i}
          className="flex items-center gap-2 w-full justify-between  relative group"
        >
          <div
            className="border border-foreground/50 
            relative p-5
          "
          >
            {
              <social.icon
                className="text-4xl 
                group-hover:text-black z-50 cursor-pointer
            "
              />
            }
            <span
              className="absolute bottom-0 left-0 w-full h-0 -z-10 transition-all duration-500 ease-in-out bg-foreground 
            
            group-hover:h-full
        
            "
            />
          </div>

          <div className="mx-3">
            <p className="text-foreground/60 text-base">{social.name}</p>{" "}
          </div>

          <div className="w-full" />
          <div className="h-7 w-7 rounded-full border border-foreground/30 absolute right-0 lg:-right-4 items-center justify-center group cursor-pointer">
            <div className="h-[1px] w-20 top-1/2 -right-[1.5rem] absolute bg-foreground/30 line transform transition duration-500 ease-in-out group-hover:rotate-180" />
          </div>
        </div>
      ))}
    </div>
  );
};
