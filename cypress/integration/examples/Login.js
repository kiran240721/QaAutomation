describe('Login as multiple users', () => {
    // Load user data from the JSON file before each test
    beforeEach(() => {
      cy.fixture('Login').as('userData'); // Assuming the JSON file is named Login.json
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test when encountering uncaught exceptions
        return false;
      });
    });
  
    it('logs in as sales users and logs out', () => {
      // Visit the login page
      //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
      cy.visit(Cypress.env('url'))
      // Perform login for each user
      cy.get('@userData').each((user) => {
        cy.get('#Input_Email').clear().type(user.email);
        cy.get('.btn').click()
        //cy.wait(3000)
        cy.get('.shivanand').clear().type(user.password);
        //cy.get('#password-a159af27-d8bb-4454-b8b7-ff4b435311b0')
        cy.get('.btn-primary').click();
        
        // Wait for login process to complete (you may adjust the wait time as needed)
        cy.wait(2000);
  
        // Assert that the dashboard is visible after login
        cy.contains('Dashboard').should('be.visible');
        console.log(`Logged in as ${user.email}`);
        
        // Click on the logout button
        cy.get('#header > div.menu > div > a').click();
  
        // Assert that the logout dropdown is visible
        cy.get('#header > div.menu > div > div > form > button').should('be.visible');
  
        // Click on the logout button inside the dropdown
        cy.get('.dropdown-item').click();
  
        // Assert that the user is redirected to the login page after logout
        cy.url().should('include', '/Login');
      });
    });  
  });
  