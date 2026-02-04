"use client";

/**
 * PackageCard Component
 * 
 * A reusable card for displaying pricing packages with features list.
 */

import { motion } from "framer-motion";
import { springCard } from "@/lib/animations";
import { Check, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  price: string;
  billing?: string;
  description: string;
  features: string[];
  color: string;
  popular?: boolean;
  delivery?: string;
  idealFor?: string;
  onSelect?: () => void;
  className?: string;
}

export function PackageCard({
  name,
  price,
  billing = "once-off",
  description,
  features,
  color,
  popular = false,
  delivery,
  idealFor,
  onSelect,
  className,
}: PackageCardProps) {
  return (
    <motion.div
      variants={springCard}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className={cn("relative group", className)}
    >
      <div
        className={cn(
          "h-full bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10",
          "relative overflow-hidden transition-colors duration-300 group-hover:border-white/20"
        )}
        style={{ borderColor: popular ? color : undefined }}
      >
        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-0 right-0 p-4">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="px-3 py-1 text-black rounded-full text-[10px] font-bold inline-block shadow-lg uppercase tracking-wider"
              style={{ backgroundColor: color }}
            >
              Popular
            </motion.span>
          </div>
        )}

        {/* Header */}
        <div className="mb-5 border-b border-white/10 pb-5">
          <h3 className="text-xl font-bold mb-1 text-white">{name}</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color }}
            >
              {price}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              / {billing}
            </span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
            {description}
          </p>
        </div>

        {/* Ideal For */}
        {idealFor && (
          <div className="mb-6 p-3 rounded-lg bg-black/30 border border-white/5">
            <span className="text-xs font-medium text-gray-300">
              Best for: {idealFor}
            </span>
          </div>
        )}

        {/* Features */}
        <div className="mb-6 space-y-2.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div 
                className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-opacity-20"
                style={{ backgroundColor: color }}
              >
                <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto">
          {delivery && (
            <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              <Clock className="w-3 h-3" />
              <span>Delivery: {delivery}</span>
            </div>
          )}
          
          <button
            onClick={onSelect}
            className="w-full py-3 rounded-lg font-bold text-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden"
            style={{ backgroundColor: color }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Choose Plan
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * SEO Package Card variant with additional fields
 */
interface SEOPackageCardProps {
  name: string;
  time: string;
  price: string;
  billing: string;
  description: string;
  idealFor: string;
  features: string[];
  accent: string;
  popular?: boolean;
  onSelect?: () => void;
  className?: string;
}

export function SEOPackageCard({
  name,
  time,
  price,
  billing,
  description,
  idealFor,
  features,
  accent,
  popular = false,
  onSelect,
  className,
}: SEOPackageCardProps) {
  return (
    <div
      className={cn(
        "relative p-8 rounded-[40px] border backdrop-blur-sm flex flex-col h-full",
        "group hover:scale-[1.02] transition-transform",
        accent,
        className
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c084fc] text-white text-xs font-bold rounded-full uppercase tracking-tighter">
          Most Popular
        </div>
      )}

      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          <span className="text-muted-foreground text-sm border border-white/10 rounded-full px-3 py-1">
            {time}
          </span>
        </div>
      </div>

      <div className="mb-8">
        <div className="text-3xl font-bold text-white mb-2">{price}</div>
        <div className="text-muted-foreground text-sm mb-3">/ {billing}</div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mb-6 p-3 rounded-lg bg-black/30 border border-white/5">
        <span className="text-xs font-medium text-gray-300">Best for: {idealFor}</span>
      </div>

      <div className="space-y-4 mb-10 flex-grow">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-muted-foreground text-sm">
            <svg className="w-4 h-4 text-[#c084fc] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        className={cn(
          "w-full py-4 rounded-2xl font-bold transition-all",
          popular 
            ? "bg-[#c084fc] text-white hover:bg-[#a960ec]" 
            : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
        )}
      >
        Get Started
      </button>
    </div>
  );
}
