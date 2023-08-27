import React from "react";
import Container from "@/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="w-full flex flex-col  text-foreground">
      <div className="w-full flex flex-col bg-gray-600/20">
        <Container className="py-48 relative">
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
              <p className="text-sm">
                Your Gateway to Scalable, Secure, and Seamless Hosting
                <br />
                <span className="font-medium">From Just $2.99 a Month</span>
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline">See Pricing</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
