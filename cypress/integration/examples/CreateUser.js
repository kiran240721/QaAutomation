/// <reference types="Cypress" />

import createStatsCollector from "mocha/lib/stats-collector";
import CreateUserPage from "../../support/PageObject/CreateUserPage";

//import DeleteOpprtunitiePage from '../../support/PageObject/DeleteOpprtunitiePage';

describe('User Creation', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });
    it('Verify the User Management List View', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        console.log('Logged in as a user');

        CreateUserPage.clickOnUserManagement()
        cy.contains('h1', 'User List').should('be.visible');
        cy.get('thead th').should('have.length', 6);

    });

    it('Creates different types of users', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        console.log('Logged in as a user');

        //CreateUserPage.clickOnUserManagement()

        //CreateUserPage.clickOnCreateNewUser()

        cy.fixture('UserData.json').then(userData => {
            // Loop through each user type
            Object.keys(userData).forEach(userType => {
                const user = userData[userType];
                CreateUserPage.clickOnUserManagement()
                CreateUserPage.clickOnCreateNewUser()
                // Fill in user details using custom command
                cy.fillUserDetails(user);
                cy.wait(2000)
                if (user.roles.includes('Sales Person')) {
                    cy.get('#content > main > div.col-md-7.col-lg-8 > form > div.row.g-3 > div:nth-child(12)').should('be.visible');
                } else if (user.roles.includes('Manager')) {
                    cy.get('#content > main > div.col-md-7.col-lg-8 > form > div.row.g-3 > div:nth-child(12)').should('be.visible');
                } else if (user.roles.includes('Super Manager')) {
                    cy.get('#content > main > div.col-md-7.col-lg-8 > form > div.row.g-3 > div:nth-child(12)').should('be.visible');
                } else {
                    // Handle unexpected user role
                    throw new Error(`Unknown user role for user type: ${userType}`);
                }



            });
        })



    });

    it('Edit user', () => {
        cy.visit(Cypress.env('url') + "/Identity/Account/Login");

        cy.fixture('example').then((exampleData) => {
            
            const user = exampleData.users[2];
            const { email, password } = user;
            cy.loginAsSalesUser(user.email, user.password);
        });

        cy.contains('Dashboard').should('be.visible');
        console.log('Logged in as a user');

        CreateUserPage.clickOnUserManagement()
        CreateUserPage.clickOnSearch()
        let firstName = 'kiran'
        let lastName = 'Adhavade'
        cy.get('#search').clear().type(firstName);
        CreateUserPage.clickOnSearchButton()

        // Check if the user is found
        cy.get('table').contains('tr', firstName).as('userRow').then(($userRow) => {
            if ($userRow.length > 0) {
                // If the user is found, proceed with editing
                cy.get('[title="Edit User"] > .bi').click();
                console.log('User found, proceeding with editing...');
                cy.get('#firstName').clear().type(firstName);
                cy.get('#lastName').clear().type(lastName);
                cy.get('#content > main > div.col-md-7.col-lg-8 > form > div:nth-child(5) > div:nth-child(2) > button').click()
                console.log('User updated successfully!');
            } else {
                // If the user is not found, log and assert
                cy.log('User not found based on the search criteria');
                cy.wrap(true).should('eq', false); // Fail the test
            }
        });
    });


});
