import React from "react";
import PropTypes from "prop-types";
import "./InfoCard.css";

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
      className="infoDiv border-1 p-4 rounded-3xl flex flex-col"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <h3
        className="text-displayLarge font-regular pl-4 pb-8 pt-8"
        style={{ color: fontColor }}
      >
        {title}
      </h3>
      <p
        className="font-barlow text-bodyLarge font-regular pl-4 pb-1"
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
      <button
        className="flex items-center justify-center gap-2 px-4 py-2 ml-5 rounded infoBtn"
        style={{
          backgroundColor: buttonBgColor,
        }}
      >
        <img src={buttonIcon} alt={`${buttonLabel} icon`}></img>
        <span style={{ color: buttonFontColor }}>{buttonLabel}</span>
      </button>
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
