import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer/Footer";

describe("Footer Component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Footer />);
    const links = [
      { id: "our-values", href: "/our-values", label: "Our Values" },
      { id: "our-team", href: "/our-team", label: "Our Team" },
      { id: "contact", href: "/contact", label: "Contact" },
    ];

    links.forEach((link) => {
      const navLink = screen.getByTestId(link.id);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveTextContent(link.label);
      expect(navLink).toHaveAttribute("href", link.href);
    });
  });

  it("renders the logo", () => {
    render(<Footer />);
    const logo = screen.getByTestId("logo-footer");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      "/images/donna-vino-logo-transparent.png",
    );
  });

  it("renders social media links", () => {
    render(<Footer />);

    const socialMediaLinks = [
      {
        alt: "Facebook Logo",
        href: "https://www.facebook.com/donnavino.dk/",
        src: "/icons/footer/facebook-line.svg",
      },
      {
        alt: "Instagram Logo",
        href: "https://www.instagram.com/donna_vino_winetastings/",
        src: "/icons/footer/instagram-original.svg",
      },
      {
        alt: "LinkedIn Logo",
        href: "/icons/footer/linkedin-alt.svg",
        src: "/icons/footer/linkedin-alt.svg",
      },
    ];

    socialMediaLinks.forEach((icon) => {
      const link = screen.getByAltText(icon.alt);
      expect(link).toBeInTheDocument(); // Check if the icon is rendered
      expect(link).toHaveAttribute("src", icon.src); // Verify the icon source
      expect(link.closest("a")).toHaveAttribute("href", icon.href); // Verify the anchor link
    });
  });
});
