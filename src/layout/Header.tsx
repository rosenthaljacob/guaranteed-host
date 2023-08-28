import React from "react";
// Hooks
import { useScrollPosition } from "@/hooks/useScrollPosition";
// Utils
import { cn } from "@/lib/utils";

export default function Header() {
  const scrollPosition = useScrollPosition();

  const isOffset = scrollPosition > 50;

  return (
    <header
      className={cn(
        "h-20 fixed w-full top-0 flex items-center px-5 z-50",
        isOffset && "bg-background/50 backdrop-blur-lg shadow-md"
      )}
      style={{
        transition: "all 0.4s ease-in-out",
      }}
    >
      <div className="max-w-7xl px-5 w-full mx-auto font-extrabold text-xl">
        <p className="font-bold text-2xl tracking-wide">GuaranteedHost</p>
      </div>
    </header>
  );
}
