import React from "react";
import PropTypes from "prop-types";
import FloatingButton from "../Button/FloatingButton";

const MemberModal = (props) => {
  const renderSocialLinks = () =>
    props.links?.length > 0 &&
    props.links.map((link, index) => (
      <FloatingButton key={index} icon={link.icon} url={link.url} />
    ));
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
        <div className="flex min-h-full items-center justify-center text-center">
          <div className="relative p-4 mx-6 transform overflow-hidden rounded-2xl bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-2xl">
            <div className="bg-white mx-4 sm:p-6">
              <div className="flex justify-between">
                <h3
                  className="text-headlineLarge text-tertiary1-normal"
                  data-testid="member-name"
                  aria-label="Team member name"
                  id="modal-title"
                >
                  {props.name}
                </h3>
                <button
                  role="button"
                  aria-label="Close modal"
                  onClick={props.onClose}
                >
                  <img src="/icons/close.svg" alt="Close" className="w-4" />
                </button>
              </div>
              <div className="pt-4 md:w-[20rem]">
                <p
                  className="text-titleLarge sm:text-headlineSmall pb-4 md:text-titleLarge"
                  aria-label="Team member title"
                  data-testid="member-title"
                >
                  {props.title}
                </p>
                <div className="h-[0.12rem] bg-primary-normal w-full md:w-[16rem]"></div>
              </div>
              <div className="mt-0 md:mt-4 flex flex-col sm:flex-row justify-between sm:mt-2 sm:text-left">
                <div className="mt-0 md:mt-2 md:w-[26rem] order-2 md:order-1 sm:order-1">
                  <p
                    className="text-bodyMedium md:text-bodyLarge"
                    aria-label="Description about the member"
                    data-testid="member-description"
                  >
                    {props.description}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start space-x-2 mt-5 mb-1">
                    {renderSocialLinks()}
                  </div>
                </div>

                <figure
                  className={`flex justify-center items-center h-[23rem] w-full overflow-hidden rounded-[1rem] order-1 min-h-[20.625rem] min-w-[16.875rem] md:order-2 md:h-[17.375rem] md:relative ${props.variant === "core" ? "md:bottom-0" : "md:bottom-16"} md:left-11`}
                >
                  <img
                    className="object-cover h-auto w-full md:w-[82%] max-h-full rounded-lg object-top"
                    src={props.img}
                    alt={`Photo of ${props.name}`}
                    data-testid="member-image"
                  />
                </figure>
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
  variant: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
  onClose: PropTypes.func.isRequired,
};

export default MemberModal;
