import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardSmaller from "@/components/Card/PhotoCardSmaller";

describe("PhotoCardSmaller Component", () => {
  const defaultProps = {
    imageUrl: "/test-image.jpg",
    title: "Test Title",
    description: "Test description for PhotoCardSmaller.",
    buttonIcon: "/test-icon.svg",
    buttonLabel: "Test Button",
    buttonVariant: "secondary-darker",
    buttonTestId: "test-button-smaller",
    cardVariant: "variant1",
  };

  it("renders without crashing", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    expect(screen.getByTestId("photo-card-smaller")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    expect(screen.getByTestId("photo-card-title")).toHaveTextContent(
      defaultProps.title,
    );
  });

  it("displays the correct description", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    expect(screen.getByTestId("photo-card-description")).toHaveTextContent(
      defaultProps.description,
    );
  });

  it("displays the image with the correct src and alt attributes", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    const img = screen.getByTestId("card-image");
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
    expect(img).toHaveAttribute("alt", defaultProps.title);
  });

  it("displays the button with the correct label", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    expect(screen.getByTestId(defaultProps.buttonTestId)).toHaveTextContent(
      defaultProps.buttonLabel,
    );
  });

  it("applies correct styles based on the cardVariant", () => {
    render(<PhotoCardSmaller {...defaultProps} />);

    const photoCardSmaller = screen.getByTestId("photo-card-smaller");

    if (defaultProps.cardVariant === "variant1") {
      expect(photoCardSmaller).toHaveClass(
        "bg-secondary-normal",
        "text-secondary-light",
      );
    } else if (defaultProps.cardVariant === "variant2") {
      expect(photoCardSmaller).toHaveClass(
        "bg-tertiary1-hover",
        "text-tertiary1-darker",
      );
    }
  });
});
