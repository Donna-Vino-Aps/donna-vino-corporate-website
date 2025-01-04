import React from "react";

const Button = ({
  text,
  icon,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  ariaLabel,
  testId,
}) => {
  const buttonClass = `flex justify-center items-center text-white h-[3rem] rounded-[0.3rem] ${
    size === "large"
      ? "sm:w-[10.8rem]"
      : size === "small"
        ? "sm:w-[8rem]"
        : "sm:w-[10rem]"
  } ${
    variant === "primary"
      ? "bg-primary-normal"
      : variant === "secondary"
        ? "bg-primary-light border-2 border-primary-normal text-primary-normal"
        : "bg-transparent border-2 border-primary-normal text-primary-normal"
  } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {icon && <img src={icon} alt="Icon" className="mr-2" />}
      {text}
    </button>
  );
};

export default Button;
