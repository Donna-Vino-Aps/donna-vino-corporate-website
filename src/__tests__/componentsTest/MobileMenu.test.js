import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { LanguageProvider } from "@/app/context/LanguageContext";
import "@testing-library/jest-dom";

describe("MobileMenu Component", () => {
  const mockToggleMenu = jest.fn();
  const navLinksMock = [
    { id: "home", href: "/", label: "Home" },
    { id: "our-values", href: "/our-values", label: "Our Values" },
    { id: "our-team", href: "/our-team", label: "Our Team" },
    { id: "contact", href: "/contact", label: "Contact" },
  ];

  it("renders correctly when menu is open", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    // Check if navigation links are rendered
    navLinksMock.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });

    // Check if the close button is rendered and has the correct aria-label
    expect(
      screen.getByRole("button", { name: "Close navigation menu" }),
    ).toBeInTheDocument();

    // Check if social media icons are rendered correctly
    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
    expect(screen.getByAltText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
  });

  it("does not render the menu when isMenuOpen is false", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={false}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    // Check that the menu is hidden
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toHaveClass("translate-x-full");
    expect(mobileMenu).not.toHaveClass("translate-x-0");
  });

  it("calls toggleMenu when the close button is clicked", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    // Simulate clicking the close button
    fireEvent.click(
      screen.getByRole("button", { name: "Close navigation menu" }),
    );

    // Check that the toggleMenu function was called
    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });

  it("navigates correctly when a nav link is clicked", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    // Simulate clicking a navigation link
    fireEvent.click(screen.getByText("Our Values"));

    // Ensure toggleMenu was called to close the menu
    expect(mockToggleMenu).toHaveBeenCalled();
  });

  it("should have correct aria-labels for social media icons", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    // Check for correct aria-labels on social media links
    expect(screen.getByTestId("social-icon-instagram-link")).toHaveAttribute(
      "aria-label",
      "Instagram",
    );
    expect(screen.getByTestId("social-icon-linkedin-link")).toHaveAttribute(
      "aria-label",
      "LinkedIn",
    );
    expect(screen.getByTestId("social-icon-facebook-link")).toHaveAttribute(
      "aria-label",
      "Facebook",
    );
  });

  it("should render language switch component", () => {
    render(
      <LanguageProvider>
        <MobileMenu
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );
    const languageSwitchContainer = screen.getByTestId(
      "language-switch-container",
    );
    // Check if the Language Switch container is rendered
    expect(screen.getByTestId("language-switch-container")).toBeInTheDocument();

    // Check if the buttons to switch languages are rendered
    expect(languageSwitchContainer).toHaveAttribute("role", "toolbar");
    expect(screen.getByTestId("en-icon")).toBeInTheDocument();
    expect(screen.getByTestId("dk-icon")).toBeInTheDocument();
  });
});
