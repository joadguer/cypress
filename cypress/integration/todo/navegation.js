import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

//Navegation pages
Given('the user is on the homepage', () => {
    cy.visit('https://www.demoblaze.com');
  });
  
  When('the user clicks on the Home link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('Home')
      .click();
  });
  
  Then('the user should see the Home index', () => {
      cy.url().should('include', '/index.html')
  });
  
      
  When('the user clicks on the Contact link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('Contact')
      .click();
  });
  
  Then('the user should be navigated to the Contact page', () => {
      
  });
  
  
  
  When('the user clicks on the About Us link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('About us')
      .click();
  });
  
  Then('the user should be navigated to the About Us page', () => {
  });
  
  
  
  When('the user clicks on the Cart link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('Cart')
      .click();}
  );
  
  Then('the user should be navigated to the Cart page', () => {
      cy.url().should('include', '/cart.html')
  });
  
  
  When('the user clicks on the Log In link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('Log in')
      .click();
  });
  
  Then('the user should be navigated to the Log In page', () => {
  
  });
  
  
  When('the user clicks on the Sign Up link in the header', () => {
      cy.get('.navbar-nav.ml-auto .nav-item a.nav-link')
      .contains('Sign up')
      .click();
  });
  
  Then('the user should be navigated to the Sign Up page', () => {
  });
  