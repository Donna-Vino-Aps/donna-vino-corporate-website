import React from "react";
import { render, screen } from "@testing-library/react";
import ContactUs from "@/components/ContactUs/ContactUs";

describe("ContactUs Component", () => {
  beforeEach(() => {
    render(<ContactUs />);
  });

  test("renders all info items correctly", () => {
    const locationTitle = screen.getByText("Our Location");
    const locationDescription = screen.getByText("Christianshavn, Copenhagen");
    expect(locationTitle).toBeInTheDocument();
    expect(locationDescription).toBeInTheDocument();

    const phoneTitle = screen.getByText("Phone Number");
    const phoneDescription = screen.getByText("(+45) 12 34 56 78");
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneDescription).toBeInTheDocument();

    const emailTitle = screen.getByText("Email Address");
    const emailDescription = screen.getByText("info@donnvino.dk");
    expect(emailTitle).toBeInTheDocument();
    expect(emailDescription).toBeInTheDocument();
  });

  test("renders correct icons for each info item", () => {
    const locationIcon = screen.getByAltText("Our Location");
    const phoneIcon = screen.getByAltText("Phone Number");
    const emailIcon = screen.getByAltText("Email Address");

    expect(locationIcon).toHaveAttribute("src", "/icons/location-red.svg");
    expect(phoneIcon).toHaveAttribute("src", "/icons/phone-map-red.svg");
    expect(emailIcon).toHaveAttribute("src", "/icons/email-red.svg");
  });

  test("renders the form with all correct input fields", () => {
    const nameInput = screen.getByPlaceholderText("Your name");
    const emailInput = screen.getByPlaceholderText("Your email");
    const phoneInput = screen.getByPlaceholderText("Your phone");
    const messageTextarea = screen.getByPlaceholderText("Your message");

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
    const button = screen.getByTestId("secondary-normal-send-message-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Send Message");
  });
});
