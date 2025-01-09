import React from "react";

const FloatingButton = () => {
  return (
    <button
      className="bg-primary-active_normal w-10 h-10 hover:bg-primary-hover_normal 
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
