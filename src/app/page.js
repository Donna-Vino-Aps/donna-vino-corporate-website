import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center p-8 gap-16 bg-white">
      <main className="flex flex-col gap-8 items-center text-center text-foreground-normal">
        <HeroSection />
        {/* Add test ID */}
        <p className="font-roboto" data-testid="description">
          This project is dedicated to developing the website for our innovative
          platform, where premium wine sales meet curated tasting experiences.
        </p>
      </main>
    </div>
  );
}
