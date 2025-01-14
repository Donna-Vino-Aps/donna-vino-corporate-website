import React from "react";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThematicCardsValues from "@/components/Card/ThematicCard";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";

describe("ThematicCardsValues Component", () => {
  const defaultProps = {
    imageUrl: "/test-image.jpg",
    imgPos: "left",
    smallCardSize: "medium",
    title: "Test Title",
    descriptionStart: "This is the start of the description.",
    descriptionEnd: "This is the end of the description.",
    backgroundColor: "#ffffff",
  };

  // Validate that defaultProps match the expected prop types
  it("should pass prop validation with default props", () => {
    PropTypes.checkPropTypes(
      ThematicCardsValues.propTypes,
      defaultProps,
      "prop",
      ThematicCardsValues.name,
    );
  });

  it("renders without crashing", () => {
    render(
      <LanguageProvider value={enTranslations}>
        <ThematicCardsValues />
      </LanguageProvider>,
    );
  });

  it("displays the 'Show more' button in small screen layout", () => {
    // Simulate a small screen
    global.innerWidth = 800;
    global.dispatchEvent(new Event("resize"));

    render(
      <LanguageProvider value={enTranslations}>
        <ThematicCardsValues />
      </LanguageProvider>,
    );

    // Verify 'Show more' button is visible on small screens
    const showMoreButton = screen.queryByText("Show more");
    expect(showMoreButton).toBeInTheDocument();
  });

  it("does not display 'Show more' button in large screen layout", () => {
    // Simulate a large screen
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    render(
      <LanguageProvider value={enTranslations}>
        <ThematicCardsValues />
      </LanguageProvider>,
    );

    // Verify 'Show more' button is not visible on large screens
    const showMoreButton = screen.queryByText("Show more");
    expect(showMoreButton).toBeNull();
  });

  // Reset global window size after tests
  afterEach(() => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
  });
});
