import React from "react";
import PropTypes from "prop-types";
import FloatingButton from "../Button/FloatingButton";

const MemberModal = (props) => {
  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-tertiary1-darker/50 opacity-transition"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
          <div className="relative p-4 mx-6 transform overflow-hidden rounded-2xl bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-2xl">
            <div className="bg-white mx-4 sm:p-6">
              <div className="flex justify-between">
                <h3
                  className="text-headlineLarge text-tertiary1-normal"
                  data-testid="member-name"
                  arial-label="Team member name"
                >
                  {props.name}
                </h3>
                <button
                  role="button"
                  aria-label="close"
                  onClick={props.onClose}
                >
                  <img src="/icons/close.svg" alt="" className="w-4" />
                </button>
              </div>
              <div className="pt-4 md:w-[20rem]">
                <p
                  className="text-headlineSmall pb-4"
                  aria-label="Team member title"
                  data-testid="member-title"
                >
                  {props.title}
                </p>
                <div className="h-[0.12rem] bg-primary-normal"></div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row justify-between sm:mt-2 sm:text-left">
                <div className="mt-4 md:w-[20rem] order-2 md:order-1 sm:order-1">
                  <p
                    className="text-bodyLarge"
                    aria-label="Description about the member"
                    data-testid="member-description"
                  >
                    {props.description}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start space-x-2 mt-4">
                    <FloatingButton />
                    <FloatingButton />
                    <FloatingButton />
                  </div>
                </div>
                <div className="md:w-40 md:h-40 order-1 md:order-2">
                  <img
                    className="h-[20rem] w-full object-fill sm:h-full rounded-lg "
                    src={props.img}
                    alt="Member Photo"
                    data-testid="member-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MemberModal.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.string,
  onClose: PropTypes.func,
};

export default MemberModal;
