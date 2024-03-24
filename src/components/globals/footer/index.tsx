import React from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { Logo } from "../navbar/logo";

export const Footer = () => {
  const links = [
    {
      name: "projects",
      href: "/projects",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "notes",
      href: "/",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];
  return (
    <Container>
      <div className="w-full flex justify-between gap-10 h-16 pb-10">
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
      </div>
    </Container>
  );
};
