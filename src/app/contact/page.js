"use client";
import MapSection from "@/components/Map/MapSection";
import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import SEO from "@/components/SEO/SEO";

const Contact = () => {
  const { translations } = useLanguage();
  return (
    <div className="w-full" data-testid="contact-container">
      <SEO
        title={translations["contact.title"]}
        description={translations["contact.description"]}
      />
      <section className="px-2 py-4 sm:mx-8">
        <Button
          text={translations["button.go-back"]}
          icon="/icons/back-arrow.svg"
          variant="redLine"
          ariaLabel="Go back"
          testId="go-back-button"
          onClick={() => {
            history.go(-1);
          }}
        />
      </section>
      <ContactUs />
      <MapSection data-testid="map-section" />
    </div>
  );
};

export default Contact;
