/// <reference types="Cypress" />
describe('Login as a any users', () => {
    // Load user data from the JSON file before each test
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('logs in as a sales users', () => {
      // Visit the login page
      cy.visit(Cypress.env('url'))
      //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
      //cy.visit(`${Cypress.env('baseUrl')}/login`);
      cy.loginAsSalesUser('kirana@incubxperts.com', 'Qwerty@123');
      
      cy.contains('Dashboard').should('be.visible');
      console.log('login as a sales user')
  
     
      });

      it('logs in as a manager', () => {
        // Visit the login page
        cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
        //cy.visit(`${Cypress.env('baseUrl')}/login`);
        cy.loginAsManager('shivani@yopmail.com', 'Qwerty@123');
        
        cy.contains('Manager Dashboard').should('be.visible');
        console.log('login as a manager')
    
       
        });
        
        it('logs in as a super manger', () => {
          // Visit the login page
          cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
          //cy.visit(`${Cypress.env('baseUrl')}/login`);
          cy.loginAsSuperManager('atharvam@incubxperts.com', 'Qwerty@123');
          
          cy.contains('User Management').should('be.visible');
          console.log('login as a super manager')
      
         
          }); 
    });  

  