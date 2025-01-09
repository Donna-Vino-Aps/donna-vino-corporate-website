import React, { useState } from "react";
import PropTypes from "prop-types";

const ThematicCard = ({ imageUrl, title, description, backgroundColor }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="thematicDiv relative flex flex-col rounded-3xl overflow-hidden w-[21.5rem] h-[30.75rem] xl:flex-row xl:flex-row xl:w-[35.2rem] xl:h-[22.8rem] 2xl:w-[39.6rem] 2xl:h-[25.65rem] 3xl:w-[44rem] 3xl:h-[28.5rem]"
      data-testid="thematicDiv"
      style={{
        backgroundColor: backgroundColor,
      }}
      aria-label={`Photo card with title: ${title}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="cardImg object-cover h-[12.375rem] w-[21.5rem] md:w-full md:h-[18.5rem] xl:h-full"
        aria-label={`Image representing ${title}`}
      ></img>
      <div className="flex flex-col justify-center p-4">
        <h3>{title}</h3>
        <p className="text-bodyLarge text-tertiary1-darker">{description}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default ThematicCard;
