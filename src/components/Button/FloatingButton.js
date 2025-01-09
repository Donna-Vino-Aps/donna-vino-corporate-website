import React from "react";

const FloatingButton = () => {
  return (
    <button
      className="bg-primary-active_normal w-8 h-8
            rounded-full shadow-lg flex justify-center items-center"
    >
      <img
        src="/icons/linkedin-alt-light.svg"
        alt="social media"
        className="w-4"
      />
    </button>
  );
};

export default FloatingButton;
