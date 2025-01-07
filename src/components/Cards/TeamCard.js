import React from "react";
import PropTypes from "prop-types";

const TeamCard = (props) => {
  return (
    <div
      className="relative rounded overflow-hidden shadow-lg m-2"
      aria-label="Team Card"
      data-testid="team-card"
    >
      <img className="w-full" src={props.img} alt="img" />
      <button
        role="button"
        className="absolute bottom-0 left-0 right-0 mb-4 mx-4 bg-primary-normal text-white 
             rounded px-6 py-2 hover:bg-primary-dark"
      >
        <p className="text-bodyLarge">Katrine Giogio</p>
        <p className="m-2 text-labelMedium">Founder</p>
        <div className="flex justify-center text-white">
          <img
            src="/icons/linkedin-alt-light.svg"
            className="h-4"
            alt="LinkedIn"
          />
        </div>
      </button>
    </div>
  );
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TeamCard;
