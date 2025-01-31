import React from "react";
import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../../app/privacy-policy/page";

describe("PrivacyPolicy Component", () => {
  beforeEach(() => {
    render(<PrivacyPolicy />);
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
