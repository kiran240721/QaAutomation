/// <reference types="Cypress" />

import EditOpprtunitiesPage from '../../support/PageObject/EditOpprtunitiesPage';

describe('Edit opportunities', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Edit opportunities by clicking on edit button', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[0];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        console.log('Logged in as a user');

        EditOpprtunitiesPage.clickOnOpprtunities();
        cy.wait(2000);
        let tablePageContent;
        cy.get('#example').invoke('text').then(text1 => {
            tablePageContent = text1;
        });
        cy.wait(2000);
        EditOpprtunitiesPage.clickOnEditButton();


        cy.wait(2000);
        let firstPageContent;
        cy.get('#StatusSelect').invoke('text').then(text => {
            firstPageContent = text;
        });

        EditOpprtunitiesPage.clickOnStatusSelect();

        cy.get('#StatusSelect').should('not.contain', firstPageContent);

        // Loop to click on the "Next" button multiple times
        const clickNextMultipleTimes = (numberOfClicks) => {
            for (let i = 0; i < numberOfClicks; i++) {
                EditOpprtunitiesPage.clickOnNextButton();
                cy.wait(2000); //  wait time as needed
            }
        };

        // Click on the "Next" button three times
        clickNextMultipleTimes(3);

        EditOpprtunitiesPage.clickOnSubmitButton();

        // Assert that the table content has changed after submitting
        cy.get('#example').should('not.contain', tablePageContent);
    });
});
