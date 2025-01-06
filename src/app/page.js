import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] justify-center gap-16 bg-white">
      <main data-testid="main-heading">
        <HeroSection />
        <PhotoCardsWineTasting />
        <Subscribe />
      </main>
    </div>
  );
}
