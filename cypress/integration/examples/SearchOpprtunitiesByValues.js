/// <reference types="Cypress" />

import SerachOpprtunitiesByValuePage from '../../support/PageObject/SerachOpprtunitiesByValuePage'
describe('Search opportunities - by Value', () => {
    // Load user data from the JSON file before each test
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Search opportunities by Value', () => {
        //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
        cy.visit(Cypress.env('url') + "/Identity/Account/Login")
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

        SerachOpprtunitiesByValuePage.clickOnOpprtunities()
        SerachOpprtunitiesByValuePage.editOnSearch().click()

        cy.wait(2000)
        const searchText = 'Engage'; // Text to search

        // Type the search text into the search box
        //cy.get('input[type="search"]').type(searchText);

        // Submit the search form if needed
        // cy.get('form').submit();

        // Assert that the search results contain the search text
        cy.get('#example').should('contain', searchText);
        cy.get('#example')
            .find('tr')
            .filter(':contains(' + searchText + ')') // Filter rows containing the search text
            .its('length')
            .then(count => {
                // Log the total number of entries for the searched text
                cy.log(`Total entries for "${searchText}": ${count}`);
            });







    });
});