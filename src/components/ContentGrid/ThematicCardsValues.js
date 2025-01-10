"use client";

import React from "react";
import ThematicCard from "../Card/ThematicCard";

const ThematicCardsValues = () => {
  return (
    <div className="flex justify-center items-center mt-3 mb-3 lg:mt-4 lg:mb-8 lg:ml-1 lg:mr-1">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:gap-3 lg:grid-cols-1 gap-2"
        data-testid="thematicGrid"
      >
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-territoriality.png"
          imgPos="left"
          smallCardSize="small"
          title="Territoriality"
          descriptionStart="Sustainably farmed vineyards prioritize healthy soil and a thriving ecosystem, fostering biodiversity that enhances the quality and character of the grapes"
          descriptionEnd=". This meticulous approach to farming not only protects the environment but also allows the wines to authentically reflect the unique terroir in which they are cultivated. The result is a distinctive flavor profile that captures the essence of the land, offering a true expression of its climate, soil composition, and natural surroundings. By choosing sustainably produced wines, you support practices that prioritize long-term environmental stewardship while enjoying exceptional wines crafted with care and respect for nature."
          backgroundColor="#E8ECE9"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-craftsmanship.png"
          imgPos="right"
          smallCardSize="small2"
          title="Craftsmanship"
          descriptionStart="A meticulous approach to every step of the winemaking process, from vineyard to bottle, ensures a richer flavor profile, greater complexity, and unique"
          descriptionEnd=" characteristics that reflect both the terroir and the winemaker's distinct style. This dedication begins with careful cultivation of the vines, fostering healthy grapes that embody the essence of the land. It continues through precise harvesting, fermentation, and aging techniques, each tailored to enhance the wine’s natural qualities. The result is a harmonious blend of tradition, craftsmanship, and innovation, delivering wines that tell a story of their origin while showcasing the artistry of the winemaker."
          backgroundColor="#B7C3BC"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-yeast.png"
          imgPos="left"
          smallCardSize="big"
          title="Natural yeast strains"
          descriptionStart="The use of natural yeast strains, naturally present on the grapes and within the winery, rather than commercial yeast strains"
          descriptionEnd=", plays a pivotal role in creating wines with a distinctive character. This approach not only enhances the authenticity of the winemaking process but also contributes to a broader spectrum of aromas and flavor profiles. By embracing the wild yeasts native to the vineyard and cellar environment, winemakers allow the unique terroir to shine through, capturing the subtle nuances of the region’s soil, climate, and grape variety. This commitment to natural fermentation results in wines that are complex, expressive, and deeply rooted in their origin, offering a true reflection of nature’s influence and the artistry of the winemaker."
          backgroundColor="#E8ECE9"
        />
        <ThematicCard
          imageUrl="/images/thematic-cards/thematic-minimal.png"
          imgPos="right"
          smallCardSize="medium"
          title="Minimal intervention"
          descriptionStart="The winemakers prioritize a minimalist approach, allowing the grapes and the unique qualities of the vineyard to take center stage"
          descriptionEnd=". By avoiding excessive manipulation, additives, or chemicals, they craft wines that reflect the true essence of their origin. The result is a genuine and authentic flavor profile, showcasing the purity of the fruit and the natural character of the terroir. This commitment to letting nature lead creates wines that are both expressive and harmonious, offering an honest representation of the vineyard's identity."
          backgroundColor="#B7C3BC"
        />
      </div>
    </div>
  );
};

export default ThematicCardsValues;
