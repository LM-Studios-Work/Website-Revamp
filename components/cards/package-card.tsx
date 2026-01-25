"use client";

import { Check } from "lucide-react";
import type { ServicePackage } from "@/lib/services";

interface PackageCardProps {
  package: ServicePackage;
  onSelect?: () => void;
}

export function PackageCard({ package: pkg, onSelect }: PackageCardProps) {
  return (
    <div className="snap-center flex-none w-[85vw] md:w-[350px] rounded-3xl p-8 relative group">
      <div
        className="absolute inset-0 rounded-3xl"
        style={{ backgroundColor: pkg.color }}
      />
      <div className="relative z-10">
        {pkg.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-black text-white text-xs font-bold rounded-full">
            MOST POPULAR
          </div>
        )}

        <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
        <p className="text-black/80 text-sm mb-4">{pkg.description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-black">{pkg.price}</span>
          <p className="text-black/70 text-xs mt-1">One-time investment</p>
        </div>

        <p className="text-black/80 text-xs mb-6 pb-6 border-b border-black/20">
          <strong>Delivery:</strong> {pkg.delivery}
        </p>

        <div className="space-y-3 mb-8">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
              <span className="text-sm text-black">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onSelect}
          className="w-full bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-black/90 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
