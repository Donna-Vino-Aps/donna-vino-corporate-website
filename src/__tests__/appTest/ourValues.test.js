import React from "react";
import { render, screen } from "@testing-library/react";
import OurValuesPage from "@/app/our-values/page";

jest.mock("../../components/OurValues/OurValues", () => {
  return jest.fn(() => (
    <div data-testid="our-values-mock">Our Values Content</div>
  ));
});

describe("OurValuesPage", () => {
  it("should render the OurValuesPage with the mocked OurValues component", () => {
    render(<OurValuesPage />);

    expect(screen.getByTestId("our-values-mock")).toBeInTheDocument();
    expect(screen.getByText("Our Values Content")).toBeInTheDocument();
  });
});
