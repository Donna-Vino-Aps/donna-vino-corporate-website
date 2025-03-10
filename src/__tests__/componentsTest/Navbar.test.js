import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar/Navbar";
import { LanguageProvider } from "@/app/context/LanguageContext";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from "next/navigation";

describe("Navbar component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    usePathname.mockReturnValue("/");
  });

  test("should render the Navbar component correctly on regular pages", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );

    const logo = screen.getByAltText(
      "Donna Vino Logo Navbar - a brand for wine tastings and experiences",
    );
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByTestId("nav-link-home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveTextContent("Home");

    const ourValuesLink = screen.getByTestId("nav-link-our-values");
    expect(ourValuesLink).toBeInTheDocument();
    expect(ourValuesLink).toHaveTextContent("Our Values");

    const ourTeamLink = screen.getByTestId("nav-link-our-team");
    expect(ourTeamLink).toBeInTheDocument();
    expect(ourTeamLink).toHaveTextContent("Our Team");

    const contactLink = screen.getByTestId("nav-link-contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveTextContent("Contact");
  });

  test("should have the correct links to pages", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );

    const homeLink = screen.getByTestId("nav-link-home");
    expect(homeLink).toHaveAttribute("href", "/");

    const ourValuesLink = screen.getByTestId("nav-link-our-values");
    expect(ourValuesLink).toHaveAttribute("href", "/our-values");

    const ourTeamLink = screen.getByTestId("nav-link-our-team");
    expect(ourTeamLink).toHaveAttribute("href", "/our-team");

    const contactLink = screen.getByTestId("nav-link-contact");
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  test("should toggle the mobile menu when the menu button is clicked", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );

    const menuToggleButton = screen.getByTestId("menu-toggle");
    expect(menuToggleButton).toBeInTheDocument();

    const mobileMenu = screen.getByRole("menu");
    expect(mobileMenu).toHaveClass("hidden");

    fireEvent.click(menuToggleButton);
    expect(mobileMenu).not.toHaveClass("hidden");

    fireEvent.click(menuToggleButton);
    expect(mobileMenu).toHaveClass("hidden");
  });

  describe("on subscription verify page", () => {
    beforeEach(() => {
      usePathname.mockReturnValue("/subscription/verify");
    });

    test("should not render navigation links", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      const logo = screen.getByAltText(
        "Donna Vino Logo Navbar - a brand for wine tastings and experiences",
      );
      expect(logo).toBeInTheDocument();

      expect(screen.queryByTestId("nav-link-home")).not.toBeInTheDocument();
      expect(
        screen.queryByTestId("nav-link-our-values"),
      ).not.toBeInTheDocument();
      expect(screen.queryByTestId("nav-link-our-team")).not.toBeInTheDocument();
      expect(screen.queryByTestId("nav-link-contact")).not.toBeInTheDocument();
    });

    test("should not render the menu toggle button", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      expect(screen.queryByTestId("menu-toggle")).not.toBeInTheDocument();
    });

    test("should not render the sidebar", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    test("should display the language switch", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      const languageSwitchContainer = document.querySelector(
        'div[class*="block w-[5.12rem]"]',
      );
      expect(languageSwitchContainer).toBeInTheDocument();
      expect(languageSwitchContainer).not.toHaveClass("hidden");
    });
  });

  describe("on subscription confirmed page", () => {
    beforeEach(() => {
      usePathname.mockReturnValue("/subscription/confirmed");
    });

    test("should not render navigation links", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      const logo = screen.getByAltText(
        "Donna Vino Logo Navbar - a brand for wine tastings and experiences",
      );
      expect(logo).toBeInTheDocument();

      expect(screen.queryByTestId("nav-link-home")).not.toBeInTheDocument();
      expect(
        screen.queryByTestId("nav-link-our-values"),
      ).not.toBeInTheDocument();
      expect(screen.queryByTestId("nav-link-our-team")).not.toBeInTheDocument();
      expect(screen.queryByTestId("nav-link-contact")).not.toBeInTheDocument();
    });

    test("should display the language switch", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      const languageSwitchContainer = document.querySelector(
        'div[class*="block w-[5.12rem]"]',
      );
      expect(languageSwitchContainer).toBeInTheDocument();
      expect(languageSwitchContainer).not.toHaveClass("hidden");
    });
  });

  describe("on regular pages", () => {
    beforeEach(() => {
      usePathname.mockReturnValue("/");
    });

    test("should hide language switch on small screens", () => {
      render(
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>,
      );

      const languageSwitchContainer = document.querySelector(
        'div[class*="w-[5.12rem]"]',
      );
      expect(languageSwitchContainer).toHaveClass("hidden");
      expect(languageSwitchContainer).toHaveClass("sm:block");
    });
  });
});
