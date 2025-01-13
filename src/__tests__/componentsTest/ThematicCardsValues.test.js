import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThematicCardsValues from "@/components/Card/ThematicCard";

describe("ThematicCardsValues Component", () => {
  it("renders without crashing", () => {
    render(<ThematicCardsValues />);
  });

  it("displays the 'Show more' button in small screen layout", () => {
    // Simulate a small screen
    global.innerWidth = 800;
    global.dispatchEvent(new Event("resize"));

    render(<ThematicCardsValues />);

    // Verify 'Show more' button is visible on small screens
    const showMoreButton = screen.queryByText("Show more");
    expect(showMoreButton).toBeInTheDocument();
  });

  it("does not display 'Show more' button in large screen layout", () => {
    // Simulate a large screen
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    render(<ThematicCardsValues />);

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
