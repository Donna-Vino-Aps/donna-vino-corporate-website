"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import MemberModal from "@/components/Modal/MemberModal";

const MemberCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="relative overflow-hidden shadow-lg m-2"
      aria-label="Team Card"
      data-testid="team-card"
    >
      <img className="w-full" src={props.img} alt="img" data-testid="image" />

      <button
        role="button"
        className="absolute bottom-0 left-0 right-0 mb-4 mx-4 bg-primary-normal text-white 
             rounded px-6 hover:bg-primary-dark"
        onClick={openModal}
      >
        <img
          src="/design-elements/Dotted Shape.svg"
          className="absolute rounded-tr top-0 md:top-auto md:top-0 sm-top-0 right-0 sm:right-0 w-[1.6rem] h-[1.6rem]"
          alt="Dotted Shape"
          data-testid="dotted-shape"
        />
        <div className="mb-2">
          <p className="text-bodyLarge pt-2" aria-label="name">
            {props.name}
          </p>
          <p className="m-2 text-labelMedium" aria-label="title">
            {props.title}
          </p>

          <div className="flex justify-center text-white">
            <img src={props.links} className="h-4" alt="LinkedIn" />
          </div>
        </div>

        <img
          src="/design-elements/Circle Shape.svg"
          className="absolute rounded-bl bottom-0 md-bottom-auto md-bottom-0 left-0 sm:bottom-0 sm:left-0 w-[3rem] h-[2.8rem]"
          alt="Circle Shape"
          data-testid="circle-shape"
        />
      </button>

      {isModalOpen && (
        <MemberModal
          name={props.name}
          title={props.title}
          img={props.img}
          description={props.description}
          links={props.links}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

MemberCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  links: PropTypes.string,
};

export default MemberCard;
