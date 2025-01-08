import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OurValues from "@/components/OurValues/OurValues";

describe("OurValues Component", () => {
  it("should render the Our Values section", () => {
    render(<OurValues />);

    // Check the section
    const section = screen.getByTestId("our-values-section");
    expect(section).toBeInTheDocument();

    // Check the title
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Donna Vino Values");

    // Check the images
    const image1 = screen.getByTestId("image-1");
    expect(image1).toBeInTheDocument();
    expect(image1).toHaveAttribute(
      "alt",
      "A vineyard in summer with lush green vines",
    );

    const image2 = screen.getByTestId("image-2");
    expect(image2).toBeInTheDocument();

    const image3 = screen.getByTestId("image-3");
    expect(image3).toBeInTheDocument();

    // Check the text content
    const introParagraph = screen.getByTestId("intro-paragraph");
    expect(introParagraph).toBeInTheDocument();
    expect(introParagraph).toHaveTextContent("Welcome to Donna Vino");

    const descriptionParagraph = screen.getByTestId("description-paragraph");
    expect(descriptionParagraph).toBeInTheDocument();
    expect(descriptionParagraph).toHaveTextContent(
      "Donna Vino is the result of former Michelin sommelier Katrine Giorgio's passion",
    );
  });
});
