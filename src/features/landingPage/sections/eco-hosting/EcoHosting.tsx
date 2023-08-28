import React from "react";
// Layout
import Container from "@/layout/Container";
// Components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Icons
import { Icon } from "@iconify/react";

export default function EcoHosting() {
  return (
    <section id="eco-hosting" className="w-full bg-emerald-100">
      <Container className="py-10 grid gap-8">
        <h2 className="text-3xl font-bold text-center tracking-tight">
          Eco-friendly hosting
        </h2>
        <Card className="flex p-5 max-w-xl w-full mx-auto gap-5">
          <Icon
            icon="fluent:earth-leaf-32-regular"
            className="w-20 h-20 text-emerald-700"
          />
          <div className="grid gap-1">
            <h6 className="text-medium font-medium text-emerald-700 ">
              Sustainably Fast, Ethically Priced
            </h6>
            <p className="text-sm">
              Our servers are powered by renewable energy, ensuring your
              website's carbon footprint is as light as possible.
            </p>
            <h6 className="mt-2 text-medium font-medium text-emerald-700">
              Transparently Green
            </h6>
            <p className="text-sm">
              We're committed to sustainability and have the eco-certifications
              to prove it.
            </p>
            <h6 className="mt-2 text-medium font-medium text-emerald-700">
              Join the Green Side
            </h6>
            <p className="text-sm">
              Make your website as eco-friendly as our data centers.
            </p>
            <div className="flex mt-4">
              <Button className="ml-auto bg-emerald-700 hover:bg-emerald-700/90">
                Go Green With Us
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
