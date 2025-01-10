import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/app/contact/page";

describe("Contact Page", () => {
  it("should render the contact page with MapSection", () => {
    render(<Contact />);

    // Check that the MapSection component is rendered
    const mapSection = screen.getByTestId("map-section");
    expect(mapSection).toBeInTheDocument();

    // Optionally, check that other page elements are present
    const contactContainer = screen.getByTestId("contact-container");
    expect(contactContainer).toBeInTheDocument();
  });
});
