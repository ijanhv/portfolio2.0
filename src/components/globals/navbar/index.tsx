import React from "react";
import Link from "next/link";

import { Scroll } from "./scroll";
import { Logo } from "./logo";
import { links } from "@/utils/data";
import { Sidebar } from "./sidebar";

export const Navbar = () => {
  return (
    // <Container>
    <div className=" h-20 sticky top-0 bg-black/70 z-30 backdrop-blur-md ">
      <div className="flex items-center justify-between px-10 max-w-7xl lg:px-5 mx-auto h-full">
        <Logo />

        <div className="md:flex items-center gap-7 hidden ">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/40
              hover:text-foreground/100
              transition-all
              duration-300
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Sidebar />
        </div>
      </div>

      <Scroll />
    </div>
  );
};
