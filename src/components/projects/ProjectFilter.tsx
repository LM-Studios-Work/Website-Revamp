"use client";

import React from "react";
import { Filter } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

/**
 * ProjectFilter Component
 * 
 * A horizontal filter bar with pill-shaped category buttons.
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Horizontal scroll on mobile
 * - Active state with lime accent
 * - Smooth transitions
 * 
 * @param categories - Array of category names
 * @param activeCategory - Currently selected category
 * @param onSelectCategory - Callback when category is clicked
 */
export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterProps) {
  return (
    <div className="sticky top-24 z-30 py-4 bg-black/80 backdrop-blur-xl border-y border-white/5 -mx-6 px-6 md:mx-0 md:rounded-full md:border md:px-8 mb-12">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full pb-2 md:pb-0">
        <Filter className="w-4 h-4 text-[#d4f534] shrink-0 hidden md:block" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#d4f534] text-black"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
