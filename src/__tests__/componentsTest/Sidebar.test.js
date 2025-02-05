import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SideBar from "@/components/Sidebar/Sidebar";
import { LanguageProvider } from "@/app/context/LanguageContext";
import "@testing-library/jest-dom";

describe("SideBar Component", () => {
  const mockToggleMenu = jest.fn();
  const navLinksMock = [
    { id: "home", href: "/", label: "Home" },
    { id: "our-values", href: "/our-values", label: "Our Values" },
    { id: "our-team", href: "/our-team", label: "Our Team" },
    { id: "contact", href: "/contact", label: "Contact" },
  ];

  it("renders correctly when sidebar is open", () => {
    render(
      <LanguageProvider>
        <SideBar
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

  it("does not render the sidebar when isMenuOpen is false", () => {
    render(
      <LanguageProvider>
        <SideBar
          isMenuOpen={false}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    const sideBar = screen.getByTestId("sidebar");

    // Check that the sidebar is visually hidden
    expect(sideBar).toHaveClass("translate-x-full");
    expect(sideBar).not.toHaveClass("translate-x-0");

    expect(sideBar).toHaveAttribute("inert", "");
  });

  it("calls toggleMenu when the close button is clicked", () => {
    render(
      <LanguageProvider>
        <SideBar
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
        <SideBar
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    fireEvent.click(screen.getByText("Our Values"));

    expect(mockToggleMenu).toHaveBeenCalled();
  });

  it("should have correct aria-labels for social media icons", () => {
    render(
      <LanguageProvider>
        <SideBar
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

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

  it("should render the language switch component", () => {
    render(
      <LanguageProvider>
        <SideBar
          isMenuOpen={true}
          toggleMenu={mockToggleMenu}
          navLinks={navLinksMock}
        />
      </LanguageProvider>,
    );

    const languageSwitch = screen.getByTestId("language-switch-container");
    expect(languageSwitch).toBeInTheDocument();
  });
});
