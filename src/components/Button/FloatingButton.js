import React from "react";

const FloatingButton = () => {
  return (
    <button
      className="bg-primary-active_normal w-8 h-8
            rounded-full shadow-lg flex justify-center items-center"
      data-testid="floating-button"
    >
      <img
        src="/icons/linkedin-alt-light.svg"
        alt="social media"
        data-testid="social-icon"
        className="w-4"
        loading="lazy"
      />
    </button>
  );
};

export default FloatingButton;
