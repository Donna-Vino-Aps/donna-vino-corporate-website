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
    expect(button).toHaveClass("text-primary-light");
    expect(button).toHaveClass("bodyLarge");
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

  it("should apply the correct class for secondary variant", () => {
    const { container } = render(
      <Button text="Visit our shop" variant="secondary" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("border-2");
    expect(button).toHaveClass("text-primary-active_normal");
    expect(button).toHaveClass("bodyLarge");
  });

  it("should apply the correct class for secondary-darker variant", () => {
    const { container } = render(
      <Button text="Visit our shop" variant="secondary-darker" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-secondary-darker");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("bodyLarge");
  });

  it("should apply the correct class for secondary-light variant", () => {
    const { container } = render(
      <Button text="Visit our shop" variant="secondary-light" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-secondary-light");
    expect(button).toHaveClass("text-secondary-darker");
    expect(button).toHaveClass("bodyLarge");
  });

  it("should apply the correct class for primary-submit variant", () => {
    const { container } = render(
      <Button text="Visit our shop" variant="primary-submit" />,
    );
    const button = container.querySelector("button");
    expect(button).toHaveClass("bg-primary-normal");
    expect(button).toHaveClass("text-white");
    expect(button).toHaveClass("bodyLarge");
  });
});
