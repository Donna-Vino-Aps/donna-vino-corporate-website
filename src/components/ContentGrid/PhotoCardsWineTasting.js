"use client";

import React from "react";
import PhotoCard from "../Card/PhotoCard";
import { useLanguage } from "@/app/context/LanguageContext";

const PhotoCardsWineTasting = () => {
  const { translations } = useLanguage();
  return (
    <div
      className="grid grid-col-1 xl:grid-cols-2 w-full justify-center items-center gap-2 px-2 lg:p-2 place-items-center"
      data-testid="photo-cards-wine-tasting"
    >
      <PhotoCard
        imageUrl="/images/card-unsplash-wine-tasting.jpg"
        title={translations["pcard.big-left.heading"]}
        description={translations["pcard.big-left.paragraph"]}
        buttonIcon="/icons/calender-alt-1-gray.svg"
        buttonLabel={translations["pcard.big-left.button"]}
        buttonVariant="darkGreen"
        buttonTestId="book-in-shop-button"
        cardVariant="variant1"
      />
      <PhotoCard
        imageUrl="/images/card-unsplash-wine-table.jpg"
        title={translations["pcard.big-right.heading"]}
        description={translations["pcard.big-right.paragraph"]}
        buttonIcon="/icons/phone.svg"
        buttonLabel={translations["pcard.big-right.button"]}
        buttonVariant="grayGreen"
        buttonTestId="contact-us-button"
        cardVariant="variant2"
      />
    </div>
  );
};

export default PhotoCardsWineTasting;
