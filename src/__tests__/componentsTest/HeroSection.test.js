import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroSection from "@/components/HeroSection/HeroSection";

describe("HeroSection Component", () => {
  it("should render the HeroSection content", () => {
    render(<HeroSection />);

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
    const video = screen.getByRole("region", {
      name: "Background video for Hero Section",
    });
    expect(video).toBeInTheDocument();
  });
});
