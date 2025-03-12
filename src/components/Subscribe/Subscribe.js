"use client";

import useFetch from "@/hooks/api/useFetch";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { logInfo } from "@/utils/logging";
import ResendTimer from "../ResendTimer/ResendTimer";
import validator from "validator";

const Subscribe = () => {
  const { translations } = useLanguage();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  // Resend verification email
  const [resendingEmail, setResendingEmail] = useState(false);
  const [resendStatus, setResendStatus] = useState("Please wait");
  const [savedEmail, setSavedEmail] = useState(null);
  const [userId, setUserId] = useState(null);

  // Resend timer
  const [timeLeft, setTimeLeft] = useState(null);
  const [targetTime, setTargetTime] = useState(null);
  const [activeResend, setActiveResend] = useState(false);

  const resendTimerRef = React.useRef(null);

  const calculateTimeLeft = (finalTime) => {
    const seconds = finalTime - +new Date();
    if (seconds >= 0) {
      setTimeLeft(Math.round(seconds / 1000));
    } else {
      setTimeLeft(null);
      clearInterval(resendTimerRef.current);
      setActiveResend(true);
      setResendStatus("Resend");
    }
  };

  const triggerTimer = (targetTimeInSeconds = 30) => {
    setTargetTime(targetTimeInSeconds);
    setActiveResend(false);
    const finalTime = +new Date() + targetTimeInSeconds * 1000;
    resendTimerRef.current = setInterval(
      () => calculateTimeLeft(finalTime),
      1000,
    );
  };

  const handleCheckboxChange = () => {
    setMessage("");
    setAgreed(!agreed);
    if (errors) {
      setErrors(null);
    }
  };

  useEffect(() => {
    triggerTimer();

    return () => {
      clearInterval(resendTimerRef.current);
    };
  }, []);

  // Handler for receiving API responses
  const onReceived = (response) => {
    const { success, message, error: serverError, email, userId } = response;

    if (success) {
      setResendStatus("Sent!");
      setActiveResend(false);
      setSavedEmail(email);
      setUserId(userId);
      setEmailSent(true);
      setMessage(message);
    } else {
      setResendStatus("Failed");
      setActiveResend(false);
      setErrors(`Resending email failed! ${serverError || message}`);
    }

    // Reset the resend button state after 5 seconds
    setTimeout(() => {
      setResendStatus("Please wait");
      triggerTimer();
    }, 5000);
  };

  const { isLoading, error, data, performFetch } = useFetch(
    "/subscribe/pre-subscribe",
    "POST",
    {},
    {},
    onReceived,
  );

  const resendEmail = () => {
    if (!savedEmail || !userId) {
      setErrors("Error: Missing email or userId. Please subscribe again.");
      return;
    }

    setResendStatus("Sending...");
    setResendingEmail(true);

    performFetch({
      method: "POST",
      data: { email: savedEmail, userId },
      onReceived: (response) => {
        logInfo("Need other onReceived function");
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !validator.isEmail(email)) {
      setErrors("Please enter a valid email address first.");
      return;
    }

    if (!agreed) {
      setErrors("Please agree to the terms and conditions.");
      return;
    }

    setErrors(null);
    setMessage(null);

    try {
      await performFetch(
        {
          to: email,
          subject: "Subscription",
          templateName: "confirmSubscriptionTemplate",
        },
        {},
      );

      setEmail("");
      setAgreed(false);
    } catch (err) {
      logInfo(err);
      setErrors(err);
    }
  };

  React.useEffect(() => {
    if (error) {
      setMessage("");
      setErrors(error.message || error);
    }
  }, [error]);

  React.useEffect(() => {
    if (data && data.success) {
      setMessage(data.message);
    }
  }, [data]);

  return (
    <section
      className="lg:my-2 flex flex-col justify-center items-center font-barlow bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="newsletter-title"
      aria-describedby="newsletter-description"
      data-testid="subscribe-section"
    >
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2">
        <h2 className="text-displayMedium md:text-displayLarge text-center">
          {translations["subscribe.heading"]}
        </h2>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-titleMedium text-tertiary1-gray mt-4 text-center mb-4 max-w-[476px]">
            {translations["subscribe.paragraph"]}
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl flex flex-col justify-center mx-auto sm:w-[476px] w-full"
          >
            <div className="w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center p-4 gap-2">
              <input
                type="email"
                placeholder={translations["subscribe.placeholder"]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-titleMedium w-full mx-2 h-[50px] py-2 px-4 text-tertiary1-normal border border-tertiary2-hover_normal rounded-lg"
                required
                aria-required="true"
              />

              <Button
                text={
                  isLoading
                    ? translations["subscribe.button-loading"]
                    : translations["subscribe.button"]
                }
                variant="redSubmit"
                isLoading={isLoading}
                onClick={handleSubmit}
                disabled={isLoading}
                ariaLabel="Submit form"
                testId="submit-button"
              />
            </div>
            {errors && (
              <div
                className="sm:mx-8 mx-4 pb-2 text-red-500 text-center"
                aria-live="assertive"
                data-testid="error-message"
              >
                {errors}
              </div>
            )}

            {message && (
              <div
                className="sm:mx-8 mx-4 pb-2 text-green-500 text-center"
                aria-live="assertive"
                data-testid="success-message"
              >
                {message}
              </div>
            )}
          </form>

          <div className="md:my-4 my-2 mb-4">
            <label className="flex items-center text-titleMedium">
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleCheckboxChange}
                aria-label={translations["subscribe.terms"]}
                className="form-checkbox h-5 w-5 accent-secondary-hover_normal"
                data-testid="terms-checkbox"
              />
              <span className="ml-3 w-full text-bodyLarge">
                {translations["subscribe.terms"]}
              </span>
            </label>
            {emailSent && (
              <ResendTimer
                activeResend={activeResend}
                isLoading={isLoading}
                resendStatus={resendStatus}
                timeLeft={timeLeft}
                targetTime={targetTime}
                resendEmail={resendEmail}
                resendingEmail={resendingEmail}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
