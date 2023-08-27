import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("flex flex-col mx-auto  w-full max-w-7xl px-5", className)}
    >
      {children}
    </div>
  );
}
