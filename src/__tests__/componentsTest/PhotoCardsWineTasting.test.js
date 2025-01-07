import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardsWineTasting from "@/components/ContentGrid/PhotoCardsWineTasting";

describe("PhotoCardsWineTasting Component", () => {
  it("renders without crashing", () => {
    render(<PhotoCardsWineTasting />);
  });

  it("renders the correct number of PhotoCard components", () => {
    render(<PhotoCardsWineTasting />);
    const photoCards = screen.getAllByTestId("photoDiv");
    expect(photoCards).toHaveLength(2);
  });

  it("renders the grid layout correctly for screen-sizes BELOW md", async () => {
    Object.defineProperty(window, "innerWidth", { value: 600 });
    global.dispatchEvent(new Event("resize"));
    render(<PhotoCardsWineTasting />);
    const grid = await screen.getByTestId("testGrid");
    await waitFor(() => {
      expect(grid).toBeInTheDocument();
      expect(grid).toHaveClass("grid-cols-1");
    });
  });
});
