import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col w-full sm:flex-row h-auto bg-primary-light"
      role="banner"
      aria-label="Hero Section"
      aria-labelledby="title"
    >
      <div
        className="relative flex flex-col gap-8 justify-center h-[60%] text-left p-4 pt-8"
        data-testid="hero-text-container"
      >
        <h1
          className="text-displayLarge text-tertiary1-normal font-light text-[45px] leading-[52px] tracking-[0] font-barlow pt-1"
          id="title"
          data-testid="title"
        >
          Welcome to Donna Vino, your unique wine experience.
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker font-light"
          data-testid="description"
        >
          Discover unique wine stories told by your sommelier while your private
          chef customizes the menu.
        </p>
        <button
          className="bg-primary-normal text-white w-[332px] h-[48px] rounded-[6px] px-[24px] py-[12px] flex justify-center items-center"
          data-testid="get-started-button"
        >
          <img src="/icons/cart.svg" alt="Cart" className="mr-2" />
          Visit our shop
        </button>
        <button
          className="bg-primary-light border-2 border-primary-normal text-primary-normal w-[332px] h-[48px] rounded-[6px] px-[24px] py-[12px] flex justify-center items-center
          hover:border-primary-normal-active hover:text-primary-normal-active 
          active:border-primary-normal-active active:text-primary-normal-active"
          data-testid="secondary-button"
        >
          <img src="/icons/speech-bubble-19.svg" alt="Cart" className="mr-2" />
          Contact us
        </button>
      </div>

      <div className="relative justify-center w-full h-auto sm:w-40% sm:h-auto">
        <video
          className="absolute inset-0 w-full sm:h-full object-cover"
          autoPlay
          loop
          muted
          role="region"
          aria-label="Background video for Hero Section"
          aria-hidden="true"
          data-testid="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dxnptdhrp/video/upload/v1735508300/sgx733bdfjq7rvcv9x7p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;