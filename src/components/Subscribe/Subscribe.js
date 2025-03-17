"use client";

import useFetch from "@/hooks/api/useFetch";
import React, { useState } from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { logInfo } from "@/utils/logging";
import validator from "validator";

const Subscribe = () => {
  const { translations } = useLanguage();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState(null);
  const [message, setMessage] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  // Handler for receiving API responses for subscription
  const onReceived = (response) => {
    const { success, message, error: serverError } = response;

    if (success) {
      setEmailSent(true);
      setMessage(message);
    } else {
      setErrors(`Subscription failed! ${serverError || message}`);
    }
  };

  // UseFetch hooks
  const {
    isLoading: subscribeLoading,
    error: subscribeError,
    data: subscribeData,
    performFetch: subscribeFetch,
  } = useFetch("/subscribe/pre-subscribe", "POST", {}, {}, onReceived);

  const handleCheckboxChange = () => {
    setMessage("");
    setAgreed(!agreed);
    if (errors) {
      setErrors(null);
    }
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
      await subscribeFetch(
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
    if (subscribeError) {
      setMessage("");
      setErrors(subscribeError.message || subscribeError);
    }
  }, [subscribeError]);

  React.useEffect(() => {
    if (subscribeData && subscribeData.success) {
      setMessage(subscribeData.message);
    }
  }, [subscribeData]);

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
                  subscribeLoading
                    ? translations["subscribe.button-loading"]
                    : translations["subscribe.button"]
                }
                variant="redSubmit"
                isLoading={subscribeLoading}
                onClick={handleSubmit}
                disabled={subscribeLoading}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
