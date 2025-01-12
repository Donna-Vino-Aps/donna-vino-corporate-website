import React from "react";
import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Button from "../Button/Button";

const OurValues = () => {
  return (
    <main className="relative pb-[2rem]">
      <div className="px-2 py-4 sm:mx-8">
        <Button
          text="Go back"
          icon="/icons/back-arrow.svg"
          variant="darkGreen"
          ariaLabel="Go back"
          testId="go-back-button"
        />
      </div>

      <section
        className="relative flex flex-col items-center justify-center justify-start w-full h-auto sm:min-h-[56.87rem] p-4 pt-4 sm:p-0 sm:pt-0 bg-primary-light z-10"
        role="main"
        aria-labelledby="our-values-title"
        data-testid="our-values-main"
      >
        <div
          className=" flex flex-col sm:flex-row items-center justify-center gap-16"
          data-testid="photoGallery-container"
        >
          <PhotoGallery />
          <article
            className="flex flex-col sm:w-[29.37rem] gap-4 justify-start z-20"
            data-testid="text-column"
            aria-labelledby="our-values-title"
          >
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
                className="absolute top-[4.60rem] right-[0rem] w-[8.37rem] h-[6.62rem] z-1 sm:hidden"
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
              Giorgio's passion for unique Italian wine. The vision is to
              provide guests with unique Italian flavours and the opportunity to
              discover wines from passionate winemakers who prioritise
              sustainable production. Unique flavours and sustainability go hand
              in hand for several reasons.
            </p>
          </article>
        </div>

        <Carousel />
      </section>
    </main>
  );
};

export default OurValues;
