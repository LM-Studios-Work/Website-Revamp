"use client";

import { useState } from "react";
import { Navigation } from "@/components/layout/navigation";
import type { PageType } from "@/lib/navigation";

// Import all page components
import HomePage from "@/components/pages/homepage";
import StandardPackPage from "@/components/pages/webdesign";
import SEOPage from "@/components/pages/seo-page";
import AppDevelopmentPage from "@/components/pages/app-development-page";
import ContactForm from "@/components/pages/contact-form";
import ProjectsPage from "@/components/pages/projects-page";
import AboutPage from "@/components/pages/about-page";
import MidrandWebDesignPage from "@/components/pages/midrand-web-design-page";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "web-design":
        return <StandardPackPage onPageChange={setCurrentPage} />;
      case "seo":
        return <SEOPage onPageChange={setCurrentPage} />;
      case "app-development":
        return <AppDevelopmentPage onPageChange={setCurrentPage} />;
      case "contact":
        return <ContactForm />;

      case "projects":
        return <ProjectsPage onPageChange={setCurrentPage} />;
      case "about":
        return <AboutPage onPageChange={setCurrentPage} />;
      case "midrand-web-design":
        return <MidrandWebDesignPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="pt-16 sm:pt-20">{renderPage()}</div>
    </main>
  );
}
