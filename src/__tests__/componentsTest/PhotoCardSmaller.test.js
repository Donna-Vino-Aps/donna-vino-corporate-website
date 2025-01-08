import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCardSmaller from "@/components/Card/PhotoCardSmaller";

describe("PhotoCardSmaller Component", () => {
  const defaultProps = {
    imageUrl: "/test-image-smaller.jpg",
    title: "Test Smaller Title",
    description: "Test description for PhotoCardSmaller.",
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    buttonIconUrl: "/test-icon-smaller.svg",
    buttonLabel: "Test Button",
    buttonVariant: "secondary-light",
    buttonTestId: "test-button",
  };

  it("renders without crashing", () => {
    render(<PhotoCardSmaller {...defaultProps} />);
  });

  it("displays the image with the correct src and alt attributes", () => {
    render(<PhotoCardSmaller {...defaultProps} />);
    const img = screen.getByAltText(defaultProps.title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
  });

  it("displays the title and description", () => {
    render(<PhotoCardSmaller {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the button with the correct label and attributes", () => {
    render(<PhotoCardSmaller {...defaultProps} />);
    const button = screen.getByText(defaultProps.buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button.closest("button")).toHaveAttribute(
      "data-testid",
      defaultProps.buttonTestId,
    );
  });
});
