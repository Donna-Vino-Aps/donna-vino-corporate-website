"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex w-[100%] justify-center gap-16 bg-white">
      <main data-testid="main-heading">
        <HeroSection />
        <Subscribe />
      </main>
    </div>
  );
}
