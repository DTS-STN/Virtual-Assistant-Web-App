/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Splash page", () => {
    beforeEach(() => {
      cy.visit("/");
    //   cy.injectAxe();
    });
  
    it("landing page loaded", () => {
      cy.url().should("contains", "/");
    });

    it("Splash screen English button goes to en page", () => {
        cy.get('[data-cy=english-button]').click();
        cy.url().should("eq", "http://localhost:3000/en");
      });

      it("Splash screen French button goes to fr page", () => {
        cy.get('[data-cy=french-button]').click();
        cy.url().should("eq", "http://localhost:3000/fr");
      });
  

  });