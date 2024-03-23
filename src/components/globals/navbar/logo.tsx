import Link from "next/link";
import React from "react";
export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-foreground/40
      hover:text-foreground/100
      transition-all
      duration-300
      font-mono
      "
    >
      <h1>Janhavi</h1>
    </Link>
  );
};
