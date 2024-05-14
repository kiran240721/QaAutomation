/// <reference types="Cypress" />

import SerachOpprtunitiesByValuePage from '../../support/PageObject/SerachOpprtunitiesByValuePage';

describe('Search opportunities - pagination', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Pagination', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[0];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');

        SerachOpprtunitiesByValuePage.clickOnOpprtunities();

        // Get the content of the first page before navigating
        let firstPageContent;
        cy.get('#example').invoke('text').then(text => {
            firstPageContent = text;
        });

        // Click on the next button
        SerachOpprtunitiesByValuePage.clickOnNextButton();
        cy.wait(1000);    
        // Wait for the content of the next page to load
        cy.get('#example_wrapper > div:nth-child(2) > div').should('not.contain', firstPageContent);

        // Click on the previous button
        SerachOpprtunitiesByValuePage.clickOnPreviousButton().click();
        cy.wait(1000); 

        // Assert that the content of the previous page is now visible again
        cy.get('#example_wrapper > div:nth-child(2) > div').should('not.contain', firstPageContent);
    });
});
