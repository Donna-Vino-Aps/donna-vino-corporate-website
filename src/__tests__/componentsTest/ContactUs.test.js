import React from "react";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import ContactUs from "@/components/ContactUs/ContactUs";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";

const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is provided and is a valid React node
  language: PropTypes.oneOf(["en", "dk"]), // Restrict language to "en" or "dk"
};

describe("ContactUs Component", () => {
  const renderWithProvider = (language = "en") => {
    render(
      <MockLanguageProvider language={language}>
        <ContactUs />
      </MockLanguageProvider>,
    );
  };
  test("renders all info items correctly", () => {
    renderWithProvider("en");

    const locationTitle = screen.getByText("Vores placering");
    const locationDescription = screen.getByText(
      "Christianshavns Voldgade 54, 1424 København",
    );
    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();

    const phoneTitle = screen.getByText("Telefonnummer");
    const phoneDescription = screen.getByText("(+45) 31 62 06 93");
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();

    const emailTitle = screen.getByText("E-mailadresse");
    const emailDescription = screen.getByText("info@donnavino.dk");
    expect(emailTitle).toBeInTheDocument();
    expect(emailDescription).toBeInTheDocument();
  });

  test("renders correct icons for each info item", () => {
    renderWithProvider("dk");

    const locationIcon = screen.getByAltText("Vores placering");
    const phoneIcon = screen.getByAltText("Telefonnummer");
    const emailIcon = screen.getByAltText("E-mailadresse");

    expect(locationIcon).toHaveAttribute("src", "/icons/location-red.svg");
    expect(phoneIcon).toHaveAttribute("src", "/icons/phone-map-red.svg");
    expect(emailIcon).toHaveAttribute("src", "/icons/email-red.svg");
  });

  test("renders the form with all correct input fields", () => {
    renderWithProvider("dk");

    const nameInput = screen.getByPlaceholderText("Dit Navn");
    const emailInput = screen.getByPlaceholderText("Din E-mail");
    const phoneInput = screen.getByPlaceholderText("Dit Telefonnummer");
    const messageTextarea = screen.getByPlaceholderText("Din Besked");

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute("type", "text");

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");

    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveAttribute("type", "tel");

    expect(messageTextarea).toBeInTheDocument();
    expect(messageTextarea).toHaveAttribute("rows", "4");
  });

  test("renders the Send Message button", () => {
    renderWithProvider("dk");

    const button = screen.getByTestId("secondary-normal-send-message-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sende Besked");
  });
});
