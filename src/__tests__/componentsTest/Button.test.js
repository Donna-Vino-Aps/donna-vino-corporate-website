import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button/Button";

describe("Button Component", () => {
  it("should render button with text", () => {
    render(<Button text="Visit our shop" />);
    const button = screen.getByText(/Visit our shop/i);
    expect(button).toBeInTheDocument();
  });

  it("should render button with an icon", () => {
    render(<Button text="Visit our shop" icon="/icons/cart.svg" />);
    const icon = screen.getByAltText(/Icon/i);
    expect(icon).toBeInTheDocument();
  });

  it("should call onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Visit our shop" onClick={handleClick} />);
    const button = screen.getByText(/Visit our shop/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should apply the correct class based on variant", () => {
    const { container } = render(
      <Button text="Visit our shop" variant="primary" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-primary-normal");
  });

  it("should disable the button when disabled is true", () => {
    render(<Button text="Visit our shop" disabled />);
    const button = screen.getByText(/Visit our shop/i);
    expect(button).toBeDisabled();
  });

  it("should show loading text when isLoading is true", () => {
    render(<Button text="Submit" isLoading={true} />);
    const button = screen.getByText(/Submitting.../i);
    expect(button).toBeInTheDocument();
  });

  it("should render a button with 'submit' type when variant is 'submit'", () => {
    const { container } = render(<Button text="Submit" variant="submit" />);
    const button = container.querySelector("button");
    expect(button.type).toBe("submit");
  });
});
