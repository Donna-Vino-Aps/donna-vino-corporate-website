"use client";
import React, { useState } from "react";

const Carousel = () => {
  const images = [
    {
      src: "/images/our-values/photo-1.png",
      alt: "A vineyard in summer with lush green vines",
    },
    {
      src: "/images/our-values/photo-2.png",
      alt: "A cork with the text: 'Life is too short to drink bad wine'",
    },
    {
      src: "/images/our-values/photo-3.png",
      alt: "A woman smiling while enjoying a glass of wine",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section
      className="relative flex flex-col w-full h-[30.25rem] sm:top-7 gap-6 xl:hidden"
      data-testid="carousel"
      role="region"
      aria-label="Image carousel"
    >
      <div
        className="w-full sm:w-[80%] md:w-[70%] lg:w-[55%] sm:mx-auto h-[25rem] rounded-[15px] overflow-hidden"
        data-testid="carousel-image-container"
        role="img"
        aria-labelledby={`carousel-image-${currentImageIndex}`}
      >
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover"
          data-testid="carousel-image"
          id={`carousel-image-${currentImageIndex}`}
          loading="lazy"
        />
      </div>

      <div
        className="flex justify-center gap-4"
        data-testid="carousel-controls"
        role="group"
        aria-label="Carousel controls"
      >
        <button
          onClick={handlePrevious}
          className="w-[3.75rem] h-[3.75rem] rounded-full bg-primary-dark text-primary-light flex items-center justify-center active:bg-primary-hover_normal mr-[4px]"
          aria-label="Previous image"
          data-testid="carousel-previous-button"
        >
          <img
            src="/icons/arrow-left.svg"
            alt="Previous arrow"
            data-testid="icon-previous-arrow"
            loading="lazy"
            role="presentation"
          ></img>
        </button>
        <button
          onClick={handleNext}
          className="w-[3.75rem] h-[3.75rem]  rounded-full bg-primary-dark text-primary-light flex items-center justify-center active:bg-primary-hover_normal ml-[4px]"
          aria-label="Next image"
          data-testid="carousel-next-button"
        >
          <img
            src="/icons/arrow-right.svg"
            alt="Next arrow"
            data-testid="icon-next-arrow"
            loading="lazy"
            role="presentation"
          ></img>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
