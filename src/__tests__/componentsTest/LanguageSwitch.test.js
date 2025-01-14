import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LanguageSwitch from "@/components/Navbar/LanguageSwitch";

describe("LanguageSwitch component", () => {
  test("should render LanguageSwitch component correctly", () => {
    render(<LanguageSwitch />);

    const languageSwitchContainer = screen.getByTestId(
      "language-switch-container",
    );
    expect(languageSwitchContainer).toBeInTheDocument();

    const languageSwitch = screen.getByTestId("language-switch");
    expect(languageSwitch).toBeInTheDocument();

    const englishIcon = screen.getByTestId("en-icon");
    expect(englishIcon).toBeInTheDocument();

    const denmarkIcon = screen.getByTestId("dk-icon");
    expect(denmarkIcon).toBeInTheDocument();
  });

  test("should highlight the correct icon when clicked", () => {
    render(<LanguageSwitch />);

    const englishIcon = screen.getByTestId("en-icon");
    const denmarkIcon = screen.getByTestId("dk-icon");

    // Initially, English is selected
    expect(englishIcon).toHaveClass("bg-primary-light");
    expect(denmarkIcon).not.toHaveClass("bg-primary-light");

    // Click on Denmark icon
    fireEvent.click(denmarkIcon);

    // Expect Denmark icon to be selected and English deselected
    expect(denmarkIcon).toHaveClass("bg-primary-light");
    expect(englishIcon).not.toHaveClass("bg-primary-light");
  });

  test("should trigger the onClick handler when icons are clicked", () => {
    render(<LanguageSwitch />);

    const englishIcon = screen.getByTestId("en-icon");
    const denmarkIcon = screen.getByTestId("dk-icon");

    // Click on Denmark icon
    fireEvent.click(denmarkIcon);
    expect(denmarkIcon).toHaveClass("bg-primary-light");

    // Click back to English icon
    fireEvent.click(englishIcon);
    expect(englishIcon).toHaveClass("bg-primary-light");
    expect(denmarkIcon).not.toHaveClass("bg-primary-light");
  });
});
