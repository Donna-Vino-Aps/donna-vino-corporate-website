import React from "react";
import Carousel from "../Carousel/Carousel";

const OurValues = () => {
  return (
    <main
      className="bg-primary-light w-full h-auto p-[0.5rem] pt-[1rem] gap-10"
      role="main"
      aria-labelledby="our-values-title"
      data-testid="our-values-main"
    >
      {/* <section
        className="w-[37.5rem] h-[41.8rem] flex justify-between hidden"
        data-testid="main-container"
        aria-labelledby="photo-gallery"
      >
        <div>
          <figure className="mb-4" data-testid="image-1-container">
            <img
              src="/images/our-values/photo-1.png"
              alt="A vineyard in summer with lush green vines"
              className="rounded-lg w-full h-auto"
              data-testid="image-1"
            />
          </figure>
          <figure data-testid="image-2-container">
            <img
              src="/images/our-values/photo-2.png"
              alt="A cork with the text: 'Life is too short to drink bad wine'"
              className="rounded-lg w-full h-auto"
              data-testid="image-2"
            />
          </figure>
        </div>
        <div
          className="w-[18.6rem] h-[25rem] flex flex-col items-start justify-start"
          data-testid="inner-container"
        >
          <figure
            className="w-full h-[16.8rem] mb-4"
            data-testid="image-3-container"
          >
            <img
              src="/images/our-values/photo-3.png"
              alt="A woman smiling while enjoying a glass of wine"
              className="rounded-lg w-full h-full object-cover"
              data-testid="image-3"
            />
          </figure>
        </div>
      </section> */}

      <article
        className=""
        data-testid="text-column"
        aria-labelledby="our-values-title"
      >
        <img
          src="/design-elements/Dotted Shape 2.svg"
          alt=""
          className="absolute top-[11.3rem] right-[0rem] w-[8.3rem] h-[6.6rem] "
          data-testid="dotted-shape-4"
        />
        {/* absolute bottom-0 left-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem] */}
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
      <Carousel />
    </main>
  );
};

export default OurValues;
