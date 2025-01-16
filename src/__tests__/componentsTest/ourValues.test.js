import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OurValuesPage from "@/app/our-values/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import PropTypes from "prop-types";

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

const renderWithProvider = (language = "en") => {
  render(
    <MockLanguageProvider language={language}>
      <OurValuesPage />
    </MockLanguageProvider>,
  );
};

describe("OurValues Component", () => {
  it("should render the Our Values section", () => {
    renderWithProvider();

    // Check the main section
    const mainSection = screen.getByTestId("our-values-main");
    expect(mainSection).toBeInTheDocument();

    // Check the title
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Donna Vino Values");

    // Check the PhotoGallery container
    const photoGalleryContainer = screen.getByTestId("photoGallery-container");
    expect(photoGalleryContainer).toBeInTheDocument();

    // Check the PhotoGallery component
    const photoGallery = screen.getByTestId("photo-gallery");
    expect(photoGallery).toBeInTheDocument();

    // Check the images in the PhotoGallery component
    const image1 = screen.getByTestId("image-1");
    expect(image1).toBeInTheDocument();
    expect(image1).toHaveAttribute(
      "alt",
      "A vineyard in summer with lush green vines",
    );

    const image2 = screen.getByTestId("image-2");
    expect(image2).toBeInTheDocument();

    const image3 = screen.getByTestId("image-3");
    expect(image3).toBeInTheDocument();
    expect(image3).toHaveAttribute(
      "alt",
      "A woman smiling while enjoying a glass of wine",
    );

    // Check the text content in the article
    const introParagraph = screen.getByTestId("intro-paragraph");
    expect(introParagraph).toBeInTheDocument();
    expect(introParagraph).toHaveTextContent("Welcome to Donna Vino");

    const introParagraphDescription = screen.getByTestId(
      "intro-paragraph-description",
    );
    expect(introParagraphDescription).toBeInTheDocument();
    expect(introParagraphDescription).toHaveTextContent(
      "Your destination for authentic Italian flavours.",
    );

    const descriptionParagraph = screen.getByTestId("description-paragraph");
    expect(descriptionParagraph).toBeInTheDocument();
    expect(descriptionParagraph).toHaveTextContent(
      "Donna Vino is the result of former Michelin sommelier Katrine Giorgio's passion",
    );

    // Check the Carousel component
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });
});
