"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const PhotoCardSmaller = ({
  imageUrl,
  title,
  description,
  fontColor,
  backgroundColor,
  buttonLabel,
  buttonVariant,
  buttonTestId,
}) => {
  return (
    <div
      className="photoDiv relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[32.125rem] xl:flex-row xl:flex-row xl:w-[35.2rem] xl:h-[22.8rem] 2xl:w-[39.6rem] 2xl:h-[25.65rem] 3xl:w-[44rem] 3xl:h-[28.5rem]"
      data-testid="photoDiv"
      style={{
        backgroundColor: backgroundColor,
      }}
      aria-label={`Photo card with title: ${title}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="cardImg object-cover h-[12.375rem] w-[21.5rem] xl:h-full xl:w-[20.6rem] 2xl:w-[23.175rem] 3xl:w-[25.75rem]"
        aria-label={`Image representing ${title}`}
      ></img>
      <div className="flex flex-col justify-center p-6">
        <h3
          className="cardHeading relative text-displaySmall mt-2 xl:mt-0 xl:text-headlineLarge 2xl:text-displaySmall 3xl:text-displayMedium font-barlow font-medium mb-7 xl:bottom-5 xl:mb-3 xl:mb-2 2xl:mb-3 3xl:mb-4"
          style={{ color: fontColor }}
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        <p
          className="cardDescription relative font-barlow text-bodyLarge xl:text-bodyMedium 2xl:text-bodyLarge font-regular mb-7 xl:mt-1 rounded xl:bottom-2 2xl:bottom-2 3xl:bottom-3"
          style={{ color: fontColor }}
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center mt-2 xl:mt-0 xl:bottom-11 xl:left-auto xl:translate-x-0 xl:justify-start 2xl:bottom-12 3xl:bottom-16">
          <Button
            text={buttonLabel}
            icon={buttonIconUrl}
            variant={buttonVariant}
            ariaLabel={buttonLabel}
            testId={buttonTestId}
          />
        </div>
      </div>
    </div>
  );
};

// Prop validation
PhotoCardSmaller.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Image URL must be a string and is required
  title: PropTypes.string.isRequired, // Title must be a string and is required
  description: PropTypes.string.isRequired, // Description must be a string and is required
  fontColor: PropTypes.string.isRequired, // Font color must be a string and is required
  backgroundColor: PropTypes.string.isRequired, // Background color must be a string and is required
  buttonLabel: PropTypes.string.isRequired, // Button label must be a string and is required
  buttonVariant: PropTypes.string.isRequired, // Background color must be a string and is required
  buttonTestId: PropTypes.string.isRequired, // Font color must be a string and is required
};

export default PhotoCardSmaller;
