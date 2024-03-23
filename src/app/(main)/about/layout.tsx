import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Janhavi Patil | About ",
  description: "Here's a little about me.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
