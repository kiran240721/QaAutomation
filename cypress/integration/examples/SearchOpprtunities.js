/// <reference types="Cypress" />

import SearchOpprtunitiesPage from '../../support/PageObject/SearchOpprtunitiesPage'
describe('Search opportunities - by stage', () => {
    // Load user data from the JSON file before each test
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('Search opportunities', () => {
      //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
      cy.visit(Cypress.env('url')+"/Identity/Account/Login")
      //cy.visit('/Identity/Account/Login');
      //cy.visit(`${Cypress.env('baseUrl')}/login`);
      cy.fixture('example').then((exampleData) => {
          // Extract the credentials of the user at the index
          const user = exampleData.users[0]; // Index 1 corresponds to the 1st user
          const { email, password } = user;
          cy.loginAsSalesUser(user.email, user.password);
        });
  
      cy.contains('Dashboard').should('be.visible');
      console.log('login as a user')

      SearchOpprtunitiesPage.clickOnOpprtunities()
      let tablePageContent;
        cy.get('#example').invoke('text').then(text1 => {
            tablePageContent = text1;
        });
      SearchOpprtunitiesPage.clickOnStage()
    //   cy.get('#example > thead > tr > th:nth-child(1)').invoke('text').then((text) => {
    //     Perform assertions or further processing
    //     expect(text).to.contain('Company');
    //   });
    cy.wait(2000)
    cy.get('#example').should('not.contain', tablePageContent);
    // cy.get('table tbody tr').first().within(() => {
    //     // Extract company name from first row
    //     cy.get('td:nth-child(1)').invoke('text').then((companyName) => {
    //       // Perform assertion for first row
    //       expect(companyName).to.contain('Jamaica CMS-East LYNKS Construction & Maintenance Co. Ltd'); //  assertion as per our requirement
    //     });
    //   });
      
  
  
  
  
  
    });
  });