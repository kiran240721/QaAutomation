// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginAsSalesUser', (email, password) => {
    // Visit the login page
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
  
    // Enter the email and password
    cy.get('#Input_Email').type(email);
    cy.get('.btn').click()
    cy.wait(2000)
    cy.get('.shivanand').type(password);
  
    // Click the login button
    cy.get('.btn-primary').click();
});

Cypress.Commands.add('loginAsManager', (email, password) => {
    // Visit the login page
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
  
    // Enter the email and password
    cy.get('#Input_Email').type(email);
    cy.get('.btn').click()
    cy.wait(2000)
    cy.get('.shivanand').type(password);
  
    // Click the login button
    cy.get('.btn-primary').click();
});

Cypress.Commands.add('loginAsSuperManager', (email, password) => {
    // Visit the login page
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
  
    // Enter the email and password
    cy.get('#Input_Email').type(email);
    cy.get('.btn').click()
    cy.wait(2000)
    cy.get('.shivanand').type(password);
  
    // Click the login button
    cy.get('.btn-primary').click();
});

Cypress.Commands.add('getCurrentDate', () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  });


  Cypress.Commands.add('fillUserDetails', (user) => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#email').type(user.email);
    cy.get('#username').type(user.username);
    cy.get('#phoneNumber').type(user.phoneNumber);
    cy.get('#country').select(user.country);
    cy.get('#rocId').select(user.roc);
  });