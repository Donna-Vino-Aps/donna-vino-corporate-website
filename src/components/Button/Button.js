"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const BASE_BUTTON_CLASSES = `
  flex justify-center items-center h-[3rem] rounded-[0.3rem] bodyLarge
`;

const VARIANT_CLASSES = {
  red: "bg-primary-normal hover:bg-primary-hover_normal text-primary-light w-full sm:w-[10.8rem]",
  redModal:
    "bg-primary-normal hover:bg-primary-hover_normal text-primary-light w-full min-w-[5.6rem] h-[2.4rem] text-bodyMedium sm:text-bodyLarge sm:h-[3rem] sm:w-[7.375rem]",
  redLine:
    "bg-transparent border-2 hover:bg-primary-hover border-primary-active_normal text-primary-active_normal w-full sm:w-[10.8rem]",
  darkGreen:
    "bg-secondary-darker hover:bg-secondary-hover_dark text-white w-full sm:w-[10.8rem]",
  darkGreenModal:
    "bg-secondary-darker hover:bg-secondary-hover_dark text-white w-full min-w-[8.8rem] sm:w-[10.8rem] h-[2.4rem] text-bodyMedium sm:text-bodyLarge sm:h-[3rem] sm:h-100",
  grayGreen:
    "bg-secondary-light hover:bg-secondary-hover text-secondary-darker w-full sm:w-[10.8rem]",
  greenSubmit:
    "w-full bg-[#183F27] hover:bg-[#153823] text-white font-barlow font-semibold py-3 ",
  redSubmit:
    "bg-primary-normal hover:bg-primary-hover_normal text-white rounded-lg w-full sm:w-[10.8rem]",
  gray: "bg-tertiary1-normal hover:bg-tertiary1-dark text-tertiary1-light w-full sm:w-[10.8rem]",
  redVerify:
    "bg-primary-normal hover:bg-primary-hover_normal text-primary-light font-medium w-full sm:w-[20rem]",
  greenGoHome:
    "bg-[#183F27] hover:bg-[#153823] text-white font-medium w-full sm:w-[14.5rem]",
};

const Button = ({
  text,
  icon,
  variant = "primary",
  onClick,
  disabled = false,
  ariaLabel,
  testId,
  isLoading = false,
  linkUrl,
  linkWidth,
}) => {
  const buttonClass = `
    ${BASE_BUTTON_CLASSES}
    ${VARIANT_CLASSES[variant] || ""}
    ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
  `.trim();

  const buttonContent = (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      data-testid={linkUrl ? undefined : testId}
      type={variant === "submit" ? "submit" : "button"}
    >
      {isLoading ? (
        "Submitting..."
      ) : (
        <>
          {icon && (
            <img src={icon} alt="Icon" className="mr-2" loading="lazy" />
          )}
          {text}
        </>
      )}
    </button>
  );

  return linkUrl ? (
    <Link
      href={linkUrl}
      data-testid={testId}
      className={linkWidth || "w-full sm:w-[10.8rem]"}
    >
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  variant: PropTypes.oneOf([
    "red",
    "redLine",
    "darkGreen",
    "grayGreen",
    "redSubmit",
    "gray",
    "redVerify",
    "greenGoHome",
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  testId: PropTypes.string,
  isLoading: PropTypes.bool,
  linkUrl: PropTypes.string, // optional
  linkWidth: PropTypes.string, // optional
};

export default Button;
