describe('Login as multiple users', () => {
  // Load user data from the JSON file before each test
  beforeEach(() => {
    cy.fixture('example').as('userData');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('logs in as different users and logs out', () => {
    // Visit the login page
    cy.visit(Cypress.env('url'))
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');

    // Perform login for each user
    cy.get('@userData').then((userData) => {
      if (!userData || !userData.users || userData.users.length === 0) {
        // Handle case where userData is undefined or empty
        throw new Error('User data is missing or empty');
      }

      userData.users.forEach((user) => {
        cy.get('#Input_Email').type(user.email);
        cy.get('.btn').click();
        //cy.wait(3000);
        cy.get('.shivanand').clear().type(user.password);
        cy.get('.btn-primary').click();
        cy.wait(3000);
        cy.contains('Dashboard').should('be.visible');
        console.log(`Logged in as ${user.email}`);
        
        // Click on the logout button
        cy.get('#header > div.menu > div > a').click();
  
        // Assert that the logout dropdown is visible
        cy.get('#header > div.menu > div > div > form > button').should('be.visible');
  
        // Click on the logout button inside the dropdown
        cy.get('.dropdown-item').click();

        // Assertions and logout process...
        cy.url().should('include', '/Login');
      });
    });
  });
});
