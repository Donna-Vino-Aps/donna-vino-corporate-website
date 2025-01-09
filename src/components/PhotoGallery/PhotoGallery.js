import React from "react";

const PhotoGallery = () => {
  return (
    <section
      className="w-[37.5rem] h-[41.8rem] flex justify-between hidden"
      data-testid="main-container"
      aria-labelledby="photo-gallery"
    >
      {/* Column 1: Two images */}
      <div>
        <figure className="mb-4" data-testid="image-1-container">
          <img
            src="/images/our-values/photo-1.png"
            alt="A vineyard in summer with lush green vines"
            className="rounded-lg w-full h-auto"
            data-testid="image-1"
          />
        </figure>
        <figure data-testid="image-2-container">
          <img
            src="/images/our-values/photo-2.png"
            alt="A cork with the text: 'Life is too short to drink bad wine'"
            className="rounded-lg w-full h-auto"
            data-testid="image-2"
          />
        </figure>
      </div>

      {/* Column 2: One image */}
      <div
        className="w-[18.6rem] h-[25rem] flex flex-col items-start justify-start"
        data-testid="inner-container"
      >
        <figure
          className="w-full h-[16.8rem] mb-4"
          data-testid="image-3-container"
        >
          <img
            src="/images/our-values/photo-3.png"
            alt="A woman smiling while enjoying a glass of wine"
            className="rounded-lg w-full h-full object-cover"
            data-testid="image-3"
          />
        </figure>
      </div>
    </section>
  );
};

export default PhotoGallery;
