"use client";

import React from "react";
import PropTypes from "prop-types";

const Button = ({
  text,
  icon,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  ariaLabel,
  testId,
  isLoading = false,
}) => {
  const buttonClass = `flex justify-center items-center text-white h-[3rem] rounded-[0.3rem] ${
    size === "large"
      ? "sm:w-[10.8rem]"
      : size === "small"
        ? "sm:w-[8rem]"
        : "sm:w-[10rem]"
  } ${
    variant === "primary"
      ? "bg-primary-normal hover:bg-primary-hover_normal text-white"
      : variant === "secondary"
        ? "bg-primary-light border-2 border-primary-normal text-primary-normal"
        : variant === "black"
          ? "bg-black text-white"
          : variant === "gray"
            ? "bg-gray-500 text-black"
            : variant === "darkRed"
              ? "bg-dark-red text-white"
              : variant === "transparentRed"
                ? "bg-transparent border-2 border-red-500 text-red-500"
                : "bg-transparent border-2 border-primary-normal text-primary-normal"
  } ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      data-testid={testId}
      type={variant === "submit" ? "submit" : "button"}
    >
      {isLoading ? (
        "Submitting..."
      ) : (
        <>
          {icon && <img src={icon} alt="Icon" className="mr-2" />}
          {text}
        </>
      )}
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "black",
    "gray",
    "darkRed",
    "transparentRed",
    "submit",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  testId: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Button;
