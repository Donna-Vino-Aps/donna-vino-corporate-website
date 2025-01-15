"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React, { useEffect } from "react";

function LanguageSwitch() {
  const [selectedLanguage, setLanguage] = useState("en");

  return (
    <div
      className="flex w-[5.12rem] h-[2.87rem] items-center justify-center gap-2 shadow-sm rounded-sm absolute right-[3.44rem]"
      data-testid="language-switch-container"
      role="group"
      aria-label="Language Switch"
    >
      <div
        className="flex items-center justify-center w-[4.5rem] h-[2.25rem]"
        data-testid="language-switch"
      >
        <button
          data-testid="en-icon"
          aria-label="Switch to English"
          aria-pressed={selectedLanguage === "en"}
          className={`flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-md hover:bg-primary-light ${
            selectedLanguage === "en" ? "bg-primary-light" : ""
          }`}
          onClick={() => setLanguage("en")}
        >
          <img
            src="/images/ic_en.png"
            className="w-[1rem] h-[1rem]"
            alt="English Flag"
          />
        </button>
        <button
          data-testid="dk-icon"
          aria-label="Switch to Danish"
          aria-pressed={selectedLanguage === "dk"}
          className={`flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-md hover:bg-primary-light ${
            selectedLanguage === "dk" ? "bg-primary-light" : ""
          }`}
          onClick={() => setLanguage("dk")}
        >
          <img
            src="/images/ic_dk.png"
            className="w-[1rem] h-[1rem]"
            alt="Danish Flag"
          />
        </button>
      </div>
    </div>
  );
}

export default LanguageSwitch;
