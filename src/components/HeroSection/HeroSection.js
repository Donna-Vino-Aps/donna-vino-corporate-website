import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-row w-800 h-450 bg-primary-light">
      {/* Overlay Text*/}
      <div className="relative flex flex-col justify-center items-start text-left w-full p-8">
        <h1 className="text-displayLarge  text-tertiary1-normal font-light font-barlow mb-4">
          Welcome to Donna Vino, your unique wine experience.
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker font-light"
          data-testid="description"
        >
          Discover unique wine stories told by your sommelier while your private
          chef customizes the menu.
        </p>
      </div>

      {/* Video Background */}
      <div className="relative flex flex-col justify-center items-start text-left w-full">
        <video
          className="absolute inset-0 w-[60vh] h-[40vh] object-cover autoPlay loop muted"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/Sequence 01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
