import React from "react";

const PhotoGallery = () => {
  return (
    <section
      className="grid grid-cols-2 w-[37.5rem] h-auto justify-between hidden sm:grid"
      data-testid="photo-gallery"
      aria-labelledby="photo-gallery"
    >
      {/* Column 1: Two images */}
      <div className="flex flex-col gap-4" data-testid="column-1 ">
        <figure data-testid="image-1-container">
          <img
            src="/images/our-values/photo-1.png"
            alt="A vineyard in summer with lush green vines"
            className="rounded-lg w-[16.87rem] h-[20rem]"
            data-testid="image-1"
            loading="lazy"
          />
        </figure>
        <figure data-testid="image-2-container">
          <img
            src="/images/our-values/photo-2.png"
            alt="A cork with the text: 'Life is too short to drink bad wine'"
            className="rounded-lg w-[16.87rem] h-[20rem]"
            data-testid="image-2"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Column 2: One image */}
      <div
        className="relative flex items-center justify-center "
        data-testid="inner-container"
      >
        <figure
          className="relative flex w-[18.68rem] h-[26.81rem]"
          data-testid="image-3-container"
        >
          <img
            src="/images/our-values/photo-3.png"
            alt="A woman smiling while enjoying a glass of wine"
            className="rounded-lg w-[16.87rem] h-[25rem] object-cover z-10"
            data-testid="image-3"
            loading="lazy"
          />
          <img
            src="/design-elements/Dotted Shape 2.svg"
            alt=""
            className="absolute bottom-[0rem] right-[0rem] w-[8.37rem] h-[6.62rem] hidden sm:block z-0"
            data-testid="dotted-shape-4"
            role="presentation"
          />
        </figure>
      </div>
    </section>
  );
};

export default PhotoGallery;
