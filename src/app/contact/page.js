"use client";
import MapSection from "@/components/Map/MapSection";
import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import Head from "next/head";

const Contact = () => {
  const { translations } = useLanguage();
  return (
    <div className="w-full" data-testid="contact-container">
      <Head>
        <title>Contact - Donna Vino</title>
        <meta
          name="description"
          content="Have questions or need assistance? Reach out to Donna Vino — we’d love to hear from you!"
        />
      </Head>
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
