import React from "react";
import { cn } from "@/lib/utils";

import Header from "./Header";

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className }: BaseLayoutProps) {
  return (
    <>
      <Header />
      <main
        className={cn(
          "flex min-h-screen flex-col items-center pt-20 w-full",
          className
        )}
      >
        {children}
      </main>
    </>
  );
}
