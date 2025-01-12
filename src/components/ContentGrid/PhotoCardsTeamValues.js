import React from "react";
import PhotoCardSmaller from "../Card/PhotoCardSmaller";

const PhotoCardsTeamValues = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        data-testid="testGrid"
        className="grid-cols-1 grid gap-4 p-4 md:grid-cols-2 xl:mb-1 xl:-mt-1 -mt-5 mb-1"
      >
        <PhotoCardSmaller
          imageUrl="/images/card-unsplash-team-meeting.svg"
          title="Our Team"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          fontColor="#E8ECE9"
          backgroundColor="#183F27"
          buttonIconUrl="/icons/team.svg"
          buttonLabel="Read More"
          buttonVariant="grayGreen"
          buttonTestId="read-more-button-team"
        />
        <PhotoCardSmaller
          imageUrl="/images/card-unsplash-wine-glasses.svg"
          title="Our Values"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          fontColor="#101010"
          backgroundColor="#E0E0E0"
          buttonIconUrl="/icons/diamond-alt.svg"
          buttonLabel="Read More"
          buttonVariant="darkGreen"
          buttonTestId="read-more-button-values"
        />
      </div>
    </div>
  );
};

export default PhotoCardsTeamValues;
