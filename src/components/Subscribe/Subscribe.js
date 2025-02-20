"use client";
import useFetch from "@/hooks/api/useFetch";
import React, { useState } from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { logInfo } from "@/utils/logging";

const Subscribe = () => {
  const { translations } = useLanguage();
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { isLoading, error, data, performFetch } = useFetch(
    "/send-email",
    "POST",
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    setErrors(null);
    setSuccessMessage(null);

    try {
      await performFetch(
        {
          to: email,
          subject: "Subscription",
          templateName: "emailWelcomeTemplate",
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
      setErrors(error);
    }
  }, [error]);

  React.useEffect(() => {
    if (data && data.success) {
      setSuccessMessage(data.message || "Subscription successful!");
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
                className="sm:mx-8 mx-4 pb-2 text-red-500"
                aria-live="assertive"
              >
                {errors.message}
              </div>
            )}

            {successMessage && (
              <div
                className="sm:mx-8 mx-4 pb-2 text-green-500"
                aria-live="assertive"
              >
                {successMessage}
              </div>
            )}
          </form>

          <div className="md:my-4 my-2 mb-4">
            <label className="flex items-center text-titleMedium">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                aria-label={translations["subscribe.terms"]}
                className="form-checkbox h-5 w-5 accent-secondary-hover_normal"
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
