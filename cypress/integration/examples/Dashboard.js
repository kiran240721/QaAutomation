/// <reference types="Cypress" />

//import DashboardPage from '../../support/PageObject/DashboardPage'
describe('Dashboard page verification', () => {
  // Load user data from the JSON file before each test
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Dashboard page Charts and graphs', () => {
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
    cy.visit(Cypress.env('url')+"/Identity/Account/Login")
    //cy.visit('/Identity/Account/Login');
    //cy.visit(`${Cypress.env('baseUrl')}/login`);
    cy.fixture('example').then((exampleData) => {
        // Extract the credentials of the user at the 2nd index
        const user = exampleData.users[2]; // Index 1 corresponds to the 2nd user
        const { email, password } = user;
        cy.loginAsSalesUser(user.email, user.password);
      });

    cy.contains('Dashboard').should('be.visible');
    console.log('login as a user')
    cy.get('#VolumeBarChart').should('exist');





  });
});