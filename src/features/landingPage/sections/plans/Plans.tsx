import React from "react";
import dynamic from "next/dynamic";

import Container from "@/layout/Container";
import Plan from "./Plan";

const LimitedTimeOffer = dynamic(
  () => import("@/features/landingPage/sections/plans/LimitedTimeOffer"),
  {
    ssr: false,
  }
);

export default function Plans() {
  return (
    <section className="flex flex-col w-full">
      <Container className="py-10 text-center grid gap-5">
        <h4 className="text-3xl font-bold tracking-tight">
          Unbeatable Plans for Unbeatable Websites!
        </h4>

        <div className="grid grid-cols-3 gap-5">
          <Plan
            title="Starter Pack"
            offer="Get Your First Month for Just $0.99!"
            crossedOutPrice="$2.99/month"
            description="The perfect plan for getting your feet wet in the world of web hosting!"
            features={[
              { title: "1 Website", icon: "fa6-solid:globe" },
              { title: "10GB SSD Storage", icon: "fa6-solid:hard-drive" },
              { title: "100GB Bandwidth", icon: "fa6-solid:chart-line" },
            ]}
            buttonLabel="Get Started!"
            buttonAction={() => console.log("Starter Pack selected")}
          />

          <Plan
            className="shadow-2xl"
            title="Business Pro"
            offer="Save 20% with Annual Billing!"
            crossedOutPrice="$9.99/month"
            description="For the serious entrepreneur. Scale your business without breaking the bank!"
            features={[
              { title: "5 Websites", icon: "fa6-solid:globe" },
              { title: "50GB SSD Storage", icon: "fa6-solid:hard-drive" },
              { title: "Unlimited Bandwidth", icon: "fa6-solid:chart-line" },
              { title: "Free SSL Certificate", icon: "fa6-solid:lock" },
            ]}
            buttonLabel="Go Pro! (Most Popular!)"
            buttonAction={() => console.log("Business Pro selected")}
            buttonVariant="default"
          >
            <LimitedTimeOffer />
          </Plan>

          <Plan
            title="Enterprise Elite"
            offer="2 Months FREE with 2-Year Plan!"
            crossedOutPrice="$29.99/month"
            description="For enterprises that demand nothing but the best. Get VIP treatment with our Elite plan!"
            features={[
              { title: "Unlimited Websites", icon: "fa6-solid:globe" },
              { title: "100GB SSD Storage", icon: "fa6-solid:hard-drive" },
              { title: "Unlimited Bandwidth", icon: "fa6-solid:chart-line" },
              { title: "Free SSL Certificate", icon: "fa6-solid:lock" },
              { title: "Priority Support", icon: "fa6-solid:headset" },
            ]}
            buttonLabel="Go Elite!"
            buttonAction={() => console.log("Enterprise Elite selected")}
          />
        </div>
      </Container>
    </section>
  );
}
