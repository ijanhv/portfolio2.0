"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { links } from "@/utils/data";
import Link from "next/link";

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader></SheetHeader>
        <div className=" gap-4 py-4">
          <div className="flex-col flex items-center gap-7  ">
            {links.map((link) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={link.name}
                href={link.href}
                className="text-foreground/40
              hover:text-foreground/100
              transition-all
              duration-300 text-2xl
              "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
