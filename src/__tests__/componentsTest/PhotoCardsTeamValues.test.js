import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";

describe("PhotoCardsTeamValues Component", () => {
  it("renders without crashing", () => {
    render(<PhotoCardsTeamValues />);
  });

  it("renders the grid layout correctly for screen-sizes BELOW md", () => {
    Object.defineProperty(window, "innerWidth", { value: 600 });
    global.dispatchEvent(new Event("resize"));
    render(<PhotoCardsTeamValues />);
    const grid = screen.getByTestId("testGrid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("grid-cols-1");
  });

  it("renders two PhotoCardSmaller components", () => {
    render(<PhotoCardsTeamValues />);
    const photoCards = screen.getAllByTestId("photoDiv");
    expect(photoCards).toHaveLength(2);

    // Test specific attributes of the first card
    const firstCard = photoCards[0];
    expect(firstCard).toHaveAttribute(
      "aria-label",
      "Photo card with title: Our Team",
    );

    // Test specific attributes of the second card
    const secondCard = photoCards[1];
    expect(secondCard).toHaveAttribute(
      "aria-label",
      "Photo card with title: Our Values",
    );
  });
});
