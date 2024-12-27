import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover autoPlay loop muted">
        <source src="/videos/Sequence 01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Text*/}
      <div
        className="absolute"
        inset-0
        flex
        flex-col
        justify-center
        items-center
        text-center
        bg-black
        bg-opacity-50
      >
        <h1 className="text-white text-displayLarge font-barlow mb-4">
          Welcome to Donna Vino, your unique wine experience.
        </h1>
        <p className="text-white text-bodyLarge font-roboto">
          Discover unique wine stories told by your sommelier while your private
          chef customizes the menu.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
