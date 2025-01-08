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
    <div className="w-full max-w-[30.25rem] mx-auto">
      <div className="relative w-full h-[25rem] rounded-[15px] overflow-hidden">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center"
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
