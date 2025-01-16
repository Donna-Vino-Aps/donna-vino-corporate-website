"use client";

import React from "react";
import ThematicCard from "../Card/ThematicCard";
import { useLanguage } from "@/app/context/LanguageContext";

const ThematicCardsValues = () => {
  const { translations } = useLanguage();
  return (
    <div
      className="flex flex-col justify-center items-center mx-1 -mt-12 mb-4 lg:-mt-8 lg:mb-8 lg:mx-2"
      data-testid="thematicGrid"
    >
      <div
        className="flex flex-wrap justify-around w-full gap-x-4 gap-y-2 lg:gap-2"
        data-testid="thematicGrid"
      >
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-territoriality.png"
          cardVariant="variant1"
          smallCardSize="small"
          title={translations["thematic.h1"]}
          descriptionStart={translations["thematic.p1-start"]}
          descriptionEnd={translations["thematic.p1-end"]}
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-craftsmanship.png"
          cardVariant="variant2"
          smallCardSize="small2"
          title={translations["thematic.h2"]}
          descriptionStart={translations["thematic.p2-start"]}
          descriptionEnd={translations["thematic.p2-end"]}
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-yeast.png"
          cardVariant="variant1"
          smallCardSize="big"
          title={translations["thematic.h3"]}
          descriptionStart={translations["thematic.p3-start"]}
          descriptionEnd={translations["thematic.p3-end"]}
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-minimal.png"
          cardVariant="variant2"
          smallCardSize="medium"
          title={translations["thematic.h4"]}
          descriptionStart={translations["thematic.p4-start"]}
          descriptionEnd={translations["thematic.p4-end"]}
        />
      </div>
    </div>
  );
};

export default ThematicCardsValues;
