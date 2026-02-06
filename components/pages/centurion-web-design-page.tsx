"use client";

import AreaWebDesignPage from "./area-web-design-page";
import { centurionData } from "@/lib/area-data";
import type { PageType } from "@/lib/navigation";

interface CenturionWebDesignPageProps {
  onPageChange?: (page: PageType) => void;
}

export default function CenturionWebDesignPage({ onPageChange }: CenturionWebDesignPageProps) {
  return <AreaWebDesignPage data={centurionData} onPageChange={onPageChange} />;
}
