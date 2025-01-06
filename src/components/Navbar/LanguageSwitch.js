import React, { useState } from "react";

function LanguageSwitch() {
  const [selectedLanguage, setLanguage] = useState("en", "pageLanguage");

  return (
    <div className="flag-switch flex" data-testid="language-switch">
      <div
        data-testid="en-icon"
        aria-label="English icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${selectedLanguage === "en" ? "bg-primary-light" : ""}`}
        onClick={() => setLanguage("en")}
      >
        <img src="/images/ic_en.png" alt="en-icon" />
      </div>
      <div
        data-testid="dk-icon"
        aria-label="Denmark icon"
        className={`w-1/2 p-2 rounded-md hover:bg-primary-light
        ${selectedLanguage === "dk" ? "bg-primary-light" : ""}`}
        onClick={() => setLanguage("dk")}
      >
        <img src="/images/ic_dk.png" alt="dk-icon" />
      </div>
    </div>
  );
}

export default LanguageSwitch;
