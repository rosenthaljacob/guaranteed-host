import React from "react";
// Components
import { Card } from "@/components/ui/card";
// Utils
import { cn } from "@/lib/utils";

interface TreeItemLeftProps {
  title: string;
  description: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  imagePath?: string;
  right?: boolean;
}

export default function TreeItem({
  title,
  description,
  className,
  image,
  imagePath,
  right,
}: TreeItemLeftProps) {
  return (
    <div className={cn("flex w-full", right && "flex-row-reverse", className)}>
      <div className="flex-1">
        <Card
          className={cn(
            "p-5 md:mx-5 my-2 flex items-center gap-5",
            right && "flex-row-reverse"
          )}
        >
          <div className="grid gap-1">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
          {imagePath && (
            <img src={imagePath} alt="provider" className="w-20 h-20" />
          )}
          {image}
        </Card>
      </div>
      <div className="w-4 bg-primary relative hidden md:block">
        <span className="bg-background border-4 border-primary rounded-full w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </div>
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
}
