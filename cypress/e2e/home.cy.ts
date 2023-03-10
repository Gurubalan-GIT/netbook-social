/// <reference types="cypress" />

import { HomePageData } from "@modules/Home/types";
import { GET_HOME_PAGE_DATA } from "../../graphql/queries/home";
import {
  IPAD_SCREEN,
  IPHONE_SCREEN,
  MACBOOK_SCREEN,
} from "../support/constants";

let cmsData: HomePageData;
const { graphCMSEndpoint } = Cypress.env();
const sizes: Array<Cypress.ViewportPreset> = [
  IPHONE_SCREEN,
  IPAD_SCREEN,
  MACBOOK_SCREEN,
];

beforeEach(function () {
  cy.visit("/");
  cy.request(
    "POST",
    graphCMSEndpoint,
    JSON.stringify({
      query: GET_HOME_PAGE_DATA,
    })
  ).should((response) => {
    cmsData = response.body.data;
  });
});

describe("E2E Tests on Home Page", () => {
  // Asset Navbar

  it(`Should assert the Navbar on ${MACBOOK_SCREEN} screen`, () => {
    cy.viewport(MACBOOK_SCREEN);
    const { navbarSection } = cmsData;
    cy.dataCy("navbar").as("navbar");

    cy.get("@navbar").children().find("img").should("be.visible");

    navbarSection?.navbarLinks.forEach((navLink) => {
      cy.get("@navbar").children().find("li").should("contain", `${navLink}`);
    });

    cy.get("@navbar").children().find("input").type("Blog");

    cy.dataCy("search-dropdown").should("be.visible").and("contain", "Blogs");

    cy.get("@navbar").children().find("button").contains("Login").click();
  });

  it(`Should assert the Sidebar on ${IPHONE_SCREEN} screen`, () => {
    cy.viewport(IPHONE_SCREEN);
    const { navbarSection } = cmsData;
    cy.dataCy("navbar").as("navbar");
    cy.dataCy("sidebar-toggle-btn").as("toggleSidebar");

    cy.get("@navbar").children().find("img").should("be.visible");

    cy.get("@toggleSidebar").click();

    cy.dataCy("sidebar").as("sidebar").should("be.visible");

    navbarSection?.navbarLinks.forEach((navLink) => {
      cy.get("@sidebar").children().find("li").should("contain", `${navLink}`);
    });

    cy.get("@sidebar").children().find("input").type("Blog");

    cy.dataCy("search-dropdown").should("be.visible").and("contain", "Blogs");

    cy.dataCy("close-sidebar-btn").click();

    cy.get("@sidebar").should("not.exist");

    cy.get("@navbar").children().find("button").contains("Login").click();
  });

  sizes.forEach((size) => {
    // Assert Hero section

    it(`Should assert Hero section on ${size} screen`, () => {
      cy.viewport(size);
      const { heroSection } = cmsData;
      cy.dataCy("hero-section").as("heroSection");

      cy.get("@heroSection")
        .children()
        .should("be.visible")
        .and("contain", `${heroSection?.title}`)
        .and("contain", `${heroSection?.subTitle}`)
        .and("contain", `${heroSection?.description}`);

      cy.get("@heroSection").find("img").should("be.visible");

      cy.get("@heroSection").find("button").contains("Add More").click();
      cy.get("@heroSection").find("button").contains("Invite a friend").click();
    });

    // Assert About us section

    it(`Should assert About Us section on ${size} screen`, () => {
      cy.viewport(size);
      const { aboutSection } = cmsData;
      cy.dataCy("about-section").as("aboutSection");

      cy.get("@aboutSection")
        .children()
        .should("be.visible")
        .and("contain", `${aboutSection?.title}`)
        .and("contain", `${aboutSection?.subTitle}`)
        .and("contain", `${aboutSection?.description}`);

      cy.get("@aboutSection").find("img").should("be.visible");

      aboutSection?.featuresOffered.forEach((feature) =>
        cy.get("@aboutSection").children().find("li").contains(feature)
      );
    });

    // Assert Achievements section

    it(`Should assert Achievements section on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }
      const { achievementSection } = cmsData;
      cy.dataCy("achievements-section").as("achievementSection");

      cy.get("@achievementSection")
        .children()
        .should("be.visible")
        .and("contain", `${achievementSection?.title}`)
        .and("contain", `${achievementSection?.subTitle}`)
        .and("contain", `${achievementSection?.description}`);

      cy.get("@achievementSection")
        .find("button")
        .contains("Discover me")
        .click();

      cy.dataCy("achievement-card").as("achievementCard");

      cy.get("@achievementCard").find("img").should("be.visible");

      achievementSection?.achievements.map((achievement) => {
        cy.get("@achievementCard")
          .should("contain", `${achievement.description}`)
          .and("contain", `${achievement.title}`)
          .and("contain", `${achievement.outLinkLabel}`);
      });
    });

    // Assert Footer section

    it(`Should assert Footer section on ${size} screen`, () => {
      cy.viewport(size);
      const { footerSection } = cmsData;
      cy.dataCy("footer-section").as("footerSection");

      cy.get("@footerSection")
        .children()
        .should("be.visible")
        .and("contain", `${footerSection?.title}`)
        .and("contain", `${footerSection?.description}`);

      cy.get("@footerSection").find("button").contains("Subscribe").click();

      footerSection?.sitemaps.forEach((sitemap) => {
        cy.get("@footerSection")
          .children()
          .should("contain", `${sitemap.category}`);
        sitemap?.outLinks.forEach((outLink) => {
          cy.get("@footerSection").children().should("contain", `${outLink}`);
        });
      });

      cy.dataCy("social-footer-section").as("socialFooterSection");

      cy.get("@socialFooterSection")
        .children()
        .should("be.visible")
        .should("contain", `${footerSection?.org}`);

      cy.get("@socialFooterSection")
        .children()
        .find("img")
        .should("be.visible");
    });
  });
});

export {};
