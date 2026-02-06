"use client";

import AreaWebDesignPage from "./area-web-design-page";
import { midrandData } from "@/lib/area-data";
import type { PageType } from "@/lib/navigation";

interface MidrandWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function MidrandWebDesignPage({ onPageChange }: MidrandWebDesignPageProps) {
  return <AreaWebDesignPage data={midrandData} onPageChange={onPageChange} />;
}
