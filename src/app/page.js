"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";
<<<<<<< HEAD
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";
// import { logInfo } from "@/utils/logging";
=======
>>>>>>> 3cabf9b (chore: add test IDs for better testability in components and page)

export default function Home() {
  return (
    <div
      className="flex w-[100%] justify-center gap-16"
      data-testid="home-container"
    >
      <main data-testid="main-heading">

        <HeroSection />
        <PhotoCardsWineTasting />
        <Subscribe />
        <PhotoCardsTeamValues />

      </main>
    </div>
  );
}
