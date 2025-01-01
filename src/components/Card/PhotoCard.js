import React from "react";
import PropTypes from "prop-types";
import "./PhotoCard.css";

const PhotoCard = ({
  imageUrl,
  title,
  description,
  buttonIcon,
  buttonLabel,
  backgroundColor,
  fontColor,
  buttonBgColor,
  buttonFontColor,
}) => {
  return (
    <div
      className="border-1 rounded-3xl flex flex-row photoDiv"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="rounded-3xl object-fill h-full object-center cardImg"
      ></img>
      <div className="w-auto">
        <h3
          className="text-displayMedium font-barlow pl-6 pb-8 pt-14"
          style={{ color: fontColor }}
        >
          {title}
        </h3>
        <p
          className="font-barlow text-bodyLarge font-regular pl-6 pb-8"
          style={{ color: fontColor }}
        >
          {description}
        </p>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 ml-5 mt-2 rounded photoBtn"
          style={{
            backgroundColor: buttonBgColor,
          }}
        >
          <img src={buttonIcon} alt={`${buttonLabel} icon`}></img>
          <span style={{ color: buttonFontColor }}>{buttonLabel}</span>
        </button>
      </div>
    </div>
  );
};

// Prop validation
PhotoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Image URL must be a string and is required
  title: PropTypes.string.isRequired, // Title must be a string and is required
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
