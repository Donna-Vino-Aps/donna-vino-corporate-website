import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";

describe("PhotoCardsWineTasting Component", () => {
  it("renders without crashing", () => {
    render(<PhotoCardsWineTasting />);
    expect(screen.getByTestId("photo-cards-wine-tasting")).toBeInTheDocument();
  });

  it("renders the correct number of PhotoCard components", () => {
    render(<PhotoCardsWineTasting />);
    const photoCards = screen.getAllByTestId("photo-card");
    expect(photoCards.length).toBe(2);
  });

  it("renders the grid layout correctly for screen-sizes BELOW sm", () => {
    window.innerWidth = 400;
    render(<PhotoCardsWineTasting />);
    const grid = screen.getByTestId("photo-cards-wine-tasting");
    expect(grid).toHaveClass("grid-col-1");
  });

  it("renders the grid layout correctly for screen-sizes ABOVE sm", () => {
    window.innerWidth = 640;
    render(<PhotoCardsWineTasting />);
    const grid = screen.getByTestId("photo-cards-wine-tasting");
    expect(grid).toHaveClass("sm:grid-cols-2");
  });

  it("checks if the background and text color classes are correct in variant 1", () => {
    render(<PhotoCardsWineTasting />);
    const photoCard = screen.getAllByTestId("photo-card")[0];

    expect(photoCard).toHaveClass("bg-tertiary1-hover text-tertiary1-darker");
  });

  it("checks if the background and text color classes are correct in variant 2", () => {
    render(<PhotoCardsWineTasting />);
    const photoCard = screen.getAllByTestId("photo-card")[1];

    expect(photoCard).toHaveClass("bg-secondary-normal text-secondary-light");
  });
});
