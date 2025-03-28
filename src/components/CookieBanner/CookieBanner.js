"use client";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const CookieBanner = () => {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem("cookieConsent", consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      data-testid="cookie-banner"
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 p-4 md:p-6 bg-white opacity-98 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 z-[9999]"
    >
      <p className="text-bodyMedium font-medium" data-testid="cookie-text">
        {translations["cookie.p"]}
        <a
          href="/privacy-policy"
          className="text-primary-normal hover:text-primary-hover ml-1 underline"
          data-testid="privacy-policy-link"
        >
          {translations["cookie.privacy"]}
        </a>
        .
      </p>
      <div className="flex gap-2 w-[14rem] md:w-[14.12rem]">
        <Button
          text={translations["cookie.accept"]}
          variant="redSubmit"
          onClick={() => handleConsent("accepted")}
          ariaLabel="Accept Cookies"
          testId="accept-button"
          data-testid="accept-button"
        />
        <Button
          text={translations["cookie.reject"]}
          variant="redLine"
          onClick={() => handleConsent("rejected")}
          ariaLabel="Reject Cookies"
          testId="reject-button"
          data-testid="reject-button"
        />
      </div>
    </div>
  );
};

export default CookieBanner;
