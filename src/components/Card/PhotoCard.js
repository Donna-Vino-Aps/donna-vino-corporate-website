"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const PhotoCard = ({
  imageUrl,
  title,
  description,
  buttonIcon,
  buttonLabel,
  backgroundColor,
  fontColor,
  buttonVariant,
  buttonTestId,
}) => {
  return (
    <div
      className="photoDiv relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[37.5rem] xl:flex-row xl:w-[35.2rem] xl:h-[26.8rem] 2xl:w-[39.6rem] 2xl:h-[30.15rem] 3xl:w-[44rem] 3xl:h-[33.5rem]"
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
          className="cardHeading relative text-headlineLarge xl:text-displaySmall 3xl:text-displayMedium font-barlow font-medium mb-7 mt-1 xl:mb-3 xl:mt-1 xl:mb-5 2xl:mb-6 xl:bottom-2 2xl:bottom-1 3xl:mb-7"
          style={{ color: fontColor }}
          aria-label={`Card title: ${isSmallScreen ? smallScreenTitle : title}`}
        >
          {isSmallScreen ? smallScreenTitle : title}
        </h3>
        <p
          className="cardDescription relative font-barlow text-bodyLarge xl:text-bodyMedium 2xl:text-bodyLarge font-regular mb-8 rounded xl:bottom-2 2xl:bottom-2 3xl:bottom-3"
          style={{ color: fontColor }}
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center mt-2 xl:mt-0 xl:bottom-7 xl:left-auto xl:translate-x-0 xl:justify-start xl:ml-1 2xl:bottom-8 3xl:bottom-8">
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
  smallScreenTitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  buttonTestId: PropTypes.string.isRequired,
};

PhotoCard.defaultProps = {
  buttonIcon: null,
};

export default PhotoCard;
