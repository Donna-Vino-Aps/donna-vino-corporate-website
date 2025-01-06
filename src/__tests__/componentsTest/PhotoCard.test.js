import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCard from "@/components/Card/PhotoCard";

describe("PhotoCard Component", () => {
  it("should render the PhotoCard content", () => {
    render(<PhotoCard />);

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
