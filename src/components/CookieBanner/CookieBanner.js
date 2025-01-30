"use client";
import React from "react";
import { useState, useEffect } from "react";

const CookieBanner = () => {
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
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 p-4 md:p-6 bg-secondary-normal text-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-bodyMedium font-medium">
        We use cookies to improve your experience. Read our
        <a
          href="/privacy-policy"
          className="text-primary-normal hover:text-primary-hover ml-1 underline"
        >
          {" "}
          Privacy Policy
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent("accepted")}
          className="px-4 py-2 bg-primary-normal hover:bg-primary-hover text-white font-medium rounded-lg"
          aria-label="Accept cookies"
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent("rejected")}
          className="px-4 py-2 bg-tertiary1-dark hover:bg-tertiary1-hover text-white font-medium rounded-lg"
          aria-label="Reject cookies"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
