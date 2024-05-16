/// <reference types="Cypress" />

import DeleteOpprtunitiePage from '../../support/PageObject/DeleteOpprtunitiePage';

describe('Delete opportunities', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Delete opportunitie by clicking on delete button', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        console.log('Logged in as a user');

        DeleteOpprtunitiePage.clickOnOpprtunities();
        cy.wait(2000);
        let tablePageContent;
        cy.get('#example').invoke('text').then(text1 => {
            tablePageContent = text1;
        });
        cy.wait(2000);
        DeleteOpprtunitiePage.clickOnDeleteButton();
        cy.wait(2000);
        DeleteOpprtunitiePage.clickOnpopup()


        //OpprtunitiesPage.clickOnSubmitButton();

        // Assert that the table content has changed after submitting
        cy.get('#example').should('not.contain', tablePageContent);
    });
});
