import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/globals/navbar";

export const metadata: Metadata = {
  title: "Janhavi Patil",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
