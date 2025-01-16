"use client";

import React from "react";
import ThematicCard from "../Card/ThematicCard";
import { useLanguage } from "@/app/context/LanguageContext";

const ThematicCardsValues = () => {
  const { translations } = useLanguage();
  return (
    <div
      className="flex flex-col justify-center items-center -mt-16 mb-4 lg:mb-8 lg:mx-1"
      data-testid="thematicGrid"
    >
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 lg:grid-cols-1 gap-2"
        data-testid="thematicGrid"
      >
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-territoriality.png"
          imgPos="left"
          smallCardSize="small"
          title={translations["thematic.h1"]}
          descriptionStart={translations["thematic.p1-start"]}
          descriptionEnd={translations["thematic.p1-end"]}
          backgroundColor="#E8ECE9"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-craftsmanship.png"
          imgPos="right"
          smallCardSize="small2"
          title={translations["thematic.h2"]}
          descriptionStart={translations["thematic.p2-start"]}
          descriptionEnd={translations["thematic.p2-end"]}
          backgroundColor="#B7C3BC"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-yeast.png"
          imgPos="left"
          smallCardSize="big"
          title={translations["thematic.h3"]}
          descriptionStart={translations["thematic.p3-start"]}
          descriptionEnd={translations["thematic.p3-end"]}
          backgroundColor="#E8ECE9"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-minimal.png"
          imgPos="right"
          smallCardSize="medium"
          title={translations["thematic.h4"]}
          descriptionStart={translations["thematic.p4-start"]}
          descriptionEnd={translations["thematic.p4-end"]}
          backgroundColor="#B7C3BC"
        />
      </div>
    </div>
  );
};

export default ThematicCardsValues;
