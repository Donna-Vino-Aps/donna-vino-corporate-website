import React from "react";
import useStickyState from "@/hooks/helpers/useStickyState";

function LanguageSwitch() {
  const [selectedLanguage, setLanguage] = useStickyState("en", "pageLanguage");

  return (
    <div className="flag-switch flex">
      <div
        data-testid="en-icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${selectedLanguage === "en" ? "bg-primary-light" : ""}`}
        onClick={() => setLanguage("en")}
      >
        <img src="/images/ic_en.png" alt="en" />
      </div>
      <div
        data-testid="dk-icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${selectedLanguage === "dk" ? "bg-primary-light" : ""}`}
        onClick={() => setLanguage("dk")}
      >
        <img src="/images/ic_dk.png" alt="dk" />
      </div>
    </div>
  );
}

export default LanguageSwitch;
