"use client";

import type { Feature } from "@/lib/features";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#d4f534]/50 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#d4f534]" />
        {feature.title}
      </h3>
      <p className="text-gray-400 pl-5">{feature.description}</p>
    </div>
  );
}
