import React from "react";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section
      className="sm:mt-6 relative flex justify-between flex-col h-[53.2rem] w-screen sm:h-[44rem] sm:flex-row  bg-primary-light "
      role="banner"
      aria-label="Hero Section"
      aria-labelledby="title"
    >
      <div
        className="relative flex flex-col p-4 pt-8 sm:pt-4 gap-8 h-[31.6rem] justify-center sm:w-[44rem] sm:h-[44rem] sm:justify-center text-left sm:gap-8 m-0"
        data-testid="hero-text-container"
      >
        <div className="absolute top-[0.7rem] right-[0.5rem] sm:top-[0rem] sm:right-[0rem] sm:relative flex justify-end sm:justify-start z-0 overflow-hidden">
          <div className="relative w-[4.5rem] h-[6.75rem] sm:w-[10.35rem] sm:h-[6.93rem]">
            <img
              src="/design-elements/Dotted Shape.svg"
              alt=""
              className="absolute top-0 left:0 sm:top-auto sm:top-0 sm:right-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
              data-testid="dotted-shape-1"
            />
            <img
              src="/design-elements/Dotted Shape.svg"
              alt=""
              className="absolute bottom-0 right-0 sm:bottom-0 sm:left-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
              data-testid="dotted-shape-2"
            />
          </div>
        </div>

        <h1
          className="text-displayMedium sm:text-displayLarge text-tertiary1-normal font-barlow z-10"
          id="title"
          data-testid="title"
        >
          Welcome to Donna Vino, your unique wine experience.
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker z-10"
          data-testid="description"
        >
          Discover unique wine stories told by your sommelier while your private
          chef customizes the menu.
        </p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full gap-4 sm:flex-row z-10">
            <Button
              text="Visit Our Shop"
              icon="/icons/cart.svg"
              variant="primary"
              ariaLabel="Visit our shop"
              testId="get-started-button"
            />

            <Button
              text="Contact Us"
              icon="/icons/speech-bubble-19.svg"
              variant="secondary"
              ariaLabel="Contact us"
              testId="secondary-button"
            />
          </div>
          <div className="absolute top-[15.8rem] right-[0.5rem] sm:top-auto sm:right-auto sm:relative flex justify-end overflow-hidden">
            <div className="relative w-[7.5rem] h-[4.5rem] sm:w-[13.75rem] sm:h-[8.68rem] mb-[1rem] sm:mb-[0rem] z-0">
              <img
                src="/design-elements/Dotted Shape.svg"
                alt=""
                className="absolute top-0 right-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
                data-testid="dotted-shape-3"
              />
              <img
                src="/design-elements/Dotted Shape.svg"
                alt=""
                className="absolute bottom-0 left-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
                data-testid="dotted-shape-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative justify-center h-[22rem] sm:w-[45rem] sm:h-[44rem]">
        <video
          className="inset-0 h-[22rem] rounded-t-[6.8rem] sm:w-[45rem] sm:h-[44rem] sm:rounded-tl-[6.8rem] sm:rounded-tr-none object-cover"
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
