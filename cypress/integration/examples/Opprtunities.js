/// <reference types="Cypress" />

import OpportunitiesPage from '../../support/PageObject/OpportunitiesPage'

describe('Create a new opprtunities', () => {
  // Load user data from the JSON file before each test
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Create new opprtunitie', () => {
    // const OpportunitiesPage = new OpportunitiesPage()

    // Visit the login page
    //cy.visit(Cypress.config('baseUrl'))
    // cy.visit({
    //   url: Cypress.config('baseUrl')
    // });
    //cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login');
    //cy.visit(`${Cypress.env('baseUrl')}/login`);
    cy.visit(Cypress.env('url'))
    cy.fixture('User.json').then(users => {
      users.forEach(user => {
        cy.loginAsSalesUser(user.email, user.password);
      });
    });
    cy.contains('Dashboard').should('be.visible');
    console.log('login as a sales user')
    OpportunitiesPage.clickOnOpprtunities().click()
    let firstPageContent;
     cy.get('#example').invoke('text').then(text => {
            firstPageContent = text;
        });
    OpportunitiesPage.clickOnNewOpprtunities().click()
    cy.wait(2000)
    OpportunitiesPage.clickOnStatusSelect()

    OpportunitiesPage.selectStage()
    OpportunitiesPage.clcikOnSatage()
    OpportunitiesPage.clickOnCompany()
    cy.wait(2000)
    OpportunitiesPage.clickOnSelctCompany()
    //OpportunitiesPage.clickOnCompany().click()
    OpportunitiesPage.clickOnNextButton().click()
    cy.wait(1000)
    OpportunitiesPage.clickOnNewCustomer().click()
    OpportunitiesPage.clickOnBusiness()
    //cy.getCurrentDate().then(date => {
    //cy.log('Current Date:', date);
    // You can use `date` in your test assertions or any other logic
    //});
    OpportunitiesPage.getStartDate()


    //cy.get('#startDate').get('input[type="date"]').should('exist').first().as('firstDateInput').invoke('val', '2024-05-02');

    // Click on the date containing the number 29 within the date picker popup
    //cy.contains('[data-testid="numberElement"]', 29).click();
    // cy.window().then(popupWindow => {

    //   // const currentDate = new Date();
    //   // const formattedDate = currentDate.toDateString();
    //   // const formattedTime = currentDate.toLocaleTimeString();


    //   cy.get('input[type="date"]').as('dateInput');
    //   cy.get('@dateInput').should('exist').first().as('firstDateInput');
    //   const currentDate = new Date();

    // // Format the current date as 'DD-MM-YYYY'
    // const year = currentDate.getFullYear();
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    // const day = String(currentDate.getDate()).padStart(2, '0');

    // const formattedDate = `${year}-${month}-${day}`;

    // // Set the formatted date to the first date input field
    // cy.get('@firstDateInput').type(formattedDate);

    OpportunitiesPage.clickOnSector();
    OpportunitiesPage.getFirstScheduledDate()
    //cy.get('#FirstScheduledDate').get('input[type="date"]').should('exist').last().as('lastDateInput').invoke('val', '2024-05-12');
    OpportunitiesPage.clickOnTransication()
    OpportunitiesPage.clickOnBusinessAndSelect()
    OpportunitiesPage.clickOnNextButton().click()
    OpportunitiesPage.clickOnAddproduct();

    cy.get('#modalLg > .modal-dialog > .modal-content').each($div => {
      cy.wrap($div).within(() => {

        cy.wait(1000);
        OpportunitiesPage.clickOnproductAndSelect();
        OpportunitiesPage.clickOnPotntialVol();
        OpportunitiesPage.clickOnTotalVol();
        OpportunitiesPage.clickOnVolUnit();
        OpportunitiesPage.clickOnMargin().click();
      });
      cy.wait(2000)
      cy.wrap($div).within(() => {
        //OpportunitiesPage.clickOnSaveAndAdd().click(); 
        cy.contains('Save And Close').click({ force: true })
      });
      //cy.wait(2000)  
      // cy.wrap($div).within(() =>{
      //     //OpportunitiesPage.clickOnSaveAndAdd().click(); 
      //   OpportunitiesPage.clickOnClose().click()
      //     });  
    });

    // Find the 'Save and Close' button within each modal footer


    // Ensure the modal is closed
    //cy.get('.modal-dialog').should('not.exist');


    cy.wait(4000)
    OpportunitiesPage.clickOnNextButtonOfProduct()
    cy.wait(1000)
    OpportunitiesPage.clickOnSubmitButton().click({ force: true })
    cy.wait(1000)
    //cy.log(`Selected company: ${randomOptionText}`);

        // Assert that the selected company is displayed
       // cy.get('.select2-selection__rendered').should('contain', randomOptionText);
    //cy.contains('Fleet card').should('be.visible');
  //   cy.get('table tbody tr') // Assuming table rows are inside tbody
  // .first() // Select the first row
  // .within(() => {
  //   // Within the first row, you can perform assertions on specific columns or data
  //   cy.get('td:nth-child(1)').should('contain', 'Test - Anguilla');
    
    // Add more assertions as needed for other columns
  //});
  cy.get('#example').should('not.contain', firstPageContent);






  });


});
