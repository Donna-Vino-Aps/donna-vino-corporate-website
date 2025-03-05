import React from "react";
import PropTypes from "prop-types";

const ResendTimer = ({
  activeResend,
  resendEmail,
  isLoading,
  resendStatus,
  timeLeft,
  targetTime,
}) => {
  const getTextColor = () => {
    if (resendStatus === "Failed" || resendStatus === "Failed to send!") {
      return "text-red-500";
    }
    if (resendStatus === "Sent!") {
      return "text-green-500";
    }
    return "text-black";
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <p className="text-gray-600">Didn't receive the email?</p>

      {!isLoading ? (
        <button
          onClick={activeResend ? resendEmail : null}
          disabled={!activeResend}
          className={`underline mt-2 ${getTextColor()} ${!activeResend ? "opacity-50 cursor-not-allowed" : "hover:text-blue-600"}`}
          aria-disabled={!activeResend}
        >
          {resendStatus}
        </button>
      ) : (
        <div className="mt-2 flex items-center text-gray-500">
          <span className="animate-spin h-4 w-4 border-2 border-gray-500 border-t-transparent rounded-full"></span>
          <span className="ml-2">Sending...</span>
        </div>
      )}

      {!activeResend && (
        <p className="text-gray-600 mt-2">
          in <span className="font-semibold">{timeLeft || targetTime}</span>{" "}
          second(s)
        </p>
      )}
    </div>
  );
};

ResendTimer.propTypes = {
  activeResend: PropTypes.bool.isRequired,
  resendEmail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resendStatus: PropTypes.string.isRequired,
  timeLeft: PropTypes.number,
  targetTime: PropTypes.number,
};

export default ResendTimer;
