import React from "react";
import PropTypes from "prop-types";
// import "./InfoCard.css";

const InfoCard = ({
  title,
  descriptionPart1,
  descriptionPart2,
  descriptionPart3,
  buttonIcon,
  buttonLabel,
  backgroundColor,
  fontColor,
  buttonBgColor,
  buttonFontColor,
}) => {
  return (
    <div
      className="infoDiv relative p-4 xl:p-3 rounded-3xl flex flex-col w-[21.5rem] h-[37.5rem] xl:w-[35.2rem] xl:h-[26.8rem] 2xl:w-[39.6rem] 2xl:h-[30.15rem] 3xl:w-[44rem] 3xl:h-[33.5rem]"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h3
        className="text-headlineMedium md:text-headlineMedium xl:text-displaySmall 2xl:text-displayMedium 3xl:text-displayLarge font-barlow font-medium pl-4 pb-6 pt-8 xl:pt-6 xl:pb-5 2xl:pb-6 2xl:pt-8"
        style={{ color: fontColor }}
      >
        {title}
      </h3>
      <p
        className="font-barlow text-bodyMedium xl:text-bodyMedium 2xl:text-bodyMediumLarge 3xl:text-bodyLarge font-regular xl:mb-2 2xl:mb-0 pl-4"
        style={{ color: fontColor }}
      >
        {descriptionPart1}
        <br />
        <br />
        {descriptionPart2}
        <br />
        <br />
        {descriptionPart3}
        <br />
        <br />
      </p>
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 xl:left-4 xl:bottom-5 xl:transform-none xl:justify-start flex justify-center items-center 2xl:bottom-8">
        <button
          className="flex items-center justify-center w-[12.125rem] h-[2.8rem] xl:w-[10.9125rem] xl:h-[2.5rem] 2xl:w-[10.9125rem] 2xl:h-[2.7rem] 3xl:w-[12.125rem] 3xl:h-[3rem] gap-2 px-4 py-2 xl:ml-5 rounded"
          style={{
            backgroundColor: buttonBgColor,
          }}
        >
          <img src={buttonIcon} alt={`${buttonLabel} icon`}></img>
          <span
            className="font-medium text-labelLarge 3xl:text-labelLarge"
            style={{ color: buttonFontColor }}
          >
            {buttonLabel}
          </span>
        </button>
      </div>
    </div>
  );
};

// Prop validation
InfoCard.propTypes = {
  title: PropTypes.string.isRequired, // Title must be a string and is required
  descriptionPart1: PropTypes.string.isRequired, // Description must be a string and is required
  descriptionPart2: PropTypes.string.isRequired, // Description must be a string and is required
  descriptionPart3: PropTypes.string.isRequired, // Description must be a string and is required
  buttonIcon: PropTypes.string, // Icon URL should be a string (optional)
  buttonLabel: PropTypes.string.isRequired, // Button label must be a string and is required
  backgroundColor: PropTypes.string.isRequired, // Background color must be a string and is required
  fontColor: PropTypes.string.isRequired, // Font color must be a string and is required
  buttonBgColor: PropTypes.string.isRequired, // Button background color must be a string and is required
  buttonFontColor: PropTypes.string.isRequired, // Button font color must be a string and is required
};

InfoCard.defaultProps = {
  buttonIcon: null, // Default value for the optional buttonIcon
};

export default InfoCard;
