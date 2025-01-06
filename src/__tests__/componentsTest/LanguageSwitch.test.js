import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LanguageSwitch from "@/components/Navbar/LanguageSwitch";

describe("LanguageSwitch component", () => {
  test("should have the correct class when the icon is clicked", () => {
    render(<LanguageSwitch />);

    const englishIcon = screen.getByTestId("en-icon");
    expect(englishIcon).toHaveClass("bg-primary-light");

    const denmarkIcon = screen.getByTestId("dk-icon");
    fireEvent.click(denmarkIcon);

    expect(denmarkIcon).toHaveClass("bg-primary-light");
    expect(englishIcon.classList.contains("bg-primary-light")).toBe(false);
  });
});
