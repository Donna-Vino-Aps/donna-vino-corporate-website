import React from "react";
import PhotoCardSmaller from "../Card/PhotoCardSmaller";

const PhotoCardsTeamValues = () => {
  return (
    <div
      className="grid-cols-1 grid gap-4 p-4 md:grid-cols-2 xl:mb-1 xl:-mt-1 -mt-5 mb-1"
      data-testid="testGrid"
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
