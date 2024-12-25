import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../app/page";

describe("Home Page", () => {
  it("should render the home page content", () => {
    render(<Home />);

    // Check that the main heading is in the document
    const heading = screen.getByTestId("main-heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to the official Donna Vino");

    // Check that the description is rendered correctly
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "This project is dedicated to developing the website for our innovative platform, where premium wine sales meet curated tasting experiences.",
    );
  });
});
