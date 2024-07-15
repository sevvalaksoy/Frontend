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

describe('Input check', () => {

  it('write something on input', () => {
    //arrange
    cy.get('[data-cy="contact-button"]').as("ContactLink");
    cy.get("@ContactLink").click();
    //act
    cy.get('[data-cy="name-input"]').type("Şe");
    //assert
    cy.contains("Name must have at least 3 character").should("be.visible");
  });
});

describe('Projects check', () => {

  it('Check if the projects display on the page', () => {
    //arrange
    cy.get('[data-cy="projects-button"]').as("ProjectsLink");
    cy.get("@ProjectsLink").click();
    //act
    cy.get('[data-cy="box-projects"]').as("Projects");
    //assert
    cy.get("Projects").should("be.greaterThan", 14);
  });
});

