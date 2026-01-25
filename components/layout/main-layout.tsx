"use client";

import { Navigation } from "@/components/layout/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import type { PageType } from "@/lib/navigation";
import { useState } from "react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="pt-20">{children}</div>
      </div>
    </ThemeProvider>
  );
}
