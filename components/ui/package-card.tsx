"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  title: string;
  price: string;
  priceLabel?: string;
  description: string;
  features: string[];
  delivery: string;
  popular?: boolean;
  onSelect?: () => void;
}

export function PackageCard({
  title,
  price,
  priceLabel = "once-off",
  description,
  features,
  delivery,
  popular = false,
  onSelect,
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col h-full",
        popular && "ring-2 ring-primary"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-muted-foreground text-sm">From</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground text-sm">{priceLabel}</span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-secondary-foreground" strokeWidth={3} />
            </div>
            <span className="text-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="text-muted-foreground text-sm mb-6">{delivery}</div>

      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "w-full py-3 px-6 rounded-full font-medium transition-colors",
          popular
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "bg-white/10 text-foreground border border-border hover:bg-white/20"
        )}
      >
        Choose Plan
      </button>
    </div>
  );
}
