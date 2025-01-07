"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PhotoCard = ({
  imageUrl,
  title,
  smallScreenTitle,
  description,
  buttonIcon,
  buttonLabel,
  backgroundColor,
  fontColor,
  buttonBgColor,
  buttonFontColor,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280); // Tailwind xl breakpoint = 1280px
    };

    handleResize(); // Initialize on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="photoDiv relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[37.5rem] xl:flex-row xl:flex-row xl:w-[35.2rem] xl:h-[26.8rem] 2xl:w-[39.6rem] 2xl:h-[30.15rem] 3xl:w-[44rem] 3xl:h-[33.5rem]"
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
          <button
            className="flex items-center justify-center w-[12.125rem] h-[2.8rem] xl:w-[10.9125rem] xl:h-[2.5rem] 2xl:w-[10.9125rem] 2xl:h-[2.7rem] 3xl:w-[12.125rem] 3xl:h-[3rem] gap-2 px-4 py-2 rounded"
            style={{
              backgroundColor: buttonBgColor,
            }}
            aria-label={`Click to ${buttonLabel}`}
          >
            <img src={buttonIcon} alt={`${buttonLabel} icon`}></img>
            <span
              className="font-medium text-labelLarge xl:text-labelMedium 3xl:text-labelLarge"
              style={{ color: buttonFontColor }}
            >
              {buttonLabel}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
PhotoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Image URL must be a string and is required
  title: PropTypes.string.isRequired, // Title must be a string and is required
  smallScreenTitle: PropTypes.string, // Title must be a string and is required
  description: PropTypes.string.isRequired, // Description must be a string and is required
  buttonIcon: PropTypes.string, // Icon URL should be a string (optional)
  buttonLabel: PropTypes.string.isRequired, // Button label must be a string and is required
  backgroundColor: PropTypes.string.isRequired, // Background color must be a string and is required
  fontColor: PropTypes.string.isRequired, // Font color must be a string and is required
  buttonBgColor: PropTypes.string.isRequired, // Button background color must be a string and is required
  buttonFontColor: PropTypes.string.isRequired, // Button font color must be a string and is required
};

PhotoCard.defaultProps = {
  buttonIcon: null, // Default value for the optional buttonIcon
};

export default PhotoCard;
