import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import { LanguageProvider, useLanguage } from "@/app/context/LanguageContext";
import LanguageSwitch from "@/components/Navbar/LanguageSwitch";

beforeEach(() => {
  localStorage.clear();
});

describe("LanguageProvider and LanguageSwitch", () => {
  const TestComponent = () => {
    const { language, translations } = useLanguage();
    return (
      <div>
        <span>{language}</span>
        <h1>{translations.welcomeMessage}</h1>
        <p>{translations.description}</p>
        <footer>{translations.footer}</footer>
        <LanguageSwitch />
      </div>
    );
  };

  test("should default to 'dk' language and display the correct translation", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByText("dk")).toBeInTheDocument();
    expect(screen.getByText(dkTranslations.welcomeMessage)).toBeInTheDocument();
    expect(screen.getByText(dkTranslations.description)).toBeInTheDocument();
    expect(screen.getByText(dkTranslations.footer)).toBeInTheDocument();
  });

  test("should change language to 'en' when English icon is clicked", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByTestId("en-icon"));

    expect(screen.getByText("en")).toBeInTheDocument();
    expect(screen.getByText(enTranslations.welcomeMessage)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.description)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.footer)).toBeInTheDocument();
  });

  test("should use saved language from localStorage", () => {
    localStorage.setItem("pageLanguage", "en");

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByText("en")).toBeInTheDocument();
    expect(screen.getByText(enTranslations.welcomeMessage)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.description)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.footer)).toBeInTheDocument();
  });

  test("should store the selected language in localStorage", () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByTestId("en-icon"));

    expect(localStorage.getItem("pageLanguage")).toBe("en");
  });

  test("should reflect the selected language on reload", () => {
    localStorage.setItem("pageLanguage", "en");

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>,
    );

    expect(screen.getByText("en")).toBeInTheDocument();
    expect(screen.getByText(enTranslations.welcomeMessage)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.description)).toBeInTheDocument();
    expect(screen.getByText(enTranslations.footer)).toBeInTheDocument();
  });
});
