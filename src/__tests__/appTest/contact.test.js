import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/app/contact/page";

describe("Contact Page", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("should render the contact page with MapSection", () => {
    // Check that the MapSection component is rendered
    const mapSection = screen.getByTestId("map-section");
    expect(mapSection).toBeInTheDocument();

    // Optionally, check that other page elements are present
    const contactContainer = screen.getByTestId("contact-container");
    expect(contactContainer).toBeInTheDocument();
  });

  it("should render goBackButton", () => {
    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Go back");
  });
});
