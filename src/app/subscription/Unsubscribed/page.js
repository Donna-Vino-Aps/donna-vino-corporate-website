"use client";

import React from "react";
import { useLanguage } from "@/app/context/LanguageContext";
import SEO from "@/components/SEO/SEO";

const UnsubscribedPage = () => {
  const { translations } = useLanguage();

  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="unsubscribed-title"
    >
      <SEO
        title={translations["unsubscribed.title"]}
        description={translations["unsubscribed.description"]}
      />
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[45rem]">
        <h1
          id="unsubscribed-title"
          className="text-displaySmall sm:text-displayMedium text-center mb-4 sm:mb-6 md:mb-8"
        >
          {translations["unsubscribed.heading"]}
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["unsubscribed.paragraph"]}
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["unsubscribed.thank-you"]}
        </p>
      </div>
    </section>
  );
};

export default UnsubscribedPage;
