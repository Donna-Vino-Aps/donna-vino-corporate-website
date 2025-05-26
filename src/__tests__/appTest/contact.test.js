import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/app/contact/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";

describe("Contact Page", () => {
  // Mock the screen size adjustment for small screens
  const renderWithLanguage = (translations = enTranslations) => {
    return render(
      <LanguageProvider value={translations}>
        <Contact />
      </LanguageProvider>,
    );
  };

  beforeEach(() => {
    renderWithLanguage();
  });

  it("should render the contact page with MapSection", () => {
    // Check that the MapSection component is rendered
    const mapSection = screen.getByTestId("map-section");
    expect(mapSection).toBeInTheDocument();

    // Optionally, check that other page elements are present
    const contactContainer = screen.getByTestId("contact-container");
    expect(contactContainer).toBeInTheDocument();
  });

  it("should render goBackButton", () => {
    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Tilbage");
  });
});
