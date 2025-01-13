"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const VARIANT_CLASSES = {
  variant1: "bg-secondary-light text-secondary-normal",
  variant2: "bg-tertiary1-hover text-tertiary1-darker",
};

const PhotoCardSmaller = ({
  imageUrl,
  title,
  description,
  buttonIcon,
  buttonLabel,
  buttonVariant,
  buttonTestId,
  cardVariant,
}) => {
  const variantClass = VARIANT_CLASSES[cardVariant] || VARIANT_CLASSES.variant1; // Default to variant1

  return (
    <div
      className={`relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[32.125rem] xl:flex-row xl:w-[35.2rem] xl:h-[22.8rem] 2xl:w-[39.6rem] 2xl:h-[25.65rem] 3xl:w-[44rem] 3xl:h-[28.5rem] ${variantClass}`}
      data-testid="photo-card-smaller"
      aria-labelledby="photo-card-title"
      aria-describedby="photo-card-description"
    >
      <figure
        className="overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] sm:rounded-tr-none sm:rounded-tl-[2rem] sm:rounded-bl-[2rem]"
        data-testid="photo-card-image"
        aria-labelledby="photo-card-title"
      >
        <img
          src={imageUrl}
          alt={title}
          className="cardImg object-cover h-[12.375rem] w-[21.5rem] xl:h-full xl:w-[20.6rem] 2xl:w-[23.175rem] 3xl:w-[25.75rem]"
          aria-label={`Image representing ${title}`}
        />
      </figure>

      <div
        className="flex flex-col justify-center p-6"
        data-testid="photo-card-content"
      >
        <h3
          className="cardHeading relative text-displaySmall mt-2 xl:mt-0 xl:text-headlineLarge 2xl:text-displaySmall 3xl:text-displayMedium font-barlow font-medium mb-7 xl:bottom-5 xl:mb-3 xl:mb-2 2xl:mb-3 3xl:mb-4"
          id="photo-card-title"
          data-testid="photo-card-title"
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        <p
          className="cardDescription relative font-barlow text-bodyLarge xl:text-bodyMedium 2xl:text-bodyLarge font-regular mb-7 xl:mt-1 rounded xl:bottom-2 2xl:bottom-2 3xl:bottom-3"
          id="photo-card-description"
          data-testid="photo-card-description"
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        <div className="flex justify-center items-center">
          <Button
            text={buttonLabel}
            icon={buttonIcon}
            variant={buttonVariant}
            testId={buttonTestId}
            ariaLabel={buttonLabel}
          />
        </div>
      </div>
    </div>
  );
};

PhotoCardSmaller.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  buttonTestId: PropTypes.string.isRequired,
  cardVariant: PropTypes.oneOf(["variant1", "variant2"]),
};

PhotoCardSmaller.defaultProps = {
  buttonIcon: null,
  cardVariant: "variant1",
};

export default PhotoCardSmaller;
