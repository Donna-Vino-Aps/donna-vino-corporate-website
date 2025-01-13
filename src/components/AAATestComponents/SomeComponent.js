"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import React from "react";

const SomeComponent = () => {
  const { translations } = useLanguage();

  return (
    <div>
      <h1>{translations.welcomeMessage}</h1>
      <p>{translations.description}</p>
      <footer>{translations.footer}</footer>
      <p>TEST IF THIS COMPONENT EXIST OR NOT</p>
    </div>
  );
};

export default SomeComponent;
