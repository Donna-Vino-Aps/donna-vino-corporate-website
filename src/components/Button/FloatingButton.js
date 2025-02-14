import React from "react";
import PropTypes from "prop-types";

const FloatingButton = ({ icon, url }) => {
  return (
    <a
      href={url}
      className="bg-primary-active_normal w-8 h-8 rounded-full shadow-lg flex justify-center items-center"
      data-testid="floating-button"
    >
      <img
        src={icon}
        alt="social media"
        data-testid="social-icon"
        className="w-4"
        loading="lazy"
      />
    </a>
  );
};

FloatingButton.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default FloatingButton;
