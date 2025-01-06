import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamCard from "@/components/Cards/TeamCard";

describe("TeamCard Component", () => {
  it("should render the TeamCard content", () => {
    render(<TeamCard />);

    const teamCardContainer = screen.getAllByTestId("team-card");
    expect(teamCardContainer).toBeInTheDocument();
  });
});
