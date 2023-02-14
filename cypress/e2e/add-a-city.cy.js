/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe('click the button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display Beijing weather forecast', () => {
    cy.get('[data-testid="add-a-city"]').type('Beijing');
    cy.get('[data-testid="click"]').click();
    cy.get('[data-testid="header-text"]').eq(1).contains('Beijing');
  });

  it('should display no matching', () => {
    cy.get('[data-testid="add-a-city"]').type('qqqqqq');
    cy.get('[data-testid="click"]').click();
    cy.get('[data-testid="error-message"]').contains('No matching location found.');
  });

  it('should display already exits', () => {
    cy.get('[data-testid="add-a-city"]').type('Brisbane');
    cy.get('[data-testid="click"]').click();
    cy.get('[data-testid="error-message"]').contains('Sorry, this city has already existed.');
  });

  it('button should disable if only input one letter', () => {
    cy.get('[data-testid="add-a-city"]').type('B');
    cy.get('[data-testid="click"]').should('be.disabled');
  });

});