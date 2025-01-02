import React from "react";

const HeroSection = () => {
  return (
    <section
      className="sm:my-6 relative flex justify-between flex-col h-[53.2rem] w-screen sm:w-screen sm:h-[44rem] sm:flex-row  bg-primary-light"
      role="banner"
      aria-label="Hero Section"
      aria-labelledby="title"
    >
      <div
        className="relative flex flex-col p-4 pt-8 gap-8 h-[31.6rem] justify-center sm:w-[44rem] sm:h-[44rem] sm:justify-center text-left sm:gap-8 p-4 pt-8 m-0"
        data-testid="hero-text-container"
      >
        <div className="relative flex justify-end sm:justify-start">
          <div className="relative w-[4.5rem] h-[6.75rem] sm:w-[10.35rem] sm:h-[6.93rem]">
            <img
              src="/design-elements/Dotted Shape.svg"
              alt="Dotted Shape 1"
              className="absolute top-0 right-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
            />
            <img
              src="/design-elements/Dotted Shape.svg"
              alt="Dotted Shape 2"
              className="absolute bottom-0 left-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
            />
          </div>
        </div>

        <h1
          className="text-displayMedium sm:text-displayLarge text-tertiary1-normal font-barlow "
          id="title"
          data-testid="title"
        >
          Welcome to Donna Vino, your unique wine experience.
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker"
          data-testid="description"
        >
          Discover unique wine stories told by your sommelier while your private
          chef customizes the menu.
        </p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full gap-4 sm:flex-row">
            <button
              className="bg-primary-normal flex justify-center items-center text-white h-[3rem] sm:w-[10.8rem] rounded-[0.3rem]"
              data-testid="get-started-button"
            >
              <img src="/icons/cart.svg" alt="Cart" className="mr-2" />
              Visit our shop
            </button>
            <button
              className="bg-primary-light border-2 border-primary-normal text-primary-normal h-[3rem] sm:w-[10.8rem] rounded-[0.3rem] flex justify-center items-center"
              data-testid="secondary-button"
            >
              <img
                src="/icons/speech-bubble-19.svg"
                alt="Cart"
                className="mr-2"
              />
              Contact us
            </button>
          </div>
          <div className="flex justify-end">
            <div className="relative w-[7.5] h-[4.5rem] sm:w-[13.75rem] sm:h-[8.68rem]">
              <img
                src="/design-elements/Dotted Shape.svg"
                alt="Dotted Shape 1"
                className="absolute sm:top-0 sm:right-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
              />
              <img
                src="/design-elements/Dotted Shape.svg"
                alt="Dotted Shape 2"
                className="absolute sm:bottom-0 sm:left-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
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
