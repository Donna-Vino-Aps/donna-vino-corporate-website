import Subscribe from "@/components/Subscribe/Subscribe";
import useFetch from "@/hooks/api/useFetch";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";

jest.mock("@/hooks/api/useFetch", () => jest.fn());

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
    render(<Subscribe />);

    expect(
      screen.getByText(/Subscribe to our newsletter/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /There are many variations of passages of Lorem Ipsum available/i,
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
    render(<Subscribe />);

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

    render(<Subscribe />);

    const submitButton = screen.getByText(/Submitting.../i);
    expect(submitButton).toBeDisabled();
  });

  test("enables the submit button once loading is complete", () => {
    useFetch.mockReturnValueOnce({
      isLoading: true,
      error: null,
      performFetch: performFetchMock,
    });
    useFetch.mockReturnValueOnce({
      isLoading: false,
      error: null,
      performFetch: performFetchMock,
    });

    const { rerender } = render(<Subscribe />);
    expect(screen.getByText(/Submitting.../i)).toBeDisabled();

    rerender(<Subscribe />);
    expect(screen.getByText(/Submit/i)).not.toBeDisabled();
  });

  test("calls performFetch with correct parameters on form submit", () => {
    render(<Subscribe />);

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

    render(<Subscribe />);

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

    render(<Subscribe />);

    expect(screen.getByText(/Network error/i)).toBeInTheDocument();
  });

  test("unchecks the terms checkbox when clicked again", () => {
    render(<Subscribe />);

    const termsCheckbox = screen.getByLabelText(
      /I agree with the terms and conditions/i,
    );

    fireEvent.click(termsCheckbox);
    expect(termsCheckbox.checked).toBe(true);

    fireEvent.click(termsCheckbox);
    expect(termsCheckbox.checked).toBe(false);
  });
});
