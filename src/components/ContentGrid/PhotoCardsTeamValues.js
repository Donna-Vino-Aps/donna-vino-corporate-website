"use client";

import React from "react";
import PhotoCardSmaller from "../Card/PhotoCardSmaller";
import { useLanguage } from "@/app/context/LanguageContext";

const PhotoCardsTeamValues = () => {
  const { translations } = useLanguage();
  return (
    <div
      className="grid grid-col-1 xl:grid-cols-2 w-full justify-center items-center gap-4 px-2 lg:p-2 place-items-center mb-4"
      data-testid="photo-cards-team-values"
    >
      <PhotoCardSmaller
        imageUrl="/images/card-unsplash-team-meeting.svg"
        title={translations["pcard.small-left.heading"]}
        description={translations["pcard.small-left.paragraph"]}
        buttonIcon="/icons/team.svg"
        buttonLabel={translations["pcard.small-left.button"]}
        buttonVariant="grayGreen"
        buttonTestId="read-more-button-team"
        cardVariant="variant1"
      />
      <PhotoCardSmaller
        imageUrl="/images/card-unsplash-wine-glasses.svg"
        title={translations["pcard.small-right.heading"]}
        description={translations["pcard.small-right.paragraph"]}
        buttonIcon="/icons/diamond-alt.svg"
        buttonLabel={translations["pcard.small-right.button"]}
        buttonVariant="darkGreen"
        buttonTestId="read-more-button-values"
        cardVariant="variant2"
      />
    </div>
  );
};
("Read More");

export default PhotoCardsTeamValues;
