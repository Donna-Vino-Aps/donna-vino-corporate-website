import React from "react";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "@/components/HeroSection/HeroSection";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";

const MockLanguageProvider = ({ children, language = "dk" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["en", "dk"]),
};

const renderWithProvider = (language = "dk") => {
  render(
    <MockLanguageProvider language={language}>
      <HeroSection />
    </MockLanguageProvider>,
  );
};

describe("HeroSection Component", () => {
  it("should render the HeroSection content", () => {
    renderWithProvider();

    // Check the heading text
    const heading = screen.getByText(
      /Velkommen til Donna Vino, din unikke vinoplevelse./i,
    );
    expect(heading).toBeInTheDocument();

    // Check the description text
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Oplev unikke vinhistorier fortalt af din sommelier, mens din private kok tilpasser menuen.",
    );

    // Check that the dotted shapes images are present
    const dottedShape1 = screen.getByTestId("dotted-shape-1");
    expect(dottedShape1).toBeInTheDocument();

    const dottedShape2 = screen.getByTestId("dotted-shape-2");
    expect(dottedShape2).toBeInTheDocument();

    const dottedShape3 = screen.getByTestId("dotted-shape-3");
    expect(dottedShape3).toBeInTheDocument();

    const dottedShape4 = screen.getByTestId("dotted-shape-4");
    expect(dottedShape4).toBeInTheDocument();

    // Check that the buttons are rendered
    const getStartedButton = screen.getByTestId("get-started-button");
    expect(getStartedButton).toBeInTheDocument();

    const secondaryButton = screen.getByTestId("secondary-button");
    expect(secondaryButton).toBeInTheDocument();
  });
  it("should render the video if hasCredits is true", () => {
    render(
      <MockLanguageProvider>
        <HeroSection hasCredits={true} />
      </MockLanguageProvider>,
    );

    const video = screen.getByTestId("hero-video");
    expect(video).toBeInTheDocument();
  });

  it("should render the fallback image if hasCredits is false", () => {
    render(
      <MockLanguageProvider>
        <HeroSection hasCredits={false} />
      </MockLanguageProvider>,
    );

    const fallbackImage = screen.getByTestId("fallback-image");
    expect(fallbackImage).toBeInTheDocument();
  });
});
