/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("home page", () => {
    beforeEach(() => {
      cy.visit("/en");
    //   cy.injectAxe();
    });
  
    it("landing page loaded", () => {
      cy.url().should("contains", "/en");
    });

    it("phase banner appears on page", () => {
      cy.get('[data-cy=phase]').should("be.visible")
      cy.get('[data-cy=phase-text]').should("be.visible")
    });

    
    it("back to projects link appears on page", () => {
      cy.get('[data-cy=project-link]').should('have.attr', 'href') // yields string value of href 
      .and('include', '/projects') 
    });

    it("Give feedback widget button", () => {
      cy.get('[data-cy=widget-toggle]').should("be.visible")
      cy.get('[data-cy=widget-toggle]').click()
      cy.get('[data-cy=feedback-widget]').should("be.visible")
    });

    it("feedback widget links", () => {
      cy.get('[data-cy=widget-toggle]').click()
      cy.get('[data-cy=feedback-widget]').should("be.visible")
      cy.get('[data-cy=mailto-link]')
      .should('contain', 'experience@servicecanada.gc.ca') 
      .and('have.attr', 'href').and('include', 'mailto:') 
      cy.get('[data-cy=privacy-link]').should("be.visible")
      .and('have.attr', 'href').and('include', 'privacy')
    });

    it("feedback label visible", () => {
      cy.get('[data-cy=widget-toggle]').click()
      cy.get('[data-cy=feedback-label]').should("be.visible")
    .and('contain.text', 'How can we do better?')
    });

it("enter some text into the feedback area", () => {
  cy.get('[data-cy=widget-toggle]').click()
    cy.fixture('example').as('message')
    .then(data => {
      cy.get('#feedbackTextarea').type(data.textareaMessage, { force: true })
      cy.get('#feedbackTextarea').should('have.value',data.textareaMessage)
      cy.get('#feedbackTextarea').clear()
      cy.get('#feedbackTextarea').type(data.textarea2001, { force: true })
      cy.get('#feedbackTextarea').invoke('val').its("length").should("eq", 2000);
    })
    
  });
    

  });
  