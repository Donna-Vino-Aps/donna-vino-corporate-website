"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex w-[100%]" data-testid="home-container">
      <Head>
        <title>Home - Donna Vino</title>
        <meta
          name="description"
          content="Discover the world of Donna Vino. We are committed to delivering unique tastes and experiences to you!"
        />
      </Head>
      <main className="flex flex-col gap-4 w-full" data-testid="main-heading">
        <HeroSection />
        <PhotoCardsWineTasting />
        <Subscribe />
        <PhotoCardsTeamValues />
      </main>
    </div>
  );
}
