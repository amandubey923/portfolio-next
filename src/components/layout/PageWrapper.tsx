"use client";

import { ReactNode } from "react";
import CyberGrid from "@/components/shared/CyberGrid";
import TopProgressBar from "@/components/shared/TopProgressBar";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full overflow-x-clip">
      {/* Top Scroll Reading Progress */}
      <TopProgressBar />

      {/* Background Cyber Grid */}
      <CyberGrid />

      {/* Page Content */}
      <main className="relative z-10 pt-20 px-4 md:px-8 max-w-full overflow-x-clip">
        {children}
      </main>

      {/* Floating Back to Top */}
      <ScrollToTop />
    </div>
  );
}
