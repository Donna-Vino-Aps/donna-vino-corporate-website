import { navbar } from "../pages/navigation";
import { heroSection, photoCards, subscribe } from "../pages/home";

describe("Verify navbar elements", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });
  it("should render the logo", () => {
    cy.get(navbar.navBrand).should("be.visible");
  });
  it("should render the navigation links", () => {
    cy.get(navbar.home).should("be.visible");
    cy.get(navbar.ourValues).should("be.visible");
    cy.get(navbar.ourTeam).should("be.visible");
    cy.get(navbar.contact).should("be.visible");
  });
  it("should render the language switch container", () => {
    cy.get(navbar.languageSwitchContainer)
      .should("be.visible")
      .and("have.length", 2);
    cy.get(navbar.enIcon).should("be.visible");
    cy.get(navbar.dkIcon).should("be.visible");
  });

  it("should change language to Danish when clicking the Denmark flag", () => {
    cy.get(navbar.dkIcon).click({ multiple: true, force: true });
    cy.get(heroSection.welcomeTitle).should(
      "contain.text",
      "Velkommen til Donna Vino, din unikke vinoplevelse.",
    );
  });
  it("should change language to English when clicking the English flag", () => {
    cy.get(navbar.enIcon).click({ multiple: true, force: true });
    cy.get(heroSection.welcomeTitle).should(
      "contain.text",
      "Welcome to Donna Vino, your unique wine experience.",
    );
  });
});
describe("Verify hero section elements", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should render the hero section title", () => {
    cy.get(heroSection.welcomeTitle).should("be.visible");
  });

  it("should render the hero section description", () => {
    cy.get(heroSection.description).should("be.visible");
  });

  it("should render the hero section visit shop button", () => {
    cy.get(heroSection.shopButton).should("be.visible");
  });

  it("should render the hero section contact us button", () => {
    cy.get(heroSection.contactButton).should("be.visible");
  });
  it("should redirect user to contact page ", () => {
    cy.get(heroSection.contactButton).click();
    cy.url().should("include", "/contact");
  });
  it("should render the hero section video", () => {
    cy.get(heroSection.heroVideo).should("be.visible");
  });

  it("should have the correct video source", () => {
    cy.get(`${heroSection.heroVideo} source`)
      .should("have.attr", "src")
      .and("include", "web-coorporate-hero-section_xi6jod.mp4");
  });

  it("should have autoplay, loop, and muted attributes", () => {
    cy.get(heroSection.heroVideo).should("have.attr", "autoplay");
  });

  it("should start playing the video after 9 seconds", () => {
    cy.get(heroSection.heroVideo).then(($video) => {
      cy.wait(10000).then(() => {
        expect($video[0].paused).to.be.false;
      });
    });
  });
});
describe("Verify WineTasting section elements", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should render the WineTasting section", () => {
    cy.get(photoCards.wineSection)
      .should("be.visible")
      .within(() => {
        cy.get("article").should("have.length", 2);
      });
  });

  describe("Verify first article elements", () => {
    it("should render wineTestingWithDinner article", () => {
      cy.get(photoCards.wineTestingWithDinner).should("be.visible");
    });

    it("should render the card image", () => {
      cy.get(photoCards.image).should("be.visible");
    });

    it("should have the correct image source", () => {
      cy.get(photoCards.image)
        .should("have.attr", "src")
        .and("include", "/images/wine_tasting_with_dinner.jpeg");
    });

    it("should have the correct alt text", () => {
      cy.get(photoCards.image)
        .should("have.attr", "alt")
        .and("equal", "Wine tasting with dinner");
    });

    it("should have lazy loading enabled", () => {
      cy.get(photoCards.image)
        .should("have.attr", "loading")
        .and("equal", "lazy");
    });

    it("should have the correct CSS classes", () => {
      cy.get(photoCards.image)
        .should("have.class", "object-cover")
        .and("have.class", "h-full")
        .and("have.class", "w-full");
    });

    it("should render the wineTestingWithDinner article's title", () => {
      cy.get(photoCards.title)
        .should("be.visible")
        .and("contain", "Wine tasting with dinner");
    });

    it("should render the wineTestingWithDinner article's description", () => {
      cy.get(photoCards.descritpion)
        .should("be.visible")
        .and(
          "contain",
          "Experience an unforgettable Italian wine dinner guided by sommelier Katrine Giorgio. Discover rare wines paired with antipasti, pasta, and dessert prepared by our chef Riccardo Lara.",
        );
    });

    it("should render the book in the shop button", () => {
      cy.get(photoCards.bookInSHopButton).should("be.visible");
    });
  });

  describe("Verify second article elements", () => {
    it("should render wineTestingForCompanies article", () => {
      cy.get(photoCards.wineTestingForCompanies).should("be.visible");
    });
    it("should render the card image", () => {
      cy.get(photoCards.image).should("be.visible");
    });

    it("should have the correct image source", () => {
      cy.get(photoCards.image)
        .should("have.attr", "src")
        .and("include", "/images/wine_tasting_with_dinner.jpeg");
    });

    it("should have the correct alt text", () => {
      cy.get(photoCards.image)
        .should("have.attr", "alt")
        .and("equal", "Wine tasting with dinner");
    });

    it("should have lazy loading enabled", () => {
      cy.get(photoCards.image)
        .should("have.attr", "loading")
        .and("equal", "lazy");
    });

    it("should have the correct CSS classes", () => {
      cy.get(photoCards.image)
        .should("have.class", "object-cover")
        .and("have.class", "h-full")
        .and("have.class", "w-full");
    });

    it("should render the second article's title", () => {
      cy.get(photoCards.title)
        .should("contain", "Wine tasting with dinner for companies")
        .and("be.visible");
    });

    it("should render the second article's description", () => {
      cy.get(photoCards.descritpion)
        .should(
          "contain",
          "Strengthen team bonds with a tailored Italian wine tasting experience. Perfect for team building, networking, or a relaxing evening with dinner.",
        )
        .and("be.visible");
    });
  });
});

describe.only("verify subscribe section elements ", () => {
  beforeEach(() => {
    cy.visit("/", { failOnStatusCode: false });
  });
  it("should render subscribe section ", () => {
    cy.get(subscribe.subscribeSection).should("be.visible");
  });
  it("should display the subscribe section title", () => {
    cy.get(subscribe.subscribeSection).within(() => {
      cy.get("h2").contains("Subscribe to our newsletter").should("be.visible");
    });
  });
  it("should display the subscribe section description", () => {
    cy.get(subscribe.subscribeSection).within(() => {
      cy.get("p")
        .contains(
          "Stay up to date with the latest news related to Donna Vino and our popular wine tastings in the Copenhagen area.",
        )
        .should("be.visible");
    });
  });
  it("should display the subscribe section input", () => {
    cy.get(subscribe.subscribeSection).within(() => {
      cy.get('input[placeholder="Enter your email"]').should("be.visible");
    });
  });

  it("should display the subscribe section submit button", () => {
    cy.get(subscribe.subscribeSection).within(() => {
      cy.get(subscribe.submitButton).should("be.visible");
    });
  });

  it("should display the subscribe section terms checkbox", () => {
    cy.get(subscribe.subscribeSection).within(() => {
      cy.get(subscribe.termsCheckbox).should("be.visible");
    });
  });
});
