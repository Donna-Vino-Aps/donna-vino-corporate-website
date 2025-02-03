import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";

const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

const renderWithProvider = (language = "en") => {
  render(
    <MockLanguageProvider language={language}>
      <CookieBanner />
    </MockLanguageProvider>,
  );
};

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => null);
  Storage.prototype.setItem = jest.fn();
});

describe("CookieBanner Component", () => {
  test("should render the cookie banner if no consent is found in localStorage", () => {
    renderWithProvider();
    expect(screen.getByTestId("cookie-banner")).toBeInTheDocument();
  });

  test("should not render the cookie banner if consent is found in localStorage", () => {
    Storage.prototype.getItem = jest.fn(() => "accepted");
    renderWithProvider();
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });

  test("should store 'accepted' in localStorage and hide banner when Accept is clicked", () => {
    renderWithProvider();
    const acceptButton = screen.getByTestId("accept-button");
    fireEvent.click(acceptButton);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cookieConsent",
      "accepted",
    );
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });

  test("should store 'rejected' in localStorage and hide banner when Reject is clicked", () => {
    renderWithProvider();
    const rejectButton = screen.getByTestId("reject-button");
    fireEvent.click(rejectButton);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cookieConsent",
      "rejected",
    );
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });

  test("should contain a link to the Privacy Policy", () => {
    renderWithProvider();
    const privacyLink = screen.getByTestId("privacy-policy-link");

    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute("href", "/privacy-policy");
  });
});
