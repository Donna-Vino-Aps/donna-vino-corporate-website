import React from "react";

import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { propTypes } from "react-bootstrap/esm/Image";

const ComingSoonModal = ({ isOpen, onClose }) => {
  const { translations } = useLanguage();
  //   const { isOpen, onClose } = useModal();

  if (!isOpen) return null;
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-500 flex flex-col gap-y-4 justify-center items-center h-[26.25rem] w-[33.125rem] bg-primary-light rounded-[20px]">
      <div className="bg-[#FF95004D] rounded-[37px] w-[3.75rem] h-[3.75rem] justify-center items-center flex">
        <img src="/icons/warning.svg" />
      </div>
      <h1 className="text-displaySmall text-roboto">
        {translations["modal.h1"]}
      </h1>
      <p className="px-14 text-center">{translations["modal.p"]}</p>
      <div className="flex justify-center gap-4 mt-8 relative bottom-2">
        <Button
          text={translations["modal.button-left"]}
          icon="/icons/close-white.svg"
          variant="red"
          testId="modal-button-close"
          ariaLabel={translations["modal.button-left"]}
          onClick={onClose}
        ></Button>
        <Button
          text={translations["modal.button-right"]}
          icon="/icons/phone-ring.svg"
          variant="darkGreen"
          testId="modal-button-contact"
          ariaLabel={translations["modal.button-right"]}
          linkUrl="/contact"
        ></Button>
      </div>
    </div>
  );
};

ComingSoonModal.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
};

export default ComingSoonModal;
