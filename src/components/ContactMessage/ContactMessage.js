import React, { useEffect } from "react";

/**
 * ContactMessage Component:
 * - Auto closes after 3 seconds based on isShown and type
 * - Displays the corresponding FixedSuccessAlert or FixedErrorAlert
 */
const ContactMessage = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    if (isShown) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isShown, onClose]);

  if (!isShown) return null;

  return type === "error" ? (
    <ErrorAlert message={message} />
  ) : (
    <SuccessAlert message={message} />
  );
};

export default ContactMessage;

/**
 * Fixed-position Success Alert
 * - Desktop: large icon + thick border
 * - Mobile: small icon + thin border
 */
function SuccessAlert({ message }) {
  return (
    <>
      {/* Desktop success alert (md+) */}
      <div
        className="
    hidden md:flex 
    fixed top-8 left-1/2 transform -translate-x-1/2
    z-50
    w-[859px]
    bg-[#DAF8E6]
    border-l-[6px] border-l-[#22AD5C]
    rounded-[8px]
    p-[30px] h-[114px]
    items-start gap-[25px]
  "
      >
        <div className="w-[34px] h-[34px] bg-[#22AD5C] rounded-[8px] flex items-center justify-center">
          <img
            src="/icons/alert-success-desktop.svg"
            alt="success-desktop"
            className="w-[34px] h-[34px]"
          />
        </div>

        <div>
          <p className="text-bodyMedium font-semibold text-[#004434]">
            Message Sent Successfully
          </p>
          <p className="text-bodyMedium font-normal mt-[15px] text-[#637381]">
            Your message has been successfully sent, you will be contacted soon
          </p>
        </div>
      </div>

      {/* Mobile success alert (below md) */}
      <div
        className="
          md:hidden 
          fixed top-6 left-1/2 transform -translate-x-1/2
          z-50
          w-[90%]
          bg-[#DAF8E6] 
          rounded-[6px] px-[18px] py-[15px] 
          flex items-start gap-2
          shadow-lg
        "
      >
        <img
          src="/icons/alert-success-mobile.svg"
          alt="success-mobile"
          className="w-5 h-5 mt-1"
        />
        <div>
          <p className="leading-[24px] font-medium text-bodyMedium text-[#004434]">
            Message Sent Successfully
          </p>
        </div>
      </div>
    </>
  );
}

/**
 * Fixed-position Error Alert
 * - Desktop: #FCEAE8 background, #EA3D2F border
 * - Mobile: same styling adapted for mobile view
 */
function ErrorAlert({ message }) {
  return (
    <>
      {/* Desktop error alert (md+) */}
      <div
        className="
    hidden md:flex 
    fixed top-8 left-1/2 transform -translate-x-1/2
    z-50
    w-[859px]
    bg-[#FEF3F3]
    border-l-[6px] border-l-[#F23030]
    rounded-[8px]
    p-[30px] h-[114px]
    items-start gap-[25px]
  "
      >
        <div className="w-[34px] h-[34px] bg-[#F23030] rounded-[8px] flex items-center justify-center">
          <img
            src="/icons/alert-error-desktop.svg"
            alt="error-desktop"
            className="w-[34px] h-[34px]"
          />
        </div>

        <div>
          <p className="font-inter text-bodyMedium font-semibold text-[#BC1C21]">
            Some errors occurred. Please try again.
          </p>
          <p className="font-inter text-bodyMedium font-normal mt-[15px] text-[#F56060]">
            {message}
          </p>
        </div>
      </div>

      {/* Mobile error alert (below md) */}
      <div
        className="
          md:hidden
          fixed top-6 left-1/2 transform -translate-x-1/2
          z-50
          w-[90%]
          bg-[#FEF3F3]
          rounded-[6px] px-[18px] py-[15px] 
          flex items-start gap-[12px]
        "
      >
        <img
          src="/icons/alert-error-mobile.svg"
          alt="error-mobile"
          className="w-5 h-5 mt-1"
        />
        <div>
          <p className="text-bodyMedium font-medium gap-[12px] text-[#BC1C21]">
            Some errors occurred. Please try again.
          </p>
        </div>
      </div>
    </>
  );
}
