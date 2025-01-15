import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardSmaller from "@/components/Card/PhotoCardSmaller";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import PropTypes from "prop-types";

// Default props for PhotoCardSmaller component
const defaultProps = {
  imageUrl: "/test-image.jpg",
  title: "Test Title",
  description: "Test description for PhotoCardSmaller.",
  buttonIcon: "/test-icon.svg",
  buttonLabel: "Test Button",
  buttonVariant: "secondary-darker",
  buttonTestId: "test-button-smaller",
  cardVariant: "variant1",
};

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

// Utility function to render the PhotoCardSmaller with the provider
const renderWithProvider = (props = defaultProps, language = "en") => {
  render(
    <MockLanguageProvider language={language}>
      <PhotoCardSmaller {...props} />
    </MockLanguageProvider>,
  );
};

describe("PhotoCardSmaller Component", () => {
  it("should render the PhotoCardSmaller component", () => {
    renderWithProvider();

    // Check the main PhotoCardSmaller container
    const photoCardSmaller = screen.getByTestId("photo-card-smaller");
    expect(photoCardSmaller).toBeInTheDocument();
  });

  it("should display the correct title", () => {
    renderWithProvider();

    // Check that the title is correctly displayed
    const title = screen.getByTestId("photo-card-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(defaultProps.title);
  });

  it("should display the correct description", () => {
    renderWithProvider();

    // Check that the description is correctly displayed
    const description = screen.getByTestId("photo-card-description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(defaultProps.description);
  });

  it("should display the image with the correct src and alt attributes", () => {
    renderWithProvider();

    // Check the image src and alt attributes
    const img = screen.getByTestId("card-image");
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
    expect(img).toHaveAttribute("alt", defaultProps.title);
  });

  it("should render the button with the correct label", () => {
    renderWithProvider();

    // Check the button's label
    const button = screen.getByTestId(defaultProps.buttonTestId);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(defaultProps.buttonLabel);
  });

  it("should apply the correct styles based on the cardVariant prop", () => {
    renderWithProvider();

    // Check the styles based on cardVariant
    const photoCardSmaller = screen.getByTestId("photo-card-smaller");

    if (defaultProps.cardVariant === "variant1") {
      expect(photoCardSmaller).toHaveClass(
        "bg-secondary-normal",
        "text-secondary-light",
      );
    } else if (defaultProps.cardVariant === "variant2") {
      expect(photoCardSmaller).toHaveClass(
        "bg-tertiary1-hover",
        "text-tertiary1-darker",
      );
    }
  });
});
