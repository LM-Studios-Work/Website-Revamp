"use client";

import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Input Component
 * 
 * A styled text input with consistent design system integration.
 * 
 * Features:
 * - Glass morphism styling (bg-black/20 with backdrop-blur)
 * - Lime accent on focus (#d4f534)
 * - Optional label and error states
 * - Fully accessible with proper ARIA attributes
 * - Forward ref support for form libraries
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-white/80 mb-2"
          >
            {label}
            {props.required && <span className="text-[#d4f534] ml-1">*</span>}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-black/20 backdrop-blur-sm
            border ${error ? "border-red-500/50" : "border-white/10"}
            text-white placeholder-white/40
            focus:outline-none focus:border-[#d4f534] focus:ring-2 focus:ring-[#d4f534]/20
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `.replace(/\s+/g, " ").trim()}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-2 text-sm text-white/60"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
