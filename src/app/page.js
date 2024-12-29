import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center gap-16 bg-white">
      <main className="flex flex-col items-center" data-testid="main-heading">
        <HeroSection />
      </main>
    </div>
  );
}
