import React from "react";
import Container from "@/layout/Container";

export default function Hero() {
  return (
    <Container>
      <div className=" h-screen w-full pt-20 flex items-center text-center">
        <p>
          <span className=" text-6xl font-extralight tracking-tight">
            Pioneers of Optimized
          </span>
          <br /> <span className="text-6xl font-semibold">Web Hosting</span>
        </p>
      </div>
    </Container>
  );
}
