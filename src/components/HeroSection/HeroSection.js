import React from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const HeroSection = () => {
  const { translations } = useLanguage();
  return (
    <section
      className="mt-6 relative flex justify-between flex-col w-full md:h-[44rem] md:flex-row bg-primary-light"
      role="banner"
      aria-label="Hero Section"
      aria-labelledby="title"
      data-testid="hero-section"
    >
      <div
        className="relative flex flex-col p-4 md:p-8 pt-8 sm:pt-4 gap-8 text-left sm:gap-8 justify-center md:w-1/2"
        data-testid="hero-text-container"
      >
        <img
          src="/design-elements/Dotted Shape.svg"
          alt="Decorative dotted shape"
          className="absolute top-3 md:top-[73px] md:left-8 right-7 w-[3rem] h-[3rem] md:w-[4.8rem] md:h-[4.8rem]"
          data-testid="dotted-shape-1"
        />
        <img
          src="/design-elements/Dotted Shape.svg"
          alt="Decorative dotted shape"
          className="absolute top-[4.375rem] md:top-8 md:left-[133.4px] right-1.5 w-[3rem] h-[3rem] md:w-[4.8rem] md:h-[4.8rem]"
          data-testid="dotted-shape-2"
        />
        <img
          src="/design-elements/Dotted Shape.svg"
          alt="Decorative dotted shape"
          className="absolute top-[294px] md:right-8 md:top-[530px] right-4 w-[3rem] h-[3rem] md:w-[93px] md:h-[93px]"
          data-testid="dotted-shape-3"
        />
        <img
          src="/design-elements/Dotted Shape.svg"
          alt="Decorative dotted shape"
          className="absolute top-[318px] md:top-[579px] right-[82px] md:right-[169px] w-[3rem] h-[3rem] md:w-[93px] md:h-[93px]"
          data-testid="dotted-shape-4"
        />
        <h1
          className="text-displayMedium md:text-displayLarge text-tertiary1-darker font-barlow z-10 w-[20.5rem] xl:w-[40rem]"
          id="title"
          data-testid="title"
        >
          {translations["hero.heading"]}
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker z-10"
          data-testid="description"
        >
          {translations["hero.paragraph"]}
        </p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full gap-4 sm:flex-row z-10">
            <Button
              text={translations["hero.button-left"]}
              icon="/icons/cart.svg"
              variant="red"
              ariaLabel="Visit our shop"
              testId="get-started-button"
            />
            <Button
              text={translations["hero.button-right"]}
              icon="/icons/speech-bubble-19.svg"
              variant="redLine"
              ariaLabel="Contact us"
              testId="secondary-button"
            />
          </div>
        </div>
      </div>

      <div className="relative justify-center h-[22rem] md:h-[44rem] md:w-1/2 w-full">
        <video
          className="inset-0 h-[22rem] rounded-t-[6.8rem] md:h-[44rem] md:rounded-tl-[6.8rem] rounded-b-[0.5rem] md:rounded-b-none md:rounded-tr-none object-cover"
          autoPlay
          loop
          muted
          role="region"
          aria-label="Background video for Hero Section"
          aria-hidden="true"
          data-testid="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dmjo57kua/video/upload/v1735578255/Sequence_01_dnkdcc.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
