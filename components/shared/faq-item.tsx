"use client";

/**
 * FAQItem Component
 *
 * A reusable collapsible FAQ item with question/answer toggle.
 * Used across all area web design pages and other FAQ sections.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  /** Full group-hover class for accent color (default: group-hover:text-[#d4f534]) */
  hoverClass?: string;
}

export function FAQItem({ question, answer, hoverClass = "group-hover:text-[#d4f534]" }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between text-left group py-2"
      >
        <span className={`font-bold text-white text-sm md:text-base ${hoverClass} transition-colors pr-4`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="overflow-hidden">
          <p className="pt-2 text-sm text-muted-foreground leading-relaxed font-light">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
