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

describe('Input check', () => {

  it('Check if Projects page have input', () => {
    //arrange
    cy.get('[data-cy="projects-button"]').as("Projects");
    //act
    cy.get("@Projects").click();
    //assert
    cy.contains("Grid Game").should("be.visible");
  });
});  

describe('Input check', () => {

  it('Check if skills page have input', () => {
    //arrange 
    cy.get('[data-cy="skills-button"]').as("Skills");
    //act
    cy.get("@Skills").click();
    //assert
    cy.contains("Java Script").should("be.visible");
  });
}); 

describe('Language Check', () => {

  it('write something on input', () => {
    //arrange
    cy.get('[data-cy="lan-button"]').as("Language");
    //act
    cy.get("@Language").click();
    //assert
    cy.contains("Yaratıcı düşünen, Minimalizm aşığı").should("be.visible");
  });
}); 