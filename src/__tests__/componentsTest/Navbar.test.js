import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar/Navbar";
import { LanguageProvider } from "@/app/context/LanguageContext";

describe("Navbar component", () => {
  test("should render the Navbar component correctly", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );

    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByTestId("home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent("Home");

    const ourValuesLink = screen.getByTestId("our-values");
    expect(ourValuesLink).toBeInTheDocument();
    expect(ourValuesLink).toHaveTextContent("Our Values");

    const ourTeamLink = screen.getByTestId("our-team");
    expect(ourTeamLink).toBeInTheDocument();
    expect(ourTeamLink).toHaveTextContent("Our Team");

    const contactLink = screen.getByTestId("contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveTextContent("Contact");
  });

  test("should have the correct links to pages", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );

    const homeLink = screen.getByTestId("home");
    expect(homeLink).toHaveAttribute("href", "/");

    const ourValuesLink = screen.getByTestId("our-values");
    expect(ourValuesLink).toHaveAttribute("href", "/our-values");

    const ourTeamLink = screen.getByTestId("our-team");
    expect(ourTeamLink).toHaveAttribute("href", "/our-team");

    const contactLink = screen.getByTestId("contact");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});
