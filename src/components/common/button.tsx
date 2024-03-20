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

// <a href="#_" class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
// <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
// <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
// <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
// <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
// </a>
