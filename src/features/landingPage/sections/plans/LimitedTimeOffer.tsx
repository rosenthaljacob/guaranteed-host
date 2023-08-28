import React, { useEffect, useState } from "react";
// Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// Icons
import { Icon } from "@iconify/react";

const getThreeHoursFromNow = () => 1000 * 60 * 60 * 3 + Date.now();

const setLimitedTimeOfferExp = (value: string) =>
  localStorage.setItem("limitedTimeOffer", value);

const getLimitedTimeOfferExp = () => {
  if (typeof window === "undefined")
    throw new Error("LimitedTimeOffer.tsx: should not be used with SSR");

  const exp = localStorage.getItem("limitedTimeOffer");
  const parsed = parseInt(exp || "0");

  if (isNaN(parsed) || parsed < Date.now()) {
    const newExp = getThreeHoursFromNow();
    setLimitedTimeOfferExp(newExp.toString());
    return newExp;
  }

  return parsed;
};

const getLimitedTimeOffer = () => {
  const exp = getLimitedTimeOfferExp();

  const diff = exp - Date.now();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const offerExpires = `${hours}h ${minutes}m ${seconds}s`;

  return offerExpires;
};

export default function LimitedTimeOffer() {
  const [offerExpires, setOfferExpires] = useState(getLimitedTimeOffer());

  useEffect(() => {
    const interval = setInterval(() => {
      const exp = getLimitedTimeOfferExp();

      const diff = exp - Date.now();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const offerExpires = `${hours}h ${minutes}m ${seconds}s`;

      setOfferExpires(getLimitedTimeOffer());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-xs text-destructive-foreground bg-destructive  font-medium mr-auto w-52 py-1 text-center top-6 absolute -right-14 rotate-45">
      Offer Expires <br /> in <span>{offerExpires}</span>
    </div>
  );
}
