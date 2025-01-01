import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import ContentGridPhotoCards from "@/components/ContentGrid/ContentGridPhotoCards";
import ContentGridTextCards from "@/components/ContentGrid/ContentGridTextCards";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex min-h-[80vh] justify-center gap-16 bg-white">
      <main data-testid="main-heading">
        <HeroSection />
        <ContentGridTextCards />
        <ContentGridPhotoCards />
        <Subscribe />
      </main>
    </div>
  );
}
