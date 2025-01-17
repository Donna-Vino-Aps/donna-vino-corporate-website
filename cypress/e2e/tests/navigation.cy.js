import { heroSection } from "../pages/home";
import { ourValues } from "../pages/ourValues";
import { footer, navbar, sidebar } from "../pages/navigation";
import { ourTeam } from "../pages/ourTeam";
import { contact } from "../pages/contact";

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
    cy.get(navbar.home).click();
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
    cy.get(navbar.ourValues).click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles matches the expected title of the ourteam page", () => {
    cy.get(navbar.ourTeam).click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles matches the expected title of the contact page", () => {
    cy.get(navbar.contact).click();
    cy.xpath(contact.title).should("be.visible").contains("Contact Us");
    cy.get(contact.subtitle)
      .should("be.visible")
      .contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco",
      );
  });
});

describe("Verify Sidebar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport("iphone-x");
    cy.get(sidebar.menuButton).click();
  });

  it("should render the navigation links", () => {
    cy.xpath(sidebar.home).should("be.visible");
    cy.xpath(sidebar.ourValues).should("be.visible");
    cy.xpath(sidebar.ourTeam).should("be.visible");
    cy.xpath(sidebar.contact).should("be.visible");
  });

  it("verify that the page titles matches the expected title of the home page", () => {
    cy.xpath(sidebar.home).click();
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
    cy.xpath(sidebar.ourValues).click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles matches the expected title of the ourteam page", () => {
    cy.xpath(sidebar.ourTeam).click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles matches the expected title of the contact page", () => {
    cy.xpath(sidebar.contact).click();
    cy.xpath(contact.title).should("be.visible").contains("Contact Us");
    cy.get(contact.subtitle)
      .should("be.visible")
      .contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco",
      );
  });

  it("verify that Follow Us titles matches the expected title", () => {
    cy.xpath(sidebar.followUsTitle)
      .should("be.visible")
      .contains("Follow Us On");
  });

  it("verify that social media icons are visible", () => {
    cy.xpath(sidebar.facebookIcon).should("be.visible");
    cy.xpath(sidebar.instagramIcon).should("be.visible");
    cy.xpath(sidebar.linkedinIcon).should("be.visible");
  });
});

describe("Verify Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should render the navigation links", () => {
    cy.get(footer.ourValues).should("be.visible");
    cy.get(footer.ourTeam).should("be.visible");
    cy.get(footer.contact).should("be.visible");
  });

  it("verify that the page titles matches the expected title when the logo is clicked", () => {
    cy.get(footer.logo).click();
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
    cy.get(footer.ourValues).click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles matches the expected title of the ourteam page", () => {
    cy.get(footer.ourTeam).click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles matches the expected title of the contact page", () => {
    cy.get(footer.contact).click();
    cy.xpath(contact.title).should("be.visible").contains("Contact Us");
    cy.get(contact.subtitle)
      .should("be.visible")
      .contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco",
      );
  });

  it("verify that Follow Us titles matches the expected title", () => {
    cy.scrollTo(0, 500);
    cy.xpath(footer.followUsTitle)
      .should("be.visible")
      .contains("Follow Us On");
  });

  it("verify that social media icons are visible and enabled", () => {
    cy.scrollTo(0, 500);
    cy.xpath(footer.facebookIcon).should("be.visible");
    cy.xpath(footer.instagramIcon).should("be.visible");
    cy.xpath(footer.linkedinIcon).should("be.visible");
  });
});

describe("Verify Footer in mobile version", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport("iphone-x");
  });

  it("should render the navigation links", () => {
    cy.get(footer.logo).should("be.visible");
    cy.get(footer.ourValues).should("be.visible");
    cy.get(footer.ourTeam).should("be.visible");
    cy.get(footer.contact).should("be.visible");
  });

  it("verify that the page titles matches the expected title when the logo is clicked", () => {
    cy.get(footer.logo).click();
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
    cy.get(footer.ourValues).click();
    cy.get(ourValues.subtitle).should("be.visible").contains("Our Values");
    cy.get(ourValues.header).should("be.visible").contains("Donna Vino Values");
  });

  it("verify that the page titles matches the expected title of the ourteam page", () => {
    cy.get(footer.ourTeam).click();
    cy.get(ourTeam.ourTeamTagline)
      .should("be.visible")
      .contains("#OneTeamOneDream");
    cy.get(ourTeam.title).should("be.visible").contains("Our Awesome Team");
  });

  it("verify that the page titles matches the expected title of the contact page", () => {
    cy.get(footer.contact).click();
    cy.xpath(contact.title).should("be.visible").contains("Contact Us");
    cy.get(contact.subtitle)
      .should("be.visible")
      .contains("Get in touch with us");
    cy.get(contact.description)
      .should("be.visible")
      .contains(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco",
      );
  });

  it("verify that Follow Us titles matches the expected title", () => {
    cy.scrollTo(0, 500);
    cy.xpath(footer.followUsTitle)
      .should("be.visible")
      .contains("Follow Us On");
  });

  it("verify that social media icons are visible", () => {
    cy.scrollTo(0, 500);
    cy.xpath(footer.facebookIcon).should("be.visible");
    cy.xpath(footer.instagramIcon).should("be.visible");
    cy.xpath(footer.linkedinIcon).should("be.visible");
  });
});
