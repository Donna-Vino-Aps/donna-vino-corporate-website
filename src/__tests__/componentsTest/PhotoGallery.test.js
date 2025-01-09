import React from "react";
import { render, screen } from "@testing-library/react";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";

describe("PhotoGallery Component", () => {
  it("renders without crashing", () => {
    render(<PhotoGallery />);
    const gallery = screen.getByTestId("photo-gallery");
    expect(gallery).toBeInTheDocument();
  });

  it("displays the correct number of images", () => {
    render(<PhotoGallery />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(3);
  });

  it("includes alt text for accessibility", () => {
    render(<PhotoGallery />);
    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toHaveAttribute("alt");
      expect(image.getAttribute("alt")).not.toBe("");
    });
  });

  it("uses semantic tags correctly", () => {
    render(<PhotoGallery />);
    const section = screen.getByTestId("photo-gallery");
    expect(section.tagName).toBe("SECTION");

    const figures = screen.getAllByRole("figure");
    expect(figures.length).toBeGreaterThan(0);
  });

  it("renders the correct structure of images and captions", () => {
    render(<PhotoGallery />);
    const image1 = screen.getByTestId("image-1-container");
    const image2 = screen.getByTestId("image-2-container");
    const image3 = screen.getByTestId("image-3-container");

    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(image3).toBeInTheDocument();

    expect(image1.querySelector("img")).toHaveAttribute(
      "src",
      "/images/our-values/photo-1.png",
    );
    expect(image2.querySelector("img")).toHaveAttribute(
      "src",
      "/images/our-values/photo-2.png",
    );
    expect(image3.querySelector("img")).toHaveAttribute(
      "src",
      "/images/our-values/photo-3.png",
    );
  });

  it("uses lazy loading for images", () => {
    render(<PhotoGallery />);
    const images = screen.getAllByRole("img");
    images.forEach((image) => {
      expect(image).toHaveAttribute("loading", "lazy");
    });
  });

  it('correctly uses role="presentation" for decorative SVG', () => {
    render(<PhotoGallery />);
    const dottedShape = screen.getByTestId("dotted-shape-4");
    expect(dottedShape).toHaveAttribute("role", "presentation");
  });
});
