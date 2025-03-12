import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import VerifyEmail from "@/app/subscription/verify/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import useFetch from "@/hooks/api/useFetch";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

jest.mock("@/hooks/api/useFetch", () => jest.fn());

jest.mock("@/utils/logging", () => ({
  logInfo: jest.fn(),
}));

describe("VerifyEmail Page", () => {
  let performFetchMock;

  beforeEach(() => {
    performFetchMock = jest.fn().mockResolvedValue({ success: true });
    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      data: null,
      performFetch: performFetchMock,
    });
    jest.clearAllMocks();
  });

  const renderWithLanguage = (translations = enTranslations) => {
    return render(
      <LanguageProvider value={{ translations }}>
        <VerifyEmail />
      </LanguageProvider>,
    );
  };

  it("shows loading text when isLoading is true", () => {
    useFetch.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
      performFetch: performFetchMock,
    });

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    expect(verifyButton).toHaveTextContent(/verifying/i);
    expect(verifyButton).toBeDisabled();
  });

  it("shows error message when token is missing", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    fireEvent.click(verifyButton);

    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent(/verification token is missing/i);
    });
  });

  it("handles API errors gracefully", async () => {
    useFetch.mockReturnValue({
      isLoading: false,
      error: { message: "API Error" },
      data: null,
      performFetch: performFetchMock,
    });

    renderWithLanguage();

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "API Error",
      );
    });
  });

  it("does not redirect when verification fails", async () => {
    const router = require("next/navigation").useRouter();

    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      data: { success: false },
      performFetch: performFetchMock.mockResolvedValue({ success: false }),
    });

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    expect(verifyButton).not.toBeDisabled();

    await waitFor(() => {
      expect(router.push).not.toHaveBeenCalled();
    });
  });

  it("handles verification process correctly", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => "valid-token"),
    });

    const { rerender } = renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    fireEvent.click(verifyButton);

    await waitFor(() => {
      expect(performFetchMock).toHaveBeenCalledWith({
        token: "valid-token",
        subject: "Welcome to Donna Vino Newsletter",
        templateName: "emailWelcomeTemplate",
      });
    });

    useFetch.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
      performFetch: performFetchMock,
    });
    rerender(
      <LanguageProvider value={{ translations: enTranslations }}>
        <VerifyEmail />
      </LanguageProvider>,
    );
    expect(screen.getByTestId("verify-button")).toBeDisabled();
  });

  it("disables button when verification is successful", async () => {
    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      data: { success: true },
      performFetch: performFetchMock,
    });

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    await waitFor(() => {
      expect(verifyButton).toBeDisabled();
    });
  });

  it("shows correct error message when API returns specific error", async () => {
    const customError = { message: "Custom API Error Message" };
    useFetch.mockReturnValue({
      isLoading: false,
      error: customError,
      data: null,
      performFetch: performFetchMock,
    });

    renderWithLanguage();

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        customError.message,
      );
    });
  });

  it("updates verification status when token is present but verification fails", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => "invalid-token"),
    });

    const apiError = new Error(
      "An error occurred during verification. Please try again.",
    );
    performFetchMock.mockRejectedValueOnce(apiError);

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    fireEvent.click(verifyButton);

    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent(
        "An error occurred during verification. Please try again.",
      );
    });
  });

  it("updates verification status when token is present but verification fails", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => "invalid-token"),
    });

    const apiError = new Error(
      "An error occurred during verification. Please try again.",
    );
    performFetchMock.mockRejectedValueOnce(apiError);

    renderWithLanguage();

    const verifyButton = screen.getByTestId("verify-button");
    fireEvent.click(verifyButton);

    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent(
        "An error occurred during verification. Please try again.",
      );
    });
  });
});
