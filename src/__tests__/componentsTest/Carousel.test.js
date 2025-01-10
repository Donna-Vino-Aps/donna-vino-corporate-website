import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "../../components/Carousel/Carousel";

describe("Carousel component", () => {
  test("renders the carousel with initial image", () => {
    render(<Carousel />);
    const image = screen.getByTestId("carousel-image");
    expect(image).toHaveAttribute("src", "/images/our-values/photo-2.png");
    expect(image).toHaveAttribute(
      "alt",
      "A cork with the text: 'Life is too short to drink bad wine'",
    );
  });

  test("navigates to the next image when next button is clicked", () => {
    render(<Carousel />);
    const nextButton = screen.getByTestId("carousel-next-button");
    fireEvent.click(nextButton);
    const image = screen.getByTestId("carousel-image");
    expect(image).toHaveAttribute("src", "/images/our-values/photo-3.png");
  });

  test("navigates to the previous image when previous button is clicked", () => {
    render(<Carousel />);
    const previousButton = screen.getByTestId("carousel-previous-button");
    fireEvent.click(previousButton);
    const image = screen.getByTestId("carousel-image");
    expect(image).toHaveAttribute("src", "/images/our-values/photo-1.png");
  });
});
