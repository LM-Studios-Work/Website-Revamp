import { BackgroundWrapper } from "@/src/components/BackgroundWrapper";
import { MultiStepForm } from "@/src/components/contact/MultiStepForm";

export default function ContactPage() {
  return (
    <BackgroundWrapper variant="default">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6">
        <MultiStepForm />
      </div>
    </BackgroundWrapper>
  );
}
