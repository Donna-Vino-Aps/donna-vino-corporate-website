describe("RootLayout Component Test", () => {
  it("should render the layout with header, footer, and navigation links", () => {
    cy.visit("http://localhost:3000");

    // Check if the header exists
    cy.get('[data-testid="header"]').should("exist");

    // Check if the navigation links exist
    cy.get('[data-testid="home-link"]').should("exist");
    cy.get('[data-testid="about-link"]').should("exist");
    cy.get('[data-testid="contact-link"]').should("exist");

    // Check if the main content area exists
    cy.get('[data-testid="main-content"]').should("exist");

    // Check if the footer exists
    cy.get('[data-testid="footer"]').should("exist");
  });
});
