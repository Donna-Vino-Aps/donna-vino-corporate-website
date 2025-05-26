import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SubscriptionConfirmed from "@/app/subscription/confirmed/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";

describe("SubscriptionConfirmed Page", () => {
  const renderWithLanguage = (translations = enTranslations) => {
    return render(
      <LanguageProvider value={{ translations }}>
        <SubscriptionConfirmed />
      </LanguageProvider>,
    );
  };

  beforeEach(() => {
    renderWithLanguage();
  });

  it("renders the confirmation page correctly", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "subscription-confirmed-title");

    const paragraphs = screen.getAllByText(/.+/);
    expect(paragraphs.length).toBeGreaterThan(0);

    const wineGlassEmoji = screen.getByRole("img", { name: /wine glass/i });
    expect(wineGlassEmoji).toBeInTheDocument();
  });

  it("renders the home button with correct props", () => {
    const homeButton = screen.getByTestId("home-button");
    expect(homeButton).toBeInTheDocument();

    expect(homeButton).toHaveAttribute("href", "/");

    expect(homeButton).toHaveClass("w-full");
    expect(homeButton).toHaveClass("sm:w-[14.5rem]");
  });

  it("renders with the correct background styles", () => {
    const section = screen.getByLabelText(/Tak for at verificere din e-mail/i);
    expect(section).toHaveClass("bg-primary-light");
    expect(section).toHaveClass("sm:bg-dots-lg");
    expect(section).toHaveClass("bg-dots-sm");
  });

  it("renders with responsive text sizes", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-displaySmall");
    expect(heading).toHaveClass("sm:text-displayMedium");

    const paragraphs = screen.getAllByRole("paragraph");
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toHaveClass("text-bodySmall");
      expect(paragraph).toHaveClass("sm:text-bodyMedium");
      expect(paragraph).toHaveClass("md:text-bodyLarge");
    });
  });
});
