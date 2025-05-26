import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import MapSection from "@/components/Map/MapSection";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import PropTypes from "prop-types";

const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["en", "dk"]),
};

const renderWithProvider = (language = "en") => {
  render(
    <MockLanguageProvider language={language}>
      <MapSection />
    </MockLanguageProvider>,
  );
};

describe("MapSection Component", () => {
  test("renders all info items correctly", () => {
    renderWithProvider();

    const locationTitle = screen.getByText("Vores placering");
    const locationDescription = screen.getByText(
      "Christianshavns Voldgade 54 - 1424 København",
    );
    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();

    const phoneTitle = screen.getByText("Telefonnummer");
    const phoneDescription = screen.getByText("+45 31 62 06 93");
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();

    const emailTitle = screen.getByText("E-mailadresse");
    const emailDescription = screen.getByText("info@donnavino.dk");
    expect(emailTitle).toBeInTheDocument();
    expect(emailDescription).toBeInTheDocument();
  });

  test("renders correct number of info items", () => {
    renderWithProvider();
    const infoItems = screen.getAllByRole("heading", { level: 3 });
    expect(infoItems.length).toBe(3);
  });

  test("renders correct icons for each info item", () => {
    renderWithProvider();
    const locationIcon = screen.getByAltText("Vores placering");
    const phoneIcon = screen.getByAltText("Telefonnummer");
    const emailIcon = screen.getByAltText("E-mailadresse");

    expect(locationIcon).toHaveAttribute("src", "/icons/location.svg");
    expect(phoneIcon).toHaveAttribute("src", "/icons/phone-map.svg");
    expect(emailIcon).toHaveAttribute("src", "/icons/email.svg");
  });

  test("renders the map iframe", () => {
    renderWithProvider();
    const mapIframe = screen.getByTitle(
      "Interactive map showing our company location in Copenhagen",
    );
    expect(mapIframe).toBeInTheDocument();
    expect(mapIframe).toHaveAttribute(
      "src",
      expect.stringContaining("google.com/maps/embed"),
    );
  });

  test("displays the correct information items", () => {
    renderWithProvider();

    const locationTitle = screen.getByText(/Vores placering/i);
    const locationDescription = screen.getByText(
      /Christianshavns Voldgade 54 - 1424 København/i,
    );
    const phoneTitle = screen.getByText(/Telefonnummer/i);
    const phoneDescription = screen.getByText(/\+45 31 62 06 93/i);
    const emailTitle = screen.getByText(/E-mailadresse/i);
    const emailDescription = screen.getByText(/info@donnavino.dk/i);

    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();
    expect(emailTitle).toBeInTheDocument();
    expect(emailDescription).toBeInTheDocument();
  });

  test('checks if the "Check on Maps" button is present and clickable', () => {
    renderWithProvider();

    const checkMapsButton = screen.getByText(/Tjek på Maps/i);

    expect(checkMapsButton).toBeInTheDocument();

    fireEvent.click(checkMapsButton);
  });
});
