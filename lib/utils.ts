/**
 * Utility Functions
 * 
 * Common utility functions for the application.
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Combines class names using clsx
 * Useful for conditional Tailwind CSS classes
 * 
 * Usage:
 *   cn("px-2 py-1", isActive && "bg-blue-500")
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
