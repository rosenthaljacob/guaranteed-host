import React from "react";
// Components
import { Card } from "@/components/ui/card";
import { Button, ButtonProps } from "@/components/ui/button";
// Utils
import { cn } from "@/lib/utils";
// Icons
import { Icon } from "@iconify/react";

type Feature = {
  title: string;
  icon: string;
};

interface PlanProps {
  title: React.ReactNode;
  offer: React.ReactNode;
  crossedOutPrice?: React.ReactNode;
  description: React.ReactNode;
  features: Feature[];
  buttonLabel: string;
  buttonAction: () => void;
  className?: string;
  children?: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
}

export default function Plan({
  title,
  offer,
  crossedOutPrice,
  description,
  features,
  buttonLabel,
  buttonAction,
  className,
  children,
  buttonVariant = "outline",
}: PlanProps) {
  return (
    <Card
      className={cn(
        " text-left p-5 flex flex-col gap-3 relative overflow-hidden",
        className
      )}
    >
      <div className="grid gap-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="py-3">
          {crossedOutPrice && (
            <p className="line-through text-xl">{crossedOutPrice}</p>
          )}
          <p className="text-sm text-destructive font-medium">{offer}</p>
        </div>
      </div>

      <p className="text-sm mb-2">{description}</p>
      <div className="grid gap-1 pb-5">
        {features.map((feature) => (
          <div className="flex items-center gap-2" key={feature.title}>
            <div className="h-4 w-4">
              <Icon icon={feature.icon} className="h-4 w-4 text-primary" />
            </div>
            <p className="text-sm">{feature.title}</p>
          </div>
        ))}
      </div>
      {children}
      <Button
        variant={buttonVariant}
        className="mt-auto"
        onClick={buttonAction}
      >
        {buttonLabel}
      </Button>
    </Card>
  );
}
