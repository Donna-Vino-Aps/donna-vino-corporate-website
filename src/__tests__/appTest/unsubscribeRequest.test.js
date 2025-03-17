import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UnsubscribeRequestPage from "@/app/subscription/unsubscribe-request/page";
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

describe("UnsubscribeRequestPage", () => {
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
        <UnsubscribeRequestPage />
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

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    expect(unsubscribeButton).toHaveTextContent(/submitting/i);
    expect(unsubscribeButton).toBeDisabled();
  });

  it("shows error message when token is missing", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => null),
    });

    renderWithLanguage();

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    fireEvent.click(unsubscribeButton);

    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent(/unsubscribe token is missing/i);
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

    expect(screen.getByTestId("error-message")).toBeInTheDocument();
    expect(screen.getByTestId("error-message")).toHaveTextContent("API Error");
  });

  it("does not redirect when unsubscribe fails", async () => {
    const router = require("next/navigation").useRouter();

    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      data: { success: false },
      performFetch: performFetchMock.mockResolvedValue({ success: false }),
    });

    renderWithLanguage();

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    expect(unsubscribeButton).not.toBeDisabled();

    expect(router.push).not.toHaveBeenCalled();
  });

  it("handles unsubscribe process correctly", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => "valid-token"),
    });

    const { rerender } = renderWithLanguage();

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    fireEvent.click(unsubscribeButton);

    useFetch.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
      performFetch: performFetchMock,
    });
    rerender(
      <LanguageProvider value={{ translations: enTranslations }}>
        <UnsubscribeRequestPage />
      </LanguageProvider>,
    );
    expect(screen.getByTestId("unsubscribe-request-button")).toBeDisabled();
  });

  it("disables button when unsubscribe is successful", async () => {
    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      data: { success: true },
      performFetch: performFetchMock,
    });

    renderWithLanguage();

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    expect(unsubscribeButton).toBeDisabled();
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

    expect(screen.getByTestId("error-message")).toHaveTextContent(
      customError.message,
    );
  });

  it("updates unsubscribe status when token is present but unsubscribe fails", async () => {
    require("next/navigation").useSearchParams.mockReturnValue({
      get: jest.fn(() => "invalid-token"),
    });

    performFetchMock.mockRejectedValueOnce(new Error("Unsubscribe failed"));

    renderWithLanguage();

    const unsubscribeButton = screen.getByTestId("unsubscribe-request-button");
    fireEvent.click(unsubscribeButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
    });
  });
});
