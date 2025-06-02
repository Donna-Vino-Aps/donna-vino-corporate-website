import React from "react";
import { render, screen } from "@testing-library/react";
import OurTeam from "@/app/our-team/page";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";

jest.mock("@/components/Card/MemberCard", () => {
  return jest.fn(() => <div data-testid="team-card-mock">Team Card</div>);
});

describe("OurTeam Page", () => {
  // Mock the screen size adjustment for small screens
  const renderWithLanguage = (translations = enTranslations) => {
    return render(
      <LanguageProvider value={translations}>
        <OurTeam />
      </LanguageProvider>,
    );
  };

  beforeEach(() => {
    renderWithLanguage();
  });

  it("should render the OurTeam page", () => {
    expect(screen.getByTestId("our-team-title")).toBeInTheDocument();
    expect(screen.getByTestId("our-team-tagline")).toBeInTheDocument();
    expect(screen.getByTestId("our-team-description")).toBeInTheDocument();
    expect(screen.getAllByTestId("team-card-mock")).toHaveLength(23);

    const firstTeamCard = screen.getAllByTestId("team-card-mock")[0];
    expect(firstTeamCard).toHaveTextContent("Team Card");
  });

  it("should render goBackButton", () => {
    const goBackButton = screen.getByTestId("go-back-button");
    expect(goBackButton).toBeInTheDocument();
    expect(goBackButton).toHaveTextContent("Tilbage");
  });
});
