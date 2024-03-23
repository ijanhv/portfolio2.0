import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Button = ({ name, href }: { name: string; href: string }) => {
  return (
    <Link
      href={href}
      className="border group relative w-full justify-center border-foreground/60 text-foreground/60 px-4 py-2 text-base font-mono flex items-center gap-3
      group-hover:text-black 
      "
    >
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 ease-in-out bg-foreground group-hover:h-full" />
      <span className="relative w-full text-center justify-center transition-colors duration-200 ease-in-out group-hover:text-black flex items-center gap-3">
        contact me
        <ArrowRight size={20} className="group-hover:-rotate-45   " />
      </span>
    </Link>
  );
};
