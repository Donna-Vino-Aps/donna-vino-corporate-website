import React from "react";
import PhotoCardSmaller from "../Card/PhotoCardSmaller";
import { useLanguage } from "@/app/context/LanguageContext";

const PhotoCardsTeamValues = () => {
  const { translations } = useLanguage();
  return (
    <div className="flex justify-center items-center">
      <div
        data-testid="testGrid"
        className="grid-cols-1 grid gap-4 p-4 md:grid-cols-2 xl:mb-1 xl:-mt-1 -mt-5 mb-1"
      >
        <PhotoCardSmaller
          imageUrl="/images/card-unsplash-team-meeting.svg"
          title={translations["pcard.small-left.heading"]}
          description={translations["pcard.small-left.paragraph"]}
          fontColor="#E8ECE9"
          backgroundColor="#183F27"
          buttonIconUrl="/icons/team.svg"
          buttonLabel={translations["pcard.small-left.button"]}
          buttonVariant="grayGreen"
          buttonTestId="read-more-button-team"
        />
        <PhotoCardSmaller
          imageUrl="/images/card-unsplash-wine-glasses.svg"
          title={translations["pcard.small-right.heading"]}
          description={translations["pcard.small-right.paragraph"]}
          fontColor="#101010"
          backgroundColor="#E0E0E0"
          buttonIconUrl="/icons/diamond-alt.svg"
          buttonLabel={translations["pcard.small-right.button"]}
          buttonVariant="darkGreen"
          buttonTestId="read-more-button-values"
        />
      </div>
    </div>
  );
};

export default PhotoCardsTeamValues;
