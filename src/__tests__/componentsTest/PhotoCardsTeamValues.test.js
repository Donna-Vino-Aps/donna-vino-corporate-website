import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import PropTypes from "prop-types";

// Mock LanguageProvider to wrap the component with translations
const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["en", "dk"]),
};

// Utility function to render the PhotoCardsTeamValues component with the provider
const renderWithProvider = (language = "en") => {
  render(
    <MockLanguageProvider language={language}>
      <PhotoCardsTeamValues />
    </MockLanguageProvider>,
  );
};

describe("PhotoCardsTeamValues Component", () => {
  it("renders without crashing", () => {
    renderWithProvider();

    // Check that the PhotoCardsTeamValues container is rendered
    expect(screen.getByTestId("photo-cards-team-values")).toBeInTheDocument();
  });

  it("renders the correct number of PhotoCardSmaller components", () => {
    renderWithProvider();

    // Check that exactly two PhotoCardSmaller components are rendered
    const photoCards = screen.getAllByTestId("photo-card-smaller");
    expect(photoCards.length).toBe(2);
  });

  it("renders the grid layout correctly for screen-sizes BELOW sm", () => {
    window.innerWidth = 400;
    renderWithProvider();

    // Check grid layout for small screens (below sm)
    const grid = screen.getByTestId("photo-cards-team-values");
    expect(grid).toHaveClass("grid-col-1");
  });

  it("renders the grid layout correctly for screen-sizes ABOVE sm", () => {
    window.innerWidth = 640;
    renderWithProvider();

    // Check grid layout for medium screens (above sm)
    const grid = screen.getByTestId("photo-cards-team-values");
    expect(grid).toHaveClass("sm:grid-cols-2");
  });

  it("checks if the background and text color classes are correct in variant 1", () => {
    renderWithProvider();

    // Check the classes for the first PhotoCardSmaller (variant 1)
    const photoCard = screen.getAllByTestId("photo-card-smaller")[0];
    expect(photoCard).toHaveClass("bg-secondary-normal text-secondary-light");
  });

  it("checks if the background and text color classes are correct in variant 2", () => {
    renderWithProvider();

    // Check the classes for the second PhotoCardSmaller (variant 2)
    const photoCard = screen.getAllByTestId("photo-card-smaller")[1];
    expect(photoCard).toHaveClass("bg-tertiary1-hover text-tertiary1-darker");
  });
});
