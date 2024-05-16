/// <reference types="Cypress" />

import SalesPersonsWPPPage from '../../support/PageObject/SalesPersonsWPPPage';
import SerachOpprtunitiesByValuePage from '../../support/PageObject/SerachOpprtunitiesByValuePage';

describe('Sales Persons Weekly Priority Plan', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Verify landing page', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');

        SalesPersonsWPPPage.clickOnPriorityPlan()
        // Assert manager view is displayed
        cy.contains('Manager View').should('be.visible');

            // Assert Sales person view is displayed
        cy.contains('Sales Person View').should('be.visible');
     
    });


    it('Verify search based on the date range ', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        SalesPersonsWPPPage.clickOnPriorityPlan()
        cy.contains('Manager View').should('be.visible');
        cy.contains('Sales Person View').should('be.visible');

        SalesPersonsWPPPage.getFromDate()

        SalesPersonsWPPPage.getToDate()
        
        SalesPersonsWPPPage.clickOnSearchButton()

        cy.get('.btn').then($results => {
            if ($results.find('.btn').length > 0) {
                // Results are displayed
                cy.contains('Relevant data for the selected date range').should('be.visible');
            } else($results.find('.btn').length > 0) 
                // "Data not found" message is displayed
                cy.contains('No Data Found').should('be.visible');
             
                
            
        });
     
    });
});
