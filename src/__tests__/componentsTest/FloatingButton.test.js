import React from "react";
import { render, screen } from "@testing-library/react";
import FloatingButton from "@/components/Button/FloatingButton";

describe("FloatingButton component", () => {
  it("should render the FloatingButton component correctly", () => {
    render(<FloatingButton />);

    const button = screen.getByTestId("floating-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary-active_normal");

    const buttonIcon = screen.getByTestId("social-icon");
    //expect(buttonIcon).toHaveAttribute("src", "/icons/linkedin-alt-light.svg");
  });
});
