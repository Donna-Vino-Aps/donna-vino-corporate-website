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

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex justify-between">
                <h3
                  className="text-base font-semibold text-gray-900"
                  id="modal-title"
                >
                  {props.name}
                </h3>
                <button
                  className="self-end mb-6 mx-4"
                  role="button"
                  aria-label="close"
                  onClick={props.onClose}
                >
                  <img src="/icons/close.svg" alt="" className="mr-2 w-4" />
                </button>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.  Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. 
                  </p>
                  <p>{props.description}</p>
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
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.string,
};

export default MemberModal;
