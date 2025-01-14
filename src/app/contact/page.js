"use client";
import MapSection from "@/components/Map/MapSection";
import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const Contact = () => {
  const { translations } = useLanguage();
  return (
    <div className="w-full" data-testid="contact-container">
      <div className="px-2 py-4 sm:mx-8">
        <Button
          text="Go back"
          icon="/icons/back-arrow.svg"
          variant="redLine"
          ariaLabel="Go back"
          testId="go-back-button"
          onClick={() => {
            history.go(-1);
          }}
        />
      </div>
      <MapSection data-testid="map-section" />
    </div>
  );
};

export default Contact;
