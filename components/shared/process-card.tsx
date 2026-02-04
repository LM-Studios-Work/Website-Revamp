"use client";

/**
 * ProcessCard Component
 * 
 * A reusable card for displaying process/workflow steps.
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  id: number;
  title: string;
  description: string;
  color: string;
  textColor: string;
  tag?: string;
  index?: number;
}

export function ProcessCard({
  id,
  title,
  description,
  color,
  textColor,
  tag,
  index = 0,
}: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        color,
        textColor,
        "p-8 rounded-[32px] min-h-[400px] flex flex-col justify-between",
        "group hover:-translate-y-2 transition-transform duration-300"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center font-bold">
            {id}
          </div>
          {tag && (
            <div className="px-4 py-1.5 rounded-full border border-black text-xs font-bold uppercase tracking-wider">
              {tag}
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
        <p className="opacity-80 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
