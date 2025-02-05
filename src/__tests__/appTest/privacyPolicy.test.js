import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../app/privacy-policy/page";
import { LanguageProvider } from "../../app/context/LanguageContext";

const mockTranslations = {
  "button.go-back": "Go Back",
  "privacy.h1": "Privacy Policy",
  "privacy.updated": "Last updated:",
  "privacy.h2-1": "Introduction",
  "privacy.p1": "Welcome to",
  "privacy.variations": '"we", "us", or "our"',
  "privacy.p2":
    "Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website",
  "privacy.h2-2": "What Data We Collect",
  "privacy.p3":
    "We do not collect personal data unless you contact us directly. However, we may collect:",
  "privacy.item1-strong": "Cookies and Usage Data",
  "privacy.item1-p":
    "To improve our website, we use cookies and analytics tools",
  "privacy.item2-strong": "Contact Information",
  "privacy.item2-p":
    "only if you voluntarily reach out via email or contact forms",
  "privacy.h2-3": "How We Use Your Data",
  "privacy.p4": "We use the collected data to",
  "privacy.item3":
    "Improve the performance and user experience of our website.",
  "privacy.item4": "Respond to inquiries if you contact us.",
  "privacy.p5-1": "We",
  "privacy.p5-2": "do not",
  "privacy.p5-3": "sell or share your data with third parties.",
  "privacy.h2-4": "Cookies and Tracking Technologies",
  "privacy.p5":
    "We use cookies to analyze website traffic. You can accept or reject cookies via your browser settings. For more details, see our",
  "cookie.policy": "Cookie Policy",
  "privacy.h2-5": "Your Rights Under GDPR",
  "privacy.p6":
    "As a visitor from Denmark or the EU, you have rights regarding your personal data, including:",
  "privacy.item5": "The right to access, correct, or delete your data.",
  "privacy.item6": "The right to object to data processing.",
  "privacy.item7": "The right to withdraw consent (e.g., disabling cookies).",
  "privacy.p7": "To exercise your rights, contact us at",
  "privacy.h2-6": "Changes to This Policy",
  "privacy.p8":
    'We may update this policy. Any changes will be posted on this page with a revised "Last updated" date.',
  "privacy.h2-7": "Contact Information",
  "privacy.p9":
    "If you have any questions about this Privacy Policy, please contact us:",
  "privacy.mail": "Email:",
  "privacy.address": "Address",
};

describe("PrivacyPolicy Component", () => {
  beforeEach(() => {
    render(
      <LanguageProvider value={{ translations: mockTranslations }}>
        <PrivacyPolicy />
      </LanguageProvider>,
    );
  });

  test("renders Go Back button with translation", () => {
    expect(screen.getByTestId("go-back-button")).toHaveTextContent("Go back");
  });

  test("renders the Privacy Policy title", () => {
    expect(screen.getByTestId("privacy-policy-title")).toBeInTheDocument();
  });

  test("displays last updated section", () => {
    expect(screen.getByTestId("last-updated")).toBeInTheDocument();
  });

  test("renders Introduction section", () => {
    expect(screen.getByTestId("intro-title")).toBeInTheDocument();
    expect(screen.getByTestId("intro-text")).toBeInTheDocument();
  });

  test("renders Data Collection section", () => {
    expect(screen.getByTestId("data-collection-title")).toBeInTheDocument();
    expect(screen.getByTestId("data-collection-text")).toBeInTheDocument();
  });

  test("renders How We Use Your Data section", () => {
    expect(screen.getByTestId("usage-title")).toBeInTheDocument();
    expect(screen.getByTestId("usage-text")).toBeInTheDocument();
  });

  test("renders Cookies section", () => {
    expect(screen.getByTestId("cookies-title")).toBeInTheDocument();
  });

  test("renders GDPR Rights section", () => {
    expect(screen.getByTestId("rights-title")).toBeInTheDocument();
    expect(screen.getByTestId("rights-text")).toBeInTheDocument();
  });

  test("renders Changes to Policy section", () => {
    expect(screen.getByTestId("changes-title")).toBeInTheDocument();
  });

  test("renders Contact Information section", () => {
    expect(screen.getByTestId("contact-title")).toBeInTheDocument();
  });
});
