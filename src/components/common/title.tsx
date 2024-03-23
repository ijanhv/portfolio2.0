import React from "react";
export const Title = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3">
      <p className="font-mono text-foreground/60 flex-shrink-0">.{title}</p>
      <hr className="w-full bg-foreground/30 h-0.5" />
    </div>
  );
};
