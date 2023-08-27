import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("flex flex-col  max-w-7xl mx-auto px-14", className)}>
      {children}
    </div>
  );
}
