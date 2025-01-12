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

  const variantTests = [
    {
      variant: "red",
      expectedClasses: [
        "bg-primary-normal",
        "hover:bg-primary-hover_normal",
        "text-primary-light",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
    {
      variant: "redLine",
      expectedClasses: [
        "bg-transparent",
        "border-2",
        "hover:bg-primary-hover",
        "border-primary-active_normal",
        "text-primary-active_normal",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
    {
      variant: "darkGreen",
      expectedClasses: [
        "bg-secondary-darker",
        "hover:bg-secondary-hover_dark",
        "text-white",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
    {
      variant: "grayGreen",
      expectedClasses: [
        "bg-secondary-light",
        "hover:bg-secondary-hover",
        "text-secondary-darker",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
    {
      variant: "redSubmit",
      expectedClasses: [
        "bg-primary-normal",
        "hover:bg-primary-hover_normal",
        "text-white",
        "rounded-lg",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
    {
      variant: "gray",
      expectedClasses: [
        "bg-tertiary1-normal",
        "hover:bg-tertiary1-dark",
        "text-tertiary1-light",
        "w-full",
        "sm:w-[10.8rem]",
      ],
    },
  ];

  variantTests.forEach(({ variant, expectedClasses }) => {
    it(`should apply the correct classes for ${variant} variant`, () => {
      const { container } = render(
        <Button text="Button Text" variant={variant} />,
      );
      const button = container.querySelector("button");
      expectedClasses.forEach((className) => {
        expect(button).toHaveClass(className);
      });
    });
  });
});
