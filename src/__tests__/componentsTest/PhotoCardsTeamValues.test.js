import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardsTeamValues from "@/components/ContentGrid/PhotoCardsTeamValues";

describe("PhotoCardsTeamValues Component", () => {
  it("renders without crashing", () => {
    render(<PhotoCardsTeamValues />);
    expect(screen.getByTestId("photo-cards-team-values")).toBeInTheDocument();
  });

  it("renders the correct number of PhotoCardSmaller components", () => {
    render(<PhotoCardsTeamValues />);
    const photoCards = screen.getAllByTestId("photo-card-smaller");
    expect(photoCards.length).toBe(2);
  });

  it("renders the grid layout correctly for screen-sizes BELOW sm", () => {
    window.innerWidth = 400;
    render(<PhotoCardsTeamValues />);
    const grid = screen.getByTestId("photo-cards-team-values");
    expect(grid).toHaveClass("grid-col-1");
  });

  it("renders the grid layout correctly for screen-sizes ABOVE sm", () => {
    window.innerWidth = 640;
    render(<PhotoCardsTeamValues />);
    const grid = screen.getByTestId("photo-cards-team-values");
    expect(grid).toHaveClass("sm:grid-cols-2");
  });

  it("checks if the background and text color classes are correct in variant 1", () => {
    render(<PhotoCardsTeamValues />);
    const photoCard = screen.getAllByTestId("photo-card-smaller")[0];

    expect(photoCard).toHaveClass("bg-secondary-normal text-secondary-light");
  });

  it("checks if the background and text color classes are correct in variant 2", () => {
    render(<PhotoCardsTeamValues />);
    const photoCard = screen.getAllByTestId("photo-card-smaller")[1];

    expect(photoCard).toHaveClass("bg-tertiary1-hover text-tertiary1-darker");
  });
});
