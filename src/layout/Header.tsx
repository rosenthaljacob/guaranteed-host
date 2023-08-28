import React from "react";
import Link from "next/link";
// Hooks
import { useScrollPosition } from "@/hooks/useScrollPosition";
// Utils
import { cn } from "@/lib/utils";
// Components
import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollPosition = useScrollPosition();

  const isOffset = scrollPosition > 50;

  return (
    <header
      className={cn(
        "h-20 fixed w-full top-0 flex justify-between items-center px-5 z-50",
        isOffset && "bg-background/50 backdrop-blur-lg shadow-md"
      )}
      style={{
        transition: "all 0.4s ease-in-out",
      }}
    >
      <Link
        href="/"
        className="max-w-7xl px-5 w-full mx-auto font-extrabold text-xl flex gap-1.5 items-center text-cyan-950"
      >
        <img
          src="/logo.svg"
          alt="GaranteedHost"
          className="w-5 h-5 sm:w-8 sm:h-8"
        />
        <p
          className="text-xl sm:text-2xl tracking-wide font-medium"
          style={{
            fontFamily: "Barlow Condensed, monospace",
          }}
        >
          GUARANTEEDHOST
        </p>
      </Link>
      <nav className="flex gap-3 items-center">
        <Button variant="link">Login</Button>
        <Button className="whitespace-nowrap">Sign Up</Button>
      </nav>
    </header>
  );
}
