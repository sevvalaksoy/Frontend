/* eslint-disable no-undef */
beforeEach(() => {
  cy.visit('https://frontend-eight-mu-33.vercel.app/');
});

describe('SANITY CHECK', () => {
  it('opens the app successfully', () => {
    cy.url().should("contain", 'https://frontend-eight-mu-33.vercel.app/');
  });
});

describe('SUCCESS', () => {

  it('opens the order page', () => { 
    //arrange
    cy.get('[data-cy="contact-button"]').as("ContactLink");
    //act
    cy.get("@ContactLink").click();
    //assert
    cy.url().should("contain", "/contact");
  });
});