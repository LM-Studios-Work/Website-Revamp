/**
 * Centralized Framer Motion Animation Variants
 * 
 * All animation variants used across the application.
 * This ensures consistency and makes it easy to update animations globally.
 */

import type { Variants } from "framer-motion";

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleInLarge: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerMobile: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// ============================================
// SPRING ANIMATIONS (for cards and interactive elements)
// ============================================

export const springCard: Variants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 1.2,
    },
  },
};

// ============================================
// SPECIAL EFFECTS
// ============================================

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.3 },
  },
};

export const drawLineSlow: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 },
  },
};

export const slideUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideDown: Variants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const expandWidth: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 1.2, delay: 1, ease: "circOut" },
  },
};

export const expandWidthMobile: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, delay: 0.6, ease: "circOut" },
  },
};

// ============================================
// HOVER ANIMATIONS (for whileHover prop)
// ============================================

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

export const hoverScaleLarge = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -10,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

export const hoverGlow = {
  boxShadow: "0 0 20px rgba(212, 245, 52, 0.4)",
  transition: { duration: 0.3 },
};

// ============================================
// UTILITY: Generate Item Variant with Custom Delay
// ============================================

export const createItemVariant = (delayMultiplier: number = 0.1): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * delayMultiplier,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
});

// ============================================
// VIEWPORT OPTIONS (for whileInView)
// ============================================

export const viewportOnce = { once: true };

export const viewportDefault = { 
  once: true, 
  margin: "-10%", 
  amount: 0.2 as const,
};

export const viewportMobile = { 
  once: true, 
  margin: "0px", 
  amount: 0.2 as const,
};
