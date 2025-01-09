import React from "react";
import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const OurValues = () => {
  return (
    <main
      className="relative flex flex-col items-center justify-start w-full h-[auto] gap-8 p-[0.5rem] pt-[1rem] bg-primary-light z-10 sm:grid sm:grid-col-2"
      role="main"
      aria-labelledby="our-values-title"
      data-testid="our-values-main"
    >
      <PhotoGallery />
      <article
        className="flex flex-col gap-4 justify-start z-20"
        data-testid="text-column"
        aria-labelledby="our-values-title"
      >
        {/* absolute bottom-0 left-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem] */}
        <div className="subtitle-container">
          <p
            className="text-headlineMedium text-primary-normal"
            aria-label="Our Values Section Subtitle"
            data-testid="subtitle"
          >
            Our Values
          </p>
        </div>
        <header className="relative">
          <h2
            className="relative text-displayLarge text-tertiary1-darker"
            data-testid="title"
          >
            Donna Vino Values
          </h2>
          <img
            src="/design-elements/Dotted Shape 2.svg"
            alt=""
            className="absolute top-[4.60rem] right-[0rem] w-[8.37rem] h-[6.62rem] z-1"
            data-testid="dotted-shape-4"
          />
        </header>
        <p
          className="text-titleMedium text-tertiary1-darker"
          data-testid="intro-paragraph "
        >
          Welcome to Donna Vino
        </p>
        <p
          className="text-titleMedium text-tertiary1-darker"
          data-testid="intro-paragraph-description"
        >
          Your destination for authentic Italian flavours.
        </p>

        <p
          className="text-titleMedium text-tertiary1-darker"
          data-testid="description-paragraph"
        >
          Donna Vino is the result of former Michelin sommelier Katrine
          Giorgio's passion for unique Italian wine. The vision is to provide
          guests with unique Italian flavours and the opportunity to discover
          wines from passionate winemakers who prioritise sustainable
          production. Unique flavours and sustainability go hand in hand for
          several reasons.
        </p>
      </article>

      <Carousel />
    </main>
  );
};

export default OurValues;
