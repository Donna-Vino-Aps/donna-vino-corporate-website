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

    const locationTitle = screen.getByText("Our Location");
    const locationDescription = screen.getByText(
      "Wildersgade 23, 1408 København K",
    );
    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();

    const phoneTitle = screen.getByText("Phone Number");
    const phoneDescription = screen.getByText("+45 12 34 56 78");
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();

    const emailTitle = screen.getByText("Email Address");
    const emailDescription = screen.getByText("info@donnvino.dk");
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
    const locationIcon = screen.getByAltText("Our Location");
    const phoneIcon = screen.getByAltText("Phone Number");
    const emailIcon = screen.getByAltText("Email Address");

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

    const locationTitle = screen.getByText(/Our Location/i);
    const locationDescription = screen.getByText(
      /Wildersgade 23, 1408 København K/i,
    );
    const phoneTitle = screen.getByText(/Phone Number/i);
    const phoneDescription = screen.getByText(/\+45 12 34 56 78/i);
    const emailTitle = screen.getByText(/Email Address/i);
    const emailDescription = screen.getByText(/info@donnvino.dk/i);

    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();
    expect(emailTitle).toBeInTheDocument();
    expect(emailDescription).toBeInTheDocument();
  });

  test('checks if the "Check on Maps" button is present and clickable', () => {
    renderWithProvider();

    const checkMapsButton = screen.getByText(/Check on Maps/i);

    expect(checkMapsButton).toBeInTheDocument();

    fireEvent.click(checkMapsButton);
  });
});
