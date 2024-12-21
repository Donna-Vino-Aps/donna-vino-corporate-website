import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

describe("Home Page", () => {
  it("should render the home page content", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to the official Donna Vino");
  });
});
