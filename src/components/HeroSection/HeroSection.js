import React from "react";

const OurValues = () => {
  return (
    <section
      className="relative flex flex-col sm:flex-row justify-between bg-primary-light py-10 sm:py-16 px-4 sm:px-8"
      role="region"
      aria-label="Our Values Section"
    >
      {/* Column 1: Two Images */}
      <div
        className="flex flex-col gap-4 sm:gap-8 justify-center items-center sm:w-1/3"
        data-testid="our-values-images-1"
      >
        <img
          src="Img.png"
          alt="Description of image 1"
          className="w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] object-cover rounded-lg"
          data-testid="image-1"
        />
        <img
          src="/path/to/image2.jpg"
          alt="Description of image 2"
          className="w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] object-cover rounded-lg"
          data-testid="image-2"
        />
      </div>

      {/* Column 2: Single Image */}
      <div
        className="flex justify-center items-center sm:w-1/3"
        data-testid="our-values-image-2"
      >
        <img
          src="/path/to/image3.jpg"
          alt="Description of image 3"
          className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] object-cover rounded-lg"
          data-testid="image-3"
        />
      </div>

      {/* Column 3: Text Content */}
      <div
        className="flex flex-col justify-center items-start gap-4 sm:w-1/3"
        data-testid="our-values-text"
      >
        <p
          className="text-bodySmall sm:text-bodyMedium text-tertiary1-normal font-semibold"
          aria-label="Small red text"
        >
          Our Values
        </p>
        <h2
          className="text-displaySmall sm:text-displayMedium text-tertiary1-darker font-barlow"
          aria-labelledby="section-title"
        >
          Donna Vino Values
        </h2>
        <p className="text-bodySmall sm:text-bodyMedium text-tertiary1-normal leading-relaxed">
          Welcome to Donna Vino, your destination for authentic Italian
          flavours. Donna Vino is the result of former Michelin sommelier
          Katrine Giorgio's passion for unique Italian wine. The vision is to
          provide guests with unique Italian flavours and the opportunity to
          discover wines from passionate winemakers who prioritize sustainable
          production. Unique flavours and sustainability go hand in hand for
          several reasons.
        </p>
      </div>
    </section>
  );
};

export default OurValues;
