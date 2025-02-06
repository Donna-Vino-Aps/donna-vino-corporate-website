"use client";
import React from "react";
import OurValues from "../../components/OurValues/OurValues";
import ThematicCardsValues from "@/components/ContentGrid/ThematicCardsValues";

import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const OurValuesPage = () => {
  const { translations } = useLanguage();
  return (
    <div className="w-full flex flex-col gap-8">
      <section className="px-2 pt-4 sm:mx-8">
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

      <section>
        <OurValues />
      </section>

      <section>
        <ThematicCardsValues />
      </section>
    </div>
  );
};

export default OurValuesPage;
