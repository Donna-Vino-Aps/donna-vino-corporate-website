import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subscribe from "@/components/Subscribe/Subscribe";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";
import PropTypes from "prop-types";
import useFetch from "@/hooks/api/useFetch";

jest.mock("@/hooks/api/useFetch", () => jest.fn());

const MockLanguageProvider = ({ children, language = "en" }) => {
  const translations = language === "en" ? enTranslations : dkTranslations;

  return (
    <LanguageProvider value={{ translations }}>{children}</LanguageProvider>
  );
};

MockLanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.oneOf(["en", "dk"]),
};

const renderWithProvider = (language = "en") => {
  return render(
    <MockLanguageProvider language={language}>
      <Subscribe />
    </MockLanguageProvider>,
  );
};

describe("Subscribe Component", () => {
  let performFetchMock;

  beforeEach(() => {
    performFetchMock = jest.fn();
    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      performFetch: performFetchMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Subscribe component correctly", () => {
    renderWithProvider();

    expect(
      screen.getByText(/Subscribe to our newsletter/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Stay up to date with the latest news related to Donna Vino and our popular wine tastings in the Copenhagen area./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your email/i),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/I agree with the terms and conditions/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  test("shows an alert if terms and conditions are not agreed", () => {
    window.alert = jest.fn();
    renderWithProvider();

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please agree to the terms and conditions.",
    );
  });

  test("disables the submit button when loading", () => {
    useFetch.mockReturnValue({
      isLoading: true,
      error: null,
      performFetch: performFetchMock,
    });

    renderWithProvider();

    const submitButton = screen.getByText(/Submitting.../i);
    expect(submitButton).toBeDisabled();
  });

  // test("enables the submit button once loading is complete", () => {
  //   useFetch.mockReturnValueOnce({
  //     isLoading: true,
  //     error: null,
  //     performFetch: performFetchMock,
  //   });
  //   useFetch.mockReturnValueOnce({
  //     isLoading: false,
  //     error: null,
  //     performFetch: performFetchMock,
  //   });

  //   const { rerender } = renderWithProvider();
  //   expect(screen.getByText(/Submitting.../i)).toBeDisabled();

  //   rerender(<Subscribe />);
  //   expect(screen.getByText(/Submit/i)).not.toBeDisabled();
  // });

  test("calls performFetch with correct parameters on form submit", () => {
    renderWithProvider();

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const termsCheckbox = screen.getByLabelText(
      /I agree with the terms and conditions/i,
    );
    const submitButton = screen.getByText(/Submit/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    expect(performFetchMock).toHaveBeenCalledWith(
      {},
      { email: "test@example.com" },
    );
  });

  test("resets the form after successful submission", async () => {
    const performFetchMock = jest.fn().mockResolvedValue(true);
    useFetch.mockReturnValue({
      isLoading: false,
      error: null,
      performFetch: performFetchMock,
    });

    renderWithProvider();

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const termsCheckbox = screen.getByLabelText(
      /I agree with the terms and conditions/i,
    );
    const submitButton = screen.getByText(/Submit/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(submitButton);

    expect(performFetchMock).toHaveBeenCalledWith(
      {},
      { email: "test@example.com" },
    );

    await waitFor(() => {
      expect(emailInput.value).toBe("");
      expect(termsCheckbox.checked).toBe(false);
    });
  });

  test("displays an error message when an error occurs", () => {
    useFetch.mockReturnValue({
      isLoading: false,
      error: { message: "Network error" },
      performFetch: performFetchMock,
    });

    renderWithProvider();

    expect(screen.getByText(/Network error/i)).toBeInTheDocument();
  });

  test("unchecks the terms checkbox when clicked again", () => {
    renderWithProvider();

    const termsCheckbox = screen.getByLabelText(
      /I agree with the terms and conditions/i,
    );

    fireEvent.click(termsCheckbox);
    expect(termsCheckbox.checked).toBe(true);

    fireEvent.click(termsCheckbox);
    expect(termsCheckbox.checked).toBe(false);
  });
});
