"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const VARIANT_CLASSES = {
  variant1: "bg-tertiary1-hover text-tertiary1-darker",
  variant2: "bg-secondary-normal text-secondary-light",
};

const PhotoCard = ({
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
      className={`relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[37.5rem] xl:flex-row xl:w-[35.2rem] xl:h-[26.8rem] 2xl:w-[39.6rem] 2xl:h-[30.15rem] 3xl:w-[44rem] 3xl:h-[33.5rem] ${variantClass}`}
      data-testid="photoDiv"
      aria-label={`Photo card with title: ${title}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="object-cover h-[12.375rem] w-[21.5rem] xl:h-full xl:w-[20.6rem] 2xl:w-[23.175rem] 3xl:w-[25.75rem]"
        data-testid="card-image"
        aria-label={`Image representing ${title}`}
      />
      <div
        className="flex flex-col justify-center p-6"
        data-testid="card-content"
      >
        <h3
          className="relative text-headlineLarge xl:text-displaySmall 3xl:text-displayMedium font-barlow font-medium mb-7 mt-1 xl:mb-3 xl:mt-1 xl:mb-5 2xl:mb-6 xl:bottom-2 2xl:bottom-1 3xl:mb-7"
          data-testid="card-title"
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        <p
          className="relative font-barlow text-bodyLarge xl:text-bodyMedium 2xl:text-bodyLarge font-regular mb-8 rounded xl:bottom-2 2xl:bottom-2 3xl:bottom-3"
          data-testid="card-description"
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center mt-2 xl:mt-0 xl:bottom-7 xl:left-auto xl:translate-x-0 xl:justify-start xl:ml-1 2xl:bottom-8 3xl:bottom-8"
          data-testid="card-button-container"
        >
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

PhotoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  buttonTestId: PropTypes.string.isRequired,
  cardVariant: PropTypes.oneOf(["variant1", "variant2"]),
};

PhotoCard.defaultProps = {
  buttonIcon: null,
  cardVariant: "variant1", // Default variant
};

export default PhotoCard;
