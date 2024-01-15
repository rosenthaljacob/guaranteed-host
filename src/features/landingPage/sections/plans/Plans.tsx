import React, { useState } from "react";
import dynamic from "next/dynamic";
// Layout
import Container from "@/layout/Container";
// Local
import Plan from "./Plan";
// Components
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LimitedTimeOffer = dynamic(
  () => import("@/features/landingPage/sections/plans/LimitedTimeOffer"),
  {
    ssr: false,
  }
);

const monthlyPrices = {
  starterPack: {
    crossedOutPrice: "$2.99/month",
    offer: "Get Your First Month for Just $0.99!",
  },
  businessPro: {
    crossedOutPrice: "$9.99/month",
    offer: "Save 30% with Annual Billing!",
  },
  enterpriseElite: {
    crossedOutPrice: "$29.99/month",
    offer: "3 Months FREE with Yearly Plan!",
  },
};

const yearlyPrices = {
  starterPack: {
    crossedOutPrice: "$35.88/year",
    offer: "Get Your First Year for Just $28.68!",
  },
  businessPro: {
    crossedOutPrice: "$119.88/year",
    offer: "Save 30% with Yearly Billing! Just $83.92/year!",
  },
  enterpriseElite: {
    crossedOutPrice: "$359.88/year",
    offer: "3 Months FREE with Yearly Plan! Just $269.91/year!",
  },
};

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const handlePlanChange = (value: string) => setSelectedPlan(value);

  const prices = selectedPlan === "monthly" ? monthlyPrices : yearlyPrices;

  return (
    <section id="plans" className="flex flex-col w-full">
      <Container className="py-10 text-center grid gap-8">
        <h2 className="text-3xl font-bold tracking-tight">
          Unbeatable Plans for Unbeatable Websites!
        </h2>

        <Tabs
          value={selectedPlan}
          onValueChange={handlePlanChange}
          className="mx-auto w-full sm:w-[400px] lg:w-1/3 px-2.5"
          id="tabpanel-plans"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              aria-label="Try our monthly plans"
              name="monthly"
              value="monthly"
              aria-selected={selectedPlan === "monthly"}
              aria-controls="tabpanel-plans"
            >
              Monthly plan
            </TabsTrigger>
            <TabsTrigger
              aria-label="Try our yearly plans"
              name="yearly"
              value="yearly"
              aria-selected={selectedPlan === "yearly"}
              aria-controls="tabpanel-plans"
            >
              Yearly plan
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid sm:grid-cols-3 gap-5">
          <Plan
            {...prices.starterPack}
            title="Starter Pack"
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
            {...prices.businessPro}
            className="shadow-2xl"
            title="Business Pro"
            description="For the serious entrepreneur. Scale your business without breaking the bank!"
            features={[
              { title: "5 Websites", icon: "fa6-solid:globe" },
              { title: "50GB SSD Storage", icon: "fa6-solid:hard-drive" },
              { title: "Unlimited Bandwidth", icon: "fa6-solid:chart-line" },
              { title: "Free SSL Certificate", icon: "fa6-solid:lock" },
            ]}
            buttonLabel="Go Pro! (Most Popular)"
            buttonAction={() => console.log("Business Pro selected")}
            buttonVariant="default"
          >
            <LimitedTimeOffer />
          </Plan>

          <Plan
            {...prices.enterpriseElite}
            title="Enterprise Elite"
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
