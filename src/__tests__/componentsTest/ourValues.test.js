import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OurValues from "@/components/OurValues/OurValues";

describe("OurValues Component", () => {
  it("should render the Our Values section", () => {
    render(<OurValues />);

    // Check the main section
    const mainSection = screen.getByTestId("our-values-main");
    expect(mainSection).toBeInTheDocument();

    // Check the title
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Donna Vino Values");

    // Check the PhotoGallery container
    const photoGalleryContainer = screen.getByTestId("photoGallery-container");
    expect(photoGalleryContainer).toBeInTheDocument();

    // Check the PhotoGallery component
    const photoGallery = screen.getByTestId("photo-gallery");
    expect(photoGallery).toBeInTheDocument();

    // Check the images in the PhotoGallery component
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
    expect(image3).toHaveAttribute(
      "alt",
      "A woman smiling while enjoying a glass of wine",
    );

    // Check the text content in the article
    const introParagraph = screen.getByTestId("intro-paragraph");
    expect(introParagraph).toBeInTheDocument();
    expect(introParagraph).toHaveTextContent("Welcome to Donna Vino");

    const introParagraphDescription = screen.getByTestId(
      "intro-paragraph-description",
    );
    expect(introParagraphDescription).toBeInTheDocument();
    expect(introParagraphDescription).toHaveTextContent(
      "Your destination for authentic Italian flavours.",
    );

    const descriptionParagraph = screen.getByTestId("description-paragraph");
    expect(descriptionParagraph).toBeInTheDocument();
    expect(descriptionParagraph).toHaveTextContent(
      "Donna Vino is the result of former Michelin sommelier Katrine Giorgio's passion",
    );

    // Check the Carousel component
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();

    // Check the Go back button
    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Go back");
  });
});
