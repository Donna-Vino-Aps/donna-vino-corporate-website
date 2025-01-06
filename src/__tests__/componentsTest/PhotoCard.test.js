import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhotoCard from "@/components/Card/PhotoCard";

describe("PhotoCard Component", () => {
  const defaultProps = {
    imageUrl: "/test-image.jpg",
    title: "Test Title",
    smallScreenTitle: "Small Screen Title",
    description: "Test description for PhotoCard.",
    buttonIcon: "/test-icon.svg",
    buttonLabel: "Test Button",
    backgroundColor: "#ffffff",
    fontColor: "#000000",
    buttonBgColor: "#123456",
    buttonFontColor: "#abcdef",
  };

  it("renders without crashing", () => {
    render(<PhotoCard {...defaultProps} />);
  });

  it("displays the correct title for large screens", () => {
    global.innerWidth = 1320;
    global.dispatchEvent(new Event("resize"));
    render(<PhotoCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("displays the small screen title when the screen width is small", () => {
    global.innerWidth = 600; // Simulate a small screen
    global.dispatchEvent(new Event("resize")); // Trigger resize event
    render(<PhotoCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.smallScreenTitle)).toBeInTheDocument();
  });

  it("displays the image with the correct src and alt attributes", () => {
    render(<PhotoCard {...defaultProps} />);
    const img = screen.getByAltText(defaultProps.title);
    expect(img).toHaveAttribute("src", defaultProps.imageUrl);
  });

  it("displays the button with the correct label and styles", () => {
    render(<PhotoCard {...defaultProps} />);
    const button = screen.getByText(defaultProps.buttonLabel);
    expect(button).toBeInTheDocument();
    expect(button.closest("button")).toHaveStyle(
      `background-color: ${defaultProps.buttonBgColor}`,
    );
  });
});
