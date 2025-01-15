"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React, { useEffect } from "react";

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("pageLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [setLanguage]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("pageLanguage", newLanguage);
  };

  return (
    <div className="flag-switch flex" data-testid="language-switch">
      <div
        data-testid="en-icon"
        aria-label="English icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${language === "en" ? "bg-primary-light" : ""}`}
        onClick={() => handleLanguageChange("en")}
      >
        <img src="/images/ic_en.png" alt="en-icon" />
      </div>
      <div
        data-testid="dk-icon"
        aria-label="Denmark icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${language === "dk" ? "bg-primary-light" : ""}`}
        onClick={() => handleLanguageChange("dk")}
      >
        <img src="/images/ic_dk.png" alt="dk-icon" />
      </div>
    </div>
  );
}

export default LanguageSwitch;
