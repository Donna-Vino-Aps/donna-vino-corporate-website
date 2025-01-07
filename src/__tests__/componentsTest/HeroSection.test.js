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
    const video = screen.getByTestId("hero-video");
    expect(video).toBeInTheDocument();

    // Check that the dotted shapes images are present
    const dottedShape1 = screen.getByTestId("dotted-shape-1");
    expect(dottedShape1).toBeInTheDocument();

    const dottedShape2 = screen.getByTestId("dotted-shape-2");
    expect(dottedShape2).toBeInTheDocument();

    const dottedShape3 = screen.getByTestId("dotted-shape-3");
    expect(dottedShape3).toBeInTheDocument();

    const dottedShape4 = screen.getByTestId("dotted-shape-4");
    expect(dottedShape4).toBeInTheDocument();

    // Check that the buttons are rendered
    const getStartedButton = screen.getByTestId("get-started-button");
    expect(getStartedButton).toBeInTheDocument();

    const secondaryButton = screen.getByTestId("secondary-button");
    expect(secondaryButton).toBeInTheDocument();

    // Check the video presence
    const heroVideo = screen.getByTestId("hero-video");
    expect(heroVideo).toBeInTheDocument();
  });
});
