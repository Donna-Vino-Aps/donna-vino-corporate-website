"use client";

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const VARIANT_CLASSES = {
  variant1: "bg-tertiary1-hover text-tertiary1-darker",
  variant2: "bg-secondary-normal text-secondary-light",
};

const PhotoCard = ({
  imageUrl,
  title,
  description,
  buttonIcon,
  buttonLabel,
  buttonVariant,
  buttonTestId,
  cardVariant,
}) => {
  const variantClass = VARIANT_CLASSES[cardVariant] || VARIANT_CLASSES.variant1; // Default to variant1

  return (
    <article
      className={`relative flex flex-col rounded-[2rem] w-full h-[37.5rem] sm:h-[33.5rem] sm:flex-row gap-8 items-center ${variantClass}`}
      data-testid="photo-card"
      aria-labelledby="photo-card-title"
      aria-describedby="photo-card-description"
    >
      <figure
        className={`overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] sm:rounded-tr-none sm:rounded-tl-[2rem] sm:rounded-bl-[2rem] ${variantClass}`}
        data-testid="photo-card-image"
        aria-labelledby="photo-card-title"
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-cover h-[12.375rem] w-[21.5rem] sm:h-[33.5rem] sm:w-[25.75rem]"
          data-testid="card-image"
          aria-label={`Image representing ${title}`}
        />
      </figure>

      <div
        className="flex flex-col w-[18.5rem] sm:w-[18.25] gap-8 sm:p-6 sm:py-8 "
        data-testid="photo-card-content"
      >
        <h3
          className="text-displaySmall font-barlow font-medium "
          id="photo-card-title"
          data-testid="photo-card-title"
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        <p
          className="relative font-barlow text-bodyLarge sm:text-bodyMedium"
          id="photo-card-description"
          data-testid="photo-card-description"
          aria-label={`Card description: ${description}`}
        >
          {description}
        </p>
        <Button
          text={buttonLabel}
          icon={buttonIcon}
          variant={buttonVariant}
          testId={buttonTestId}
          ariaLabel={buttonLabel}
        />
      </div>
    </article>
  );
};

PhotoCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string.isRequired,
  buttonTestId: PropTypes.string.isRequired,
  cardVariant: PropTypes.oneOf(["variant1", "variant2"]),
};

PhotoCard.defaultProps = {
  buttonIcon: null,
  cardVariant: "variant1", // Default variant
};

export default PhotoCard;
