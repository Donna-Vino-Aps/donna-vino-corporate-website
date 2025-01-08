import React from "react";
import { render, screen } from "@testing-library/react";
import OurTeam from "@/app/our-team/page";

jest.mock("@/components/Card/TeamCard", () => {
  return jest.fn(() => <div data-testid="team-card-mock">Team Card</div>);
});

describe("OurTeam Page", () => {
  it("should render the OurTeam page", () => {
    render(<OurTeam />);

    expect(screen.getByTestId("our-team-title")).toBeInTheDocument();
    expect(screen.getByTestId("our-team-tagline")).toBeInTheDocument();
    expect(screen.getByTestId("our-team-description")).toBeInTheDocument();
    expect(screen.getAllByTestId("team-card-mock")).toHaveLength(5);

    const firstTeamCard = screen.getAllByTestId("team-card-mock")[0];
    expect(firstTeamCard).toHaveTextContent("Team Card");
  });

  it("should render all team members", () => {
    render(<OurTeam />);

    const teamCards = screen.getAllByTestId("team-card-mock");
    expect(teamCards.length).toBe(5);

    const firstCard = teamCards[0];
    expect(firstCard).toHaveTextContent("Team Card");
  });
});
