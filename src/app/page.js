"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";
import SEO from "@/components/SEO/SEO";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { translations } = useLanguage();
  return (
    <div className="flex w-[100%]" data-testid="home-container">
      <SEO
        title={translations["home.title"]}
        description={translations["home.description"]}
      />
      <main className="flex flex-col gap-4 w-full" data-testid="main-heading">
        <HeroSection />
        <PhotoCardsWineTasting />
        <Subscribe />
        <PhotoCardsTeamValues />
      </main>
    </div>
  );
}
