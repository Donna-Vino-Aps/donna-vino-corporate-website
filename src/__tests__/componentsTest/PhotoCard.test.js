import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCard from "@/components/Card/PhotoCard";

describe("PhotoCard Component", () => {
  const defaultProps = {
    imageUrl: "/test-image.jpg",
    title: "Test Title",
    description: "Test description for PhotoCard.",
    buttonIcon: "/test-icon.svg",
    buttonLabel: "Test Button",
    buttonVariant: "secondary-darker",
    buttonTestId: "test-button",
    cardVariant: "variant1",
  };

  it("renders without crashing", () => {
    render(<PhotoCard {...defaultProps} />);

    expect(screen.getByTestId("photoDiv")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<PhotoCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("displays the correct description", () => {
    render(<PhotoCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("displays the image with the correct src and alt attributes", () => {
    render(<PhotoCard {...defaultProps} />);
    const img = screen.getByAltText(defaultProps.title);
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
    expect(img).toHaveAttribute("alt", defaultProps.title);
  });

  it("displays the button with the correct label", () => {
    render(<PhotoCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.buttonLabel)).toBeInTheDocument();
  });

  it("applies correct styles based on the cardVariant", () => {
    render(<PhotoCard {...defaultProps} />);
    const photoCard = screen.getByTestId("photoDiv");

    if (defaultProps.cardVariant === "variant1") {
      expect(photoCard).toHaveClass(
        "bg-tertiary1-hover",
        "text-tertiary1-darker",
      );
    } else if (defaultProps.cardVariant === "variant2") {
      expect(photoCard).toHaveClass(
        "bg-secondary-normal",
        "text-secondary-light",
      );
    }
  });
});
