import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentGridPhotoCards from "@/components/ContentGrid/PhotoCardsWineTasting";

describe("ContentGridPhotoCards Component", () => {
  it("should render the ContentGridPhotoCards content", () => {
    render(<ContentGridPhotoCards />);

    // Check the heading text
    const heading = screen.getByText(
      /Welcome to Donna Vino, your unique wine experience\./i,
    );
    expect(heading).toBeInTheDocument();

    // Check the description text
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Discover unique wine stories told by your sommelier while your private chef customizes the menu.",
    );

    // Check that the video is present
    const video = screen.getByTestId("hero-video");
    expect(video).toBeInTheDocument();
  });
});
