"use client";

import React from "react";
import PhotoCardSmaller from "../Card/PhotoCardSmaller";

const PhotoCardsTeamValues = () => {
  return (
    <div
      className="grid grid-col-1 sm:grid-cols-2 w-full justify-center items-center gap-4 px-2 sm:p-2 place-items-center"
      data-testid="photo-cards-team-values"
    >
      <PhotoCardSmaller
        imageUrl="/images/card-unsplash-team-meeting.svg"
        title="Our Team"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        buttonIcon="/icons/team.svg"
        buttonLabel="Read More"
        buttonVariant="grayGreen"
        buttonTestId="read-more-button-team"
        cardVariant="variant1"
      />
      <PhotoCardSmaller
        imageUrl="/images/card-unsplash-wine-glasses.svg"
        title="Our Values"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        buttonIcon="/icons/diamond-alt.svg"
        buttonLabel="Read More"
        buttonVariant="darkGreen"
        buttonTestId="read-more-button-values"
        cardVariant="variant2"
      />
    </div>
  );
};

export default PhotoCardsTeamValues;
