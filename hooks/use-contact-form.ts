import { useState } from "react";

export interface ContactFormData {
  // Step 1 - Identity
  fullName: string;
  email: string;
  phone: string;
  contactMethod: "Email" | "WhatsApp" | "Call";

  // Step 2 - Project
  projectType: string;
  projectStatus: string;

  // Step 3 - Scope
  budget: string;
  timeline: string;
  contentReadiness: string;
  currentUrl: string;
}

/**
 * useContactForm Hook
 * 
 * Manages the state and logic for the multi-step contact form.
 * 
 * @returns {Object} Form state and control functions
 * - step: Current step (1, 2, or 3)
 * - formData: All form field values
 * - updateData: Function to update a specific field
 * - nextStep: Function to advance to the next step
 * - prevStep: Function to go back to the previous step
 * - canProceed: Boolean indicating if current step is valid
 * - submitForm: Function to handle form submission
 */
export function useContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>({
    // Step 1
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email",

    // Step 2
    projectType: "",
    projectStatus: "",

    // Step 3
    budget: "",
    timeline: "",
    contentReadiness: "",
    currentUrl: "",
  });

  // Update a specific field
  const updateData = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Navigate to next step
  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  // Navigate to previous step
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Check if current step is valid
  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email && formData.phone;
      case 2:
        return formData.projectType && formData.projectStatus;
      case 3:
        return formData.budget && formData.timeline;
      default:
        return false;
    }
  };

  // Submit form (replace with actual submission logic)
  const submitForm = async () => {
    console.log("Form submitted:", formData);
    // TODO: Implement actual form submission (API call, email service, etc.)
    alert("Form Submitted! Check console for data.");
  };

  return {
    step,
    formData,
    updateData,
    nextStep,
    prevStep,
    canProceed,
    submitForm,
  };
}
