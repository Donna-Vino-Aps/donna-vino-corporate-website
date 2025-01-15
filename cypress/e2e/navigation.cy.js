import { heroSection } from "./pages/home";
import { ourValues } from "./pages/ourValues";
import { navbar } from "./pages/navigation";
import { ourTeam } from "./pages/ourTeam";
import { contact } from "./pages/contact";

describe("Verify Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should render the navigation links", () => {
    cy.get(navbar.home).should("be.visible");
    cy.get(navbar.ourValues).should("be.visible");
    cy.get(navbar.ourTeam).should("be.visible");
    cy.get(navbar.contact).should("be.visible");
  });

  it("verify that the page titles matches the expected title of the home page", () => {
    cy.get(navbar.home).first().click();
    cy.get(heroSection.welcomeTitle)
      .should("be.visible")
      .contains("Welcome to Donna Vino, your unique wine experience.");
    cy.get(heroSection.description)
      .should("be.visible")
      .contains(
        "Discover unique wine stories told by your sommelier while your private chef customizes the menu.",
      );
  });

  it("verify that the page titles matches the expected title of the ourValues page", () => {
    cy.get(navbar.ourValues).first().click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles matches the expected title of the ourteam page", () => {
    cy.get(navbar.ourTeam).first().click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles matches the expected title of the contact page", () => {
    cy.get(navbar.contact).first().click();
    cy.get(contact.title).should("be.visible").contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco",
      );
  });
});
