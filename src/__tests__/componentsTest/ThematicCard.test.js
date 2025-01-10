import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ThematicCard from "@/components/Card/ThematicCard";

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

  beforeEach(() => {
    // Simulate small screen size
    global.innerWidth = 800;
    global.dispatchEvent(new Event("resize"));
  });

  afterEach(() => {
    // Reset window size after each test
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
  });

  it("renders without crashing with correct props", () => {
    render(<ThematicCard {...defaultProps} />);
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

  it("toggles description when 'Show more' button is clicked", () => {
    render(<ThematicCard {...defaultProps} />);

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
    render(<ThematicCard {...defaultProps} />);

    // Ensure the layout for small screen
    expect(screen.queryByText("Show more")).toBeInTheDocument();

    // Mock large screen size inside the test and trigger a resize event
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    // Wait for layout to update after resize
    await waitFor(() => {
      expect(screen.queryByText("Show more")).not.toBeInTheDocument();
    });
  });
});
