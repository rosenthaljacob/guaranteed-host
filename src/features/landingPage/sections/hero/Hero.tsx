import React from "react";
import Container from "@/layout/Container";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col  text-foreground">
      <div className="w-full flex flex-col bg-gray-400/30">
        <Container className=" py-40 relative">
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/30 h-1/2 w-1/2 blur-xl opacity-50"></div>

          <div className=" w-full pt-20 flex items-center text-center mx-auto relative">
            <div className="grid gap-10 mx-auto">
              <div className="grid gap-1">
                <p className=" text-4xl sm:text-6xl font-extralight tracking-tight">
                  Pioneers of Optimized
                </p>
                <p className="text-4xl sm:text-6xl font-semibold">
                  Web Hosting
                </p>
              </div>
              <p className="text-sm max-w-xs sm:max-w-none mx-auto">
                Your Gateway to Sustainable, Scalable, and Seamless Hosting
                <br />
                From Just $2.99 a Month!
              </p>
              <div className="flex justify-center gap-5">
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="shadow-md"
                >
                  <Link href="/#plans">See Pricing</Link>
                </Button>
                <Button size="lg" className="shadow-md">
                  Get Started
                  <div className="w-4 h-4 ml-2 flex items-center">
                    <Icon icon="fa6-solid:arrow-right" className="h-4 w-4" />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
