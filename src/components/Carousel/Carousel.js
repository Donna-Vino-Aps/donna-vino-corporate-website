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
    <div
      className="w-full max-w-[30.25rem] mx-auto"
      data-testid="carousel"
      role="region"
      aria-label="Image carousel"
    >
      <div
        className="relative w-full h-[25rem] rounded-[15px] overflow-hidden"
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
        />
      </div>

      <div
        className="flex justify-center mt-4 space-x-4"
        data-testid="carousel-controls"
        role="group"
        aria-label="Carousel controls"
      >
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-700"
          aria-label="Previous image"
          data-testid="carousel-previous-button"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-700"
          aria-label="Next image"
          data-testid="carousel-next-button"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
