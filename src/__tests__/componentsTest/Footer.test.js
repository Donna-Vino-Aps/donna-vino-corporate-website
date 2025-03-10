import React from "react";
import PropTypes from "prop-types";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from "next/navigation";

const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is provided and is a valid React node
  language: PropTypes.oneOf(["en", "dk"]), // Restrict language to "en" or "dk"
};

const renderWithProvider = (language = "en", pathname = "/") => {
  usePathname.mockReturnValue(pathname);

  render(
    <MockLanguageProvider language={language}>
      <Footer />
    </MockLanguageProvider>,
  );
};

describe("Footer Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    renderWithProvider("en");
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});

// Test for regular pages (non-subscription)
describe("on regular pages", () => {
  it("renders all navigation links", () => {
    renderWithProvider("en");
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
    renderWithProvider("en");
    const logo = screen.getByTestId("logo-footer");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      "src",
      "/images/donna-vino-logo-transparent.png",
    );
  });

  it("renders social media links", () => {
    renderWithProvider("en");

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
        href: "https://www.linkedin.com/company/donna-vino-aps/",
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

  it("has the correct height class for regular pages", () => {
    renderWithProvider("en");
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveClass("h-96");
    expect(footer).not.toHaveClass("h-72");
  });
});

// Test for subscription pages
describe("on subscription verify page", () => {
  it("does not render navigation links", () => {
    renderWithProvider("en", "/subscription/verify");

    const ourTeamLink = screen.queryByTestId("our-team");
    const ourValuesLink = screen.queryByTestId("our-values");
    const contactLink = screen.queryByTestId("contact");

    expect(ourTeamLink).not.toBeInTheDocument();
    expect(ourValuesLink).not.toBeInTheDocument();
    expect(contactLink).not.toBeInTheDocument();
  });

  it("still renders the logo", () => {
    renderWithProvider("en", "/subscription/verify");
    const logo = screen.getByTestId("logo-footer");
    expect(logo).toBeInTheDocument();
  });

  it("still renders social media links", () => {
    renderWithProvider("en", "/subscription/verify");
    const facebookIcon = screen.getByAltText("Facebook Logo");
    expect(facebookIcon).toBeInTheDocument();
  });

  it("has the correct height class for subscription pages", () => {
    renderWithProvider("en", "/subscription/verify");
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveClass("h-72");
    expect(footer).not.toHaveClass("h-96");
  });
});

describe("on subscription confirmed page", () => {
  it("does not render navigation links", () => {
    renderWithProvider("en", "/subscription/confirmed");

    const ourTeamLink = screen.queryByTestId("our-team");
    const ourValuesLink = screen.queryByTestId("our-values");
    const contactLink = screen.queryByTestId("contact");

    expect(ourTeamLink).not.toBeInTheDocument();
    expect(ourValuesLink).not.toBeInTheDocument();
    expect(contactLink).not.toBeInTheDocument();
  });

  it("has the correct height class for subscription pages", () => {
    renderWithProvider("en", "/subscription/confirmed");
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveClass("h-72");
    expect(footer).not.toHaveClass("h-96");
  });
});
