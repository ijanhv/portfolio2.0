import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-7xl px-10 lg:px-5 mx-auto">{children}</div>;
};
