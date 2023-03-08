/// <reference types="cypress" />

import { HomePageData } from "@modules/Home/types";
import { GET_HOME_PAGE_DATA } from "../../graphql/queries/home";

describe("E2E Tests on Home Page", () => {
  let cmsData: HomePageData;
  const { graphCMSEndpoint } = Cypress.env();

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

  // Assert Hero section

  it("should assert Hero section", () => {
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

  it("should assert About Us section", () => {
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
});

export {};
