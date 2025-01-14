import { footer, navbar, sidebar } from "./pages";

describe.skip("Navbar Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should check if header exist", () => {
    cy.get(navbar.header).should("exist");
  });

  it("should render the navigation links", () => {
    cy.get(navbar.home).should("be.visible");
    cy.get(navbar.ourValues).should("be.visible");
    cy.get(navbar.ourTeam).should("be.visible");
    cy.get(navbar.contact).should("be.visible");
  });

  it("should redirect to the home page when the Home link is clicked", () => {
    cy.get(navbar.home).first().click();
    cy.url().should("include", "/");
  });

  it("should redirect to the our values page when the Our Values link is clicked", () => {
    cy.get(navbar.ourValues).first().click();
    cy.url().should("include", "/our-values");
  });

  it("should redirect to the our team page when the Our Team link is clicked", () => {
    cy.get(navbar.ourTeam).first().click();
    cy.url().should("include", "/our-team");
  });

  it("should redirect to the contact page when the Contact link is clicked", () => {
    cy.get(navbar.contact).first().click();
    cy.url().should("include", "/contact");
  });
});

describe.skip("Footer Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should check if footer exist", () => {
    cy.get(footer.footer).should("exist");
  });

  it("should render the navigation links", () => {
    cy.get(footer.ourValues).should("be.visible");
    cy.get(footer.ourTeam).should("be.visible");
    cy.get(footer.contact).should("be.visible");
  });

  it("should redirect to the our values page when the Our Values link is clicked", () => {
    cy.get(footer.ourValues).last().click();
    cy.url().should("include", "/our-values");
  });

  it("should redirect to the our team page when the Our Team link is clicked", () => {
    cy.get(footer.ourTeam).last().click();
    cy.url().should("include", "/our-team");
  });

  it("should redirect to the contact page when the Contact link is clicked", () => {
    cy.get(footer.contact).last().click();
    cy.url().should("include", "/contact");
  });
});

describe("Sidebar Component Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport("iphone-x");
  });

  it("should menu button be enabled", () => {
    cy.get(sidebar.menuButton).should("be.enabled");
  });

  it("should check if sidebar exist", () => {
    cy.get(sidebar.menuButton).click();
    cy.get(sidebar.sidebar).should("exist");
  });

  it("should render the navigation links", () => {
    cy.get(sidebar.menuButton).click();
    cy.xpath(sidebar.home).should("be.visible");
    cy.xpath(sidebar.ourValues).should("be.visible");
    cy.xpath(sidebar.ourTeam).should("be.visible");
    cy.xpath(sidebar.contact).should("be.visible");
  });

  it("should redirect to the home page when the Home link is clicked", () => {
    cy.get(sidebar.menuButton).click();
    cy.xpath(sidebar.home).click();
    cy.url().should("include", "/");
  });

  it("should redirect to the our values page when the Our Values link is clicked", () => {
    cy.get(sidebar.menuButton).click();
    cy.xpath(sidebar.ourValues).click();
    cy.url().should("include", "/our-values");
  });

  it("should redirect to the our team page when the Our Team link is clicked", () => {
    cy.get(sidebar.menuButton).click();
    cy.xpath(sidebar.ourTeam).click();
    cy.url().should("include", "/our-team");
  });

  it("should redirect to the contact page when the Contact link is clicked", () => {
    cy.get(sidebar.menuButton).click();
    cy.xpath(sidebar.contact).click();
    cy.url().should("include", "/contact");
  });
});
