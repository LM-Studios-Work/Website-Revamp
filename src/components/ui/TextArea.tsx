"use client";

import React, { forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * TextArea Component
 * 
 * A styled textarea with consistent design system integration.
 * 
 * Features:
 * - Glass morphism styling (bg-black/20 with backdrop-blur)
 * - Lime accent on focus (#d4f534)
 * - Optional label and error states
 * - Fully accessible with proper ARIA attributes
 * - Forward ref support for form libraries
 * - Resize control
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, helperText, className = "", id, rows = 4, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-white/80 mb-2"
          >
            {label}
            {props.required && <span className="text-[#d4f534] ml-1">*</span>}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`
            w-full px-4 py-3 rounded-lg
            bg-black/20 backdrop-blur-sm
            border ${error ? "border-red-500/50" : "border-white/10"}
            text-white placeholder-white/40
            focus:outline-none focus:border-[#d4f534] focus:ring-2 focus:ring-[#d4f534]/20
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            resize-y min-h-[100px]
            ${className}
          `.replace(/\s+/g, " ").trim()}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={
            error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="mt-2 text-sm text-white/60"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
