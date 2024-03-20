import React from "react";

export const Lines = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 md:flex w-full justify-between my-10 hidden ">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-px h-full bg-gradient-to-b from-black via-neutral-800 to-black

          "
          ></div>
        ))}
      </div>

      {/* small devices */}

      <div className="absolute inset-0 flex w-full justify-between my-5 md:hidden">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-px h-full bg-gradient-to-b from-black via-neutral-800 to-black
    
            "
          ></div>
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
