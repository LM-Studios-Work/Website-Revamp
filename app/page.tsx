"use client";

import { useState } from "react";
import Header from "@/components/header";
import WebDesignPage from "@/components/pages/web-design-page";
import StandardPackPage from "@/components/pages/standard-pack-page";
import CalculatorPage from "@/components/pages/calculator-page";
import ComparePage from "@/components/pages/compare-page";
import ProjectsPage from "@/components/pages/projects-page";
import AboutPage from "@/components/pages/about-page";
import HomePage from "@/components/pages/homepage";

type PageType =
  | "home"
  | "web-design"
  | "standard-pack"
  | "calculator"
  | "compare"
  | "projects"
  | "about";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>("web-design");

  return (
    <main className="min-h-screen">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === "web-design" && <WebDesignPage />}
        {currentPage === "standard-pack" && <StandardPackPage />}
        {currentPage === "calculator" && <CalculatorPage />}
        {currentPage === "compare" && <ComparePage />}
        {currentPage === "projects" && <ProjectsPage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "home" && <HomePage />}
      </div>
    </main>
  );
}
