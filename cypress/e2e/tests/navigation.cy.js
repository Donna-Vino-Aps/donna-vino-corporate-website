import { heroSection } from "../pages/home";
import { ourValues } from "../pages/ourValues";
import { footer, navbar, sidebar } from "../pages/navigation";
import { ourTeam } from "../pages/ourTeam";
import { contact } from "../pages/contact";

describe("Verify Navigation", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should render the navigation links", () => {
    cy.get(navbar.home).should("be.visible");
    cy.get(navbar.ourValues).should("be.visible");
    cy.get(navbar.ourTeam).should("be.visible");
    cy.get(navbar.contact).should("be.visible");
  });

  it("verify that the page titles match the expected title of the home page", () => {
    cy.get(navbar.home).click();
    cy.url().should("include", "/");
    cy.get(heroSection.welcomeTitle)
      .should("be.visible")
      .contains("Welcome to Donna Vino, your unique wine experience.");
    cy.get(heroSection.description)
      .should("be.visible")
      .contains(
        "Discover unique wine stories told by your sommelier while your private chef customizes the menu.",
      );
  });

  it("verify that the page titles match the expected title of the ourValues page", () => {
    cy.get(navbar.ourValues).click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles match the expected title of the ourTeam page", () => {
    cy.get(navbar.ourTeam).click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles match the expected title of the contact page", () => {
    cy.get(navbar.contact).click();
    cy.get(contact.title).should("be.visible").contains("Contact Us");
    cy.get(contact.subtitle)
      .should("be.visible")
      .contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "We’d love to hear from you! If you have any questions, feedback, or need assistance, feel free to reach out. You can use the contact form here, and our team will get back to you as soon as possible.",
      );
  });
});

describe("Verify Sidebar", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
    cy.viewport("iphone-x");

    cy.get(sidebar.menuButton).should("be.visible").click();

    cy.wait(1000);

    cy.get(sidebar.sidebar).should("be.visible");
  });

  it("should render the navigation links", () => {
    cy.get('[aria-label="Social media icons"]').should("be.visible");

    cy.get('[data-testid="nav-link-home"]').should("be.visible");
    cy.get('[data-testid="nav-link-our-values"]').should("be.visible");
    cy.get('[data-testid="nav-link-our-team"]').should("be.visible");
    cy.get('[data-testid="nav-link-contact"]').should("be.visible");
  });

  it("verify that Follow Us title matches the expected title", () => {
    cy.get(sidebar.followUsTitle).should("be.visible").contains("Follow Us On");
  });

  it("verify that social media icons are visible", () => {
    cy.get(sidebar.sidebar).should("be.visible");

    cy.get('[data-testid="accept-button"]').click();

    cy.get('img[alt="Facebook"]')
      .should("have.attr", "src")
      .and("include", "/icons/facebook-line.svg");
    cy.get('img[alt="Instagram"]')
      .should("have.attr", "src")
      .and("include", "/icons/instagram-original.svg");
    cy.get('img[alt="LinkedIn"]')
      .should("have.attr", "src")
      .and("include", "/icons/linkedin-alt.svg");

    cy.get(sidebar.facebookIcon).should("be.visible");
    cy.get(sidebar.instagramIcon).should("be.visible");
    cy.get(sidebar.linkedinIcon).should("be.visible");
  });
});

describe("Verify Footer", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should render the navigation links", () => {
    cy.get(footer.ourValues).should("be.visible");
    cy.get(footer.ourTeam).should("be.visible");
    cy.get(footer.contact).should("be.visible");
  });

  it("verify that Follow Us title matches the expected title", () => {
    cy.scrollTo("bottom");
    cy.get(footer.followUsTitle).should("be.visible").contains("Follow Us On");
  });

  it("verify that social media icons are visible", () => {
    cy.scrollTo(0, 500);
    cy.get(footer.facebookIcon).should("be.visible");
    cy.get(footer.instagramIcon).should("be.visible");
    cy.get(footer.linkedinIcon).should("be.visible");
  });
});
