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
      className="photoDiv flex flex-row rounded-3xl overflow-hidden"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img src={imageUrl} alt={title} className="cardImg object-cover"></img>
      <div className="textContainer flex flex-col justify-center p-6">
        <h3
          className="text-displayMedium font-barlow mb-6 mt-2"
          style={{ color: fontColor }}
        >
          {title}
        </h3>
        <p
          className="font-barlow text-bodyLarge font-regular mb-8"
          style={{ color: fontColor }}
        >
          {description}
        </p>
        <button
          className="photoBtn flex items-center justify-center gap-2 px-4 py-2 rounded"
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
