import React from "react";
import PropTypes from "prop-types";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import ThematicCard from "@/components/Card/ThematicCard";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";

describe("ThematicCard Component", () => {
  const defaultProps = {
    imageUrl: "/test-image.jpg",
    imgPos: "left",
    smallCardSize: "medium",
    title: "Test Title",
    descriptionStart: "This is the start of the description.",
    descriptionEnd: "This is the end of the description.",
    backgroundColor: "#ffffff",
  };

  // Mock the screen size adjustment for small screens
  const renderWithSize = (size = 1024) => {
    global.innerWidth = size;
    global.dispatchEvent(new Event("resize"));
    return render(
      <LanguageProvider value={enTranslations}>
        <ThematicCard {...defaultProps} />
      </LanguageProvider>,
    );
  };

  afterEach(() => {
    // Reset window size after each test
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
  });

  // Validate that defaultProps match the expected prop types
  it("should pass prop validation with default props", () => {
    PropTypes.checkPropTypes(
      ThematicCard.propTypes,
      defaultProps,
      "prop",
      ThematicCard.name,
    );
  });

  it("renders without crashing with correct props", () => {
    renderWithSize();
    const thematicDiv = screen.getByTestId("thematicDiv");
    const img = screen.getByAltText("Test Title");
    const title = screen.getByText("Test Title");

    expect(thematicDiv).toBeInTheDocument();
    expect(thematicDiv).toHaveStyle(
      `background-color: ${defaultProps.backgroundColor}`,
    );
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
    expect(title).toBeInTheDocument();
  });

  it("toggles description when 'Show more' button is clicked", async () => {
    renderWithSize(500); // Ensure small screen size
    const button = screen.getByTestId("thematic-button");
    expect(button).toBeInTheDocument();

    // Match the start of the description text with a flexible matcher
    const descriptionStart = screen.getByText((content, element) => {
      return (
        content.includes("This is the start of the description") &&
        element.tagName.toLowerCase() === "p"
      );
    });
    expect(descriptionStart).toBeInTheDocument();

    let descriptionEnd = screen.queryByText(
      "This is the end of the description.",
    );
    expect(descriptionEnd).toBeInTheDocument();
    expect(descriptionEnd).toHaveClass("hidden"); // It should be hidden initially

    // Expand the description
    act(() => {
      fireEvent.click(button);
    });

    // Verify the end of the description becomes visible
    descriptionEnd = screen.queryByText("This is the end of the description.");
    expect(descriptionEnd).toBeInTheDocument();
    expect(descriptionEnd).not.toHaveClass("hidden"); // Ensure it's visible
    expect(button).toHaveTextContent("Show less");

    // Collapse the description
    act(() => {
      fireEvent.click(button);
    });

    // Verify the end of the description disappears again
    descriptionEnd = screen.queryByText("This is the end of the description.");
    expect(descriptionEnd).toBeInTheDocument();
    expect(descriptionEnd).toHaveClass("hidden"); // Ensure it's hidden, not removed
    expect(button).toHaveTextContent("Show more");
  });

  it("renders different layouts for small and large screens", async () => {
    renderWithSize(500); // Ensure small screen size

    // Ensure the layout for small screen
    expect(screen.queryByText("Show more")).toBeInTheDocument();

    // Mock large screen size inside the test and trigger a resize event
    renderWithSize(1200); // Simulate larger screen size

    // Wait for layout to update after resize
    await waitFor(() => {
      expect(screen.queryByText("Show more")).not.toBeInTheDocument();
    });
  });
});
