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

    navLinksMock.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });

    expect(
      screen.getByRole("button", { name: "Close menu" }),
    ).toBeInTheDocument();

    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
    expect(screen.getByAltText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
  });

  it("does not render the menu when isMenuOpen is false", () => {
    render(
      <LanguageProvider>
        {" "}
        <MobileMenu
          isMenuOpen={false}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

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

    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));

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

    fireEvent.click(screen.getByText("Our Values"));

    expect(mockToggleMenu).toHaveBeenCalled();
  });
});
