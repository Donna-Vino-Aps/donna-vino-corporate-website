import React from "react";
import Carousel from "../Carousel/Carousel";

const OurValues = () => {
  return (
    <section
      className="bg-primary-light h-[56.8rem]"
      role="region"
      aria-labelledby="our-values-title"
      data-testid="our-values-section"
    >
      <Carousel />
      <div
        className="container grid grid-cols-1 sm:grid-cols-3 gap-4"
        data-testid="our-values-container"
      >
        {/* Column 1: Two images */}
        <div className="col-span-1" data-testid="image-column-1">
          <figure className="mb-4" data-testid="image-1-container">
            <img
              src="/images/our-values/photo-1.png"
              alt="A vineyard in summer with lush green vines"
              className="rounded-lg"
              data-testid="image-1"
            />
            <figcaption className="sr-only">A vineyard in summer</figcaption>
          </figure>
          <figure data-testid="image-2-container">
            <img
              src="/images/our-values/photo-2.png"
              alt="A cork with the text: 'Life is too short to drink bad wine'"
              className="rounded-lg"
              data-testid="image-2"
            />
            <figcaption className="sr-only">
              A cork with motivational text
            </figcaption>
          </figure>
        </div>

        {/* Column 2: One image */}
        <div className="col-span-1" data-testid="image-column-2">
          <figure data-testid="image-3-container">
            <img
              src="/images/our-values/photo-3.png"
              alt="A woman smiling while enjoying a glass of wine"
              className="rounded-lg"
              data-testid="image-3"
            />
            <figcaption className="sr-only">Woman enjoying wine</figcaption>
          </figure>
        </div>

        {/* Column 3: Title and text */}
        <article className="col-span-1" data-testid="text-column">
          <header>
            <p
              className="text-sm text-red-500"
              aria-label="Our Values Section Subtitle"
              data-testid="subtitle"
            >
              Our Values
            </p>
            <h2
              id="our-values-title"
              className="text-2xl font-bold text-black"
              data-testid="title"
            >
              Donna Vino Values
            </h2>
          </header>
          <p data-testid="intro-paragraph">
            Welcome to Donna Vino
            <br />
            Your destination for authentic Italian flavours.
          </p>
          <p data-testid="description-paragraph">
            Donna Vino is the result of former Michelin sommelier Katrine
            Giorgio's passion for unique Italian wine. The vision is to provide
            guests with unique Italian flavours and the opportunity to discover
            wines from passionate winemakers who prioritise sustainable
            production. Unique flavours and sustainability go hand in hand for
            several reasons.
          </p>
        </article>
      </div>
    </section>
  );
};

export default OurValues;
