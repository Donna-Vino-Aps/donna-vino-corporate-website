"use client";
import React from "react";
import OurValues from "../../components/OurValues/OurValues";
import ThematicCardsValues from "@/components/ContentGrid/ThematicCardsValues";

import Button from "@/components/Button/Button";

const OurValuesPage = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="px-2 pt-4 sm:mx-8">
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
      <OurValues />
      <ThematicCardsValues />
    </div>
  );
};

export default OurValuesPage;
