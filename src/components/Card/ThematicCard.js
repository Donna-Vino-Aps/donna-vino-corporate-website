import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "@/app/context/LanguageContext";

const VARIANT_CLASSES = {
  variant1: "bg-secondary-active",
  variant2: "bg-secondary-light",
};

const VARIANT_CLASSES_ORDER = {
  variant1: "lg:order-0 lg:rounded-l-3xl",
  variant2: "lg:order-1 lg:rounded-r-3xl",
};

const ThematicCard = ({
  imageUrl,
  cardVariant,
  smallCardSize,
  title,
  descriptionStart,
  descriptionEnd,
}) => {
  const variantClass = VARIANT_CLASSES[cardVariant] || VARIANT_CLASSES.variant1; // Default to variant1
  const variantClassOrder =
    VARIANT_CLASSES_ORDER[cardVariant] || VARIANT_CLASSES_ORDER.variant1; // Default to variant1
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // sets to `true` if screen size is below `md`
    };

    // Set initial
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { translations } = useLanguage();
  return (
    <article
      className={`relative flex flex-col gap-2 lg:flex-row rounded-3xl overflow-hidden shadow-md mb-1 w-[21.5rem] transition-all duration-300 ${
        expanded
          ? smallCardSize === "small"
            ? "h-[51rem]"
            : smallCardSize === "medium"
              ? "h-[48.75rem]"
              : smallCardSize === "big"
                ? "h-[58rem]"
                : "h-[49.75rem]"
          : smallCardSize === "small"
            ? "h-[30.75rem]"
            : smallCardSize === "medium"
              ? "h-[33.5rem]"
              : smallCardSize === "big"
                ? "h-[33.5rem]"
                : "h-[33.5rem]"
      } lg:h-[18.5rem] lg:w-auto lg:ml-1 lg:mr-1 lg:mb-2 ${variantClass}`}
      data-testid="thematicDiv"
      aria-label={`Thematic card with title: ${title}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className={`object-cover h-[12.375rem] w-[21.5rem] lg:w-[25.75rem] lg:h-[19.5rem] ${variantClassOrder}`}
        aria-label={`Image representing ${title}`}
        loading="lazy"
      ></img>
      <div className="flex flex-col justify-center p-6 lg:pl-4 lg:pr-12 xl:pl-6 xl:pr-10 2xl:pl-8 2xl:pr-20">
        <h3
          className="text-displaySmall text-tertiary1-darker relative font-roboto mb-5 lg:mb-4 lg:-mt-1 lg:text-headlineMedium xl:text-headlineLarge"
          aria-label={`Card title: ${title}`}
        >
          {title}
        </h3>
        <p
          className={`text-bodyLarge text-tertiary1-darker ${expanded ? "line-clamp-none" : "line-clamp-4"} md:top-1 lg:text-bodyMedium lg:line-clamp-none lg:relative xl:text-bodyLarge`}
          aria-label={`Card description`}
        >
          {descriptionStart}
          {!expanded && isSmallScreen ? "..." : ""}
          <span
            className={`${expanded || !isSmallScreen ? "inline" : "hidden"} lg:inline`}
          >
            {descriptionEnd}
          </span>
        </p>
        {isSmallScreen && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mx-auto mt-auto py-2 px-4 self-center ${expanded ? "py-6" : "py-9"} lg-hidden`}
            data-testid="thematic-button"
          >
            {expanded ? (
              <div className="flex">
                <img
                  className=""
                  alt="Chevron up icon inside a circle"
                  src="/icons/chevron-up-circle.svg"
                ></img>
                <p className="text-titleMedium font-medium mb-[3px] ml-2">
                  {translations["thematic.button-less"]}
                </p>
              </div>
            ) : (
              <div className="flex">
                <img
                  className=""
                  alt="Chevron down icon inside a circle"
                  src="/icons/chevron-down-circle.svg"
                ></img>
                <p className="text-titleMedium font-medium mb-[3px] ml-2">
                  {translations["thematic.button-more"]}
                </p>
              </div>
            )}
          </button>
        )}
      </div>
    </article>
  );
};

// Prop validation
ThematicCard.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Image URL must be a string and is required
  cardVariant: PropTypes.string.isRequired, // Card Variant must be a string and is required
  smallCardSize: PropTypes.string.isRequired, // Small card size must be a string and is required
  title: PropTypes.string.isRequired, // Title must be a string and is required
  descriptionStart: PropTypes.string.isRequired, // Description-start must be a string and is required
  descriptionEnd: PropTypes.string.isRequired, // Description-end must be a string and is required
};

export default ThematicCard;
