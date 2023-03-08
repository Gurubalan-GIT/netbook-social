// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

Cypress.Commands.add("dataCy", (selector: string) => {
  return cy.get(`[data-cy="${selector}"]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
