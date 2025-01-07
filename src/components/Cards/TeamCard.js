import React from "react";
import PropTypes from "prop-types";

const TeamCard = (props) => {
  return (
    <div
      className="relative overflow-hidden shadow-lg m-2"
      aria-label="Team Card"
      data-testid="team-card"
    >
      <img className="w-full" src={props.img} alt="img" />
      <button
        role="button"
        className="absolute bottom-0 left-0 right-0 mb-4 mx-4 bg-primary-normal text-white 
             rounded px-6 py-2 hover:bg-primary-dark"
      >
        <img
          src="/design-elements/Dotted Shape.svg"
          className="absolute top-0 md:top-auto md:top-0 sm-top-0 right-0 sm:right-0 w-[1.6rem] h-[1.6rem]"
          alt="Image Description"
        />
        <p className="text-bodyLarge">Katrine Giogio</p>
        <p className="m-2 text-labelMedium">Founder</p>

        <div className="flex justify-center text-white">
          <img
            src="/icons/linkedin-alt-light.svg"
            className="h-4"
            alt="LinkedIn"
          />
        </div>
        <img
          src="/design-elements/Circle Shape.svg"
          className="absolute rounded-bl bottom-0 md-bottom-auto md-bottom-0 left-0 sm:bottom-0 sm:left-0 w-[3rem] h-[3rem]"
          alt="Image Description"
        />
      </button>
    </div>
  );
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
};

export default TeamCard;
