import React from "react";
// Layout
import Container from "@/layout/Container";
// Components
import { Card } from "@/components/ui/card";
// Local Components
import TreeItem from "./TreeItem";

export default function Services() {
  return (
    <section id="services" className="w-full">
      <Container className="py-10 grid gap-8 w-full">
        <div className="grid gap-1 text-center w-full">
          <h2 className="text-3xl font-bold tracking-tight">
            Services We Offer
          </h2>
          <p className="text-sm text-gray-500">
            Unleash the Power of Our Cutting-Edge Solutions!
          </p>
        </div>
        <div className="grid md:py-5">
          <div className="mx-auto w-4 h-10 bg-primary relative hidden md:block rounded-t-lg" />
          <TreeItem
            title="Global Connectivity, Local Speeds"
            description="Seamlessly connect to the world with our state-of-the-art global network infrastructure. Experience unparalleled speed and reliability, right at your fingertips!"
            imagePath="/images/services/provider.svg"
          />
          <TreeItem
            right
            title="Your Digital Identity Awaits"
            description={
              <>
                Secure your brand's online presence with our top-level domains.
                Choose from .com, .net, .org, and more! Your dream domain is
                just a click away.{" "}
                <a href="#" className="font-medium text-primary underline">
                  Find Your Perfect Domain!
                </a>
              </>
            }
            imagePath="/images/services/domain.svg"
          />
          <TreeItem
            title="Unbreakable Security, Unbeatable Peace of Mind"
            description="Protect your digital assets with our advanced security features, including SSL certificates, firewalls, and 24/7 monitoring."
            imagePath="/images/services/security.svg"
          />
          <TreeItem
            right
            title="Round-the-Clock Support, Because You Deserve the Best"
            description="Our customer service is second to none. With 24/7 support, we're always here to help you succeed."
            imagePath="/images/services/service.svg"
          />
          <div className="mx-auto w-4 h-10 bg-primary relative hidden md:block rounded-b-lg" />
        </div>
      </Container>
    </section>
  );
}
