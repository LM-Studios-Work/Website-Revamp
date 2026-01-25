import React from "react"
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("px-6 md:px-8 py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
