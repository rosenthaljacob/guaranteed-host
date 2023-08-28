import React from "react";
import Image from "next/image";
// Layout
import Container from "@/layout/Container";
// Components
import { Card } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Williams",
      role: "CEO, TechSavvy Solutions",
      image: "/images/profiles/sarah-williams.jpeg",
      text: "Switching to GuaranteedHost was the best decision we ever made. The 24/7 support is a lifesaver!",
    },
    {
      name: "Michael Thompson",
      role: "Lead Developer, GreenWeb Innovations",
      image: "/images/profiles/michael-thompson.jpeg",
      text: "The performance and uptime are unmatched! I can focus on coding rather than server issues.",
    },
    {
      name: "Emily Davis",
      role: "Founder, The Mindful Blogger",
      image: "/images/profiles/emily-davis.jpeg",
      text: "The user interface is so intuitive, and the plans are straightforward. Highly recommended!",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 w-full">
      <Container className="mx-auto text-center grid gap-8">
        <h2 className="text-3xl font-bold tracking-tight">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-5">
              <Image
                width={64}
                height={64}
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
              <p className="text-base text-gray-700">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
