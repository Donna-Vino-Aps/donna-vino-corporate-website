"use client";
import React from "react";
import Carousel from "../Carousel/Carousel";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import { useLanguage } from "@/app/context/LanguageContext";

const OurValues = () => {
  const { translations } = useLanguage();
  return (
    <main className="relative pb-[2rem]">
      <section
        className="relative flex flex-col sm:flex-row items-center justify-center justify-start w-full h-auto sm:min-h-[56.87rem] p-4 pt-4 sm:p-0 sm:pt-0 bg-primary-light z-10"
        role="main"
        aria-labelledby="our-values-title"
        data-testid="our-values-main"
      >
        <div
          className=" flex flex-col sm:flex-row sm:order-last items-center justify-center gap-16"
          data-testid="photoGallery-container"
        >
          <PhotoGallery />
          <article
            className="flex flex-col relative sm:w-[19.37rem] md:w-[22.37rem] lg:w-[27.37rem] sm:right-3 md:right-10 lg:right-20 xl:right-0 gap-4 justify-start z-20"
            data-testid="text-column"
            aria-labelledby="our-values-title"
          >
            <div className="subtitle-container">
              <p
                className="text:headlineMedium sm:text-headlineSmall md:text-headlineMedium text-primary-normal"
                aria-label="Our Values Section Subtitle"
                data-testid="subtitle"
              >
                {translations["values.subheading"]}
              </p>
            </div>
            <header className="relative">
              <h2
                className="relative text-displayLarge sm:text-displaySmall md:text-displayMedium text-tertiary1-darker"
                data-testid="title"
              >
                {translations["values.heading"]}
              </h2>
              <img
                src="/design-elements/Dotted Shape 2.svg"
                alt=""
                className="absolute top-[4.60rem] right-[0rem] w-[8.37rem] h-[6.62rem] z-1 sm:hidden"
                data-testid="dotted-shape-4"
              />
            </header>
            <p
              className="text-bodyMedium md:text-titleMedium text-tertiary1-darker"
              data-testid="intro-paragraph "
            >
              {translations["values.p1"]}
            </p>
            <p
              className="text-bodyMedium md:text-titleMedium text-tertiary1-darker"
              data-testid="intro-paragraph-description"
            >
              {translations["values.p2"]}
            </p>

            <p
              className="text-bodyMedium md:text-titleMedium text-tertiary1-darker mb-6"
              data-testid="description-paragraph"
            >
              {translations["values.p3"]}
            </p>
          </article>
        </div>

        <Carousel />
      </section>
    </main>
  );
};

export default OurValues;
