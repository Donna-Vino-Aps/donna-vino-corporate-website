"use client";

import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const SubscriptionConfirmed = () => {
  const { translations } = useLanguage();

  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="subscription-confirmed-title"
    >
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[45rem]">
        <h1
          id="subscription-confirmed-title"
          className="text-displaySmall sm:text-displayMedium text-center mb-4 sm:mb-6 md:mb-8"
        >
          {translations["confirmed.heading"]}
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["confirmed.paragraph1"]}
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["confirmed.paragraph2"]}
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["confirmed.paragraph3"]}
          <span role="img" aria-label="wine glass">
            🍷
          </span>
        </p>

        <Button
          text={translations["confirmed.button"]}
          variant="greenGoHome"
          icon="/icons/home.svg"
          testId="home-button"
          linkUrl="/"
          linkWidth="w-full sm:w-[14.5rem]"
          ariaLabel={translations["confirmed.button"]}
        />
      </div>
    </section>
  );
};

export default SubscriptionConfirmed;
