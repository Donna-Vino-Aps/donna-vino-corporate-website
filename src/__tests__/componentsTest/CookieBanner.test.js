import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieBanner from "../../components/CookieBanner/CookieBanner";

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => null);
  Storage.prototype.setItem = jest.fn();
});

describe("CookieBanner Component", () => {
  test("should render the cookie banner if no consent is found in localStorage", () => {
    render(<CookieBanner />);
    expect(screen.getByTestId("cookie-banner")).toBeInTheDocument();
  });

  test("should not render the cookie banner if consent is found in localStorage", () => {
    Storage.prototype.getItem = jest.fn(() => "accepted");
    render(<CookieBanner />);
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });

  test("should store 'accepted' in localStorage and hide banner when Accept is clicked", () => {
    render(<CookieBanner />);
    const acceptButton = screen.getByTestId("accept-button");
    fireEvent.click(acceptButton);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cookieConsent",
      "accepted",
    );
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });

  test("should store 'rejected' in localStorage and hide banner when Reject is clicked", () => {
    render(<CookieBanner />);
    const rejectButton = screen.getByTestId("reject-button");
    fireEvent.click(rejectButton);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cookieConsent",
      "rejected",
    );
    expect(screen.queryByTestId("cookie-banner")).not.toBeInTheDocument();
  });
});
