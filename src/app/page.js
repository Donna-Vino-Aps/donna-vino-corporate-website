"use client";
import React from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Subscribe from "@/components/Subscribe/Subscribe";
import Button from "@/components/Button/Button";
// import { logInfo } from "@/utils/logging";

export default function Home() {
  return (
    <div className="flex w-[100%] justify-center gap-16 bg-white">
      <main data-testid="main-heading">
        <HeroSection />
        <Subscribe />
        {/* Rendering the 8 buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <Button
            text="Visit Our Shop"
            icon="/icons/cart.svg"
            variant="primary"
            ariaLabel="Visit our shop"
            data-testid="get-started-button"
          />
          <Button
            text="Contact Us"
            icon="/icons/speech-bubble-19.svg"
            variant="secondary"
            ariaLabel="Contact us"
            data-testid="secondary-button"
          />
          <Button
            text="Book in the Shop"
            icon="/icons/calender-alt-1.svg"
            variant="black"
            ariaLabel="Book in the shop"
            data-testid="book-in-shop-button"
          />
          <Button
            text="Book in the Shop"
            variant="gray"
            icon="/icons/phone.svg"
            ariaLabel="Book in the shop"
            data-testid="book-in-shop-gray-button"
          />
          <Button
            text="Submit"
            variant="submit"
            isLoading={false}
            onClick={() => alert("Submitting...")}
            ariaLabel="Submit form"
            data-testid="submit-button"
          />
          <Button
            text="Read More"
            variant="gray"
            icon="/icons/team.svg"
            ariaLabel="Read more"
            data-testid="read-more-gray-button"
          />
          <Button
            text="Read More"
            variant="black"
            icon="/icons/diamond-alt.svg"
            ariaLabel="Read more"
            data-testid="read-more-black-button"
          />
          <Button
            text="Go Back"
            icon="/icons/back-arrow.svg"
            variant="transparentRed"
            ariaLabel="Go back"
            data-testid="go-back-button"
          />
        </div>
      </main>
    </div>
  );
}
