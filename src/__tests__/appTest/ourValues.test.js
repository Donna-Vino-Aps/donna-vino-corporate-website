import React from "react";
import { render, screen } from "@testing-library/react";
import OurValuesPage from "@/app/our-values/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import dkTranslations from "../../translations/dk.json";

jest.mock("../../components/OurValues/OurValues", () => {
  return jest.fn(() => (
    <div data-testid="our-values-mock">Our Values Content</div>
  ));
});

describe("OurValuesPage", () => {
  // Mock the screen size adjustment for small screens
  const renderWithLanguage = (translations = dkTranslations) => {
    return render(
      <LanguageProvider value={translations}>
        <OurValuesPage />
      </LanguageProvider>,
    );
  };

  beforeEach(() => {
    renderWithLanguage();
  });

  it("should render the OurValuesPage with the mocked OurValues component", () => {
    expect(screen.getByTestId("our-values-mock")).toBeInTheDocument();
    expect(screen.getByText("Our Values Content")).toBeInTheDocument();

    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Tilbage");
  });

  it("should render goBackButton", () => {
    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Tilbage");
  });
});
