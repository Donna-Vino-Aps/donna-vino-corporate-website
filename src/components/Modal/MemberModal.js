import React from "react";
import PropTypes from "prop-types";

const MemberModal = (props) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10  overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div className="relative p-4 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
            <div className="bg-white mx-4 sm:p-2">
              <div className="flex justify-between">
                <h3
                  className="text-headlineLarge text-tertiary1-normal"
                  id="modal-title"
                >
                  {props.name}
                </h3>
                <button
                  className="self-end mb-6"
                  role="button"
                  aria-label="close"
                  onClick={props.onClose}
                >
                  <img src="/icons/close.svg" alt="" className="w-4" />
                </button>
              </div>
              <div className="mt-3 flex justify-between sm:mt-2 sm:text-left">
                <div className="mt-2 mr-10">
                  <p className="text-headlineSmall pb-4">{props.title}</p>
                  <div className="w-full h-px bg-red-500"></div>
                  <p className="text-bodyLarge pt-4">{props.description}</p>
                </div>
                <div className="py-4">
                  <img
                    className="w-full h-full rounded-lg"
                    src={props.img}
                    alt="img"
                    data-testid="image"
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
