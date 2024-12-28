import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home Page", () => {
  it("should render the home page content", () => {
    render(<Home />);

    // Check that the main container is rendered
    const mainContainer = screen.getByTestId("main-heading");
    expect(mainContainer).toBeInTheDocument();

    // Check that the HeroSection component is rendered
    const heroSection = screen.getByRole("region", { name: "Hero Section" });
    expect(heroSection).toBeInTheDocument();
  });
});
