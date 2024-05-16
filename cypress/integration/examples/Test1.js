/// <reference types="Cypress" />

describe.skip('Calendar Handling Test', () => {
  beforeEach(() => {
    // Listen to the 'uncaught:exception' event
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test when encountering uncaught exceptions
      return false;
    });
  });
    it('Should select a specific date from the calendar', () => {

      
      // Visit the webpage with the date picker/calendar input
      cy.visit('https://solclearskyqa.azurewebsites.net/Identity/Account/Login')
      cy.get('#Input_Email').type('kirana@incubxperts.com')
      cy.get('.btn').click()
      cy.wait(3000)
      cy.get('.shivanand').type('Qwerty@123')
      cy.get('#ff823a88-6800-467e-a77d-72347109418d').click()
      cy.get('#a-opportunities > .menu-text').click()
      cy.get('[style="float:right;background-color:#00b156;color:white"]').click()
      // Select 'Execute' option from the dropdown
      cy.get('#StatusSelect').select('Execute');

      // Select 'Fleet card' option from the dropdown
     // cy.get('#select2-clientlocation-container').click(); // Click to open the dropdown
      cy.get('#select2-clientlocation-container').type('Fleet')

         .get('.select2-results__options').each(($e1, index, $list) => {

            if ($e1.text() === "Fleet card") {
               cy.wrap($e1).click();
            }


         })
      //cy.get('.select2-search__field').select('Fleet card'); // Type the text to filter options
      //cy.contains('.select2-results__option',).click(); 
    
  
      cy.get('#nextBtn').click()
    
    
  

      cy.get('#startDate').get('input[type="date"]').should('exist').first().as('firstDateInput').invoke('val', '2024-05-02');
   
  
      // // Click on the date input field to open the calendar
      // cy.get('#startDate').click()

  
      
      // // Assuming the calendar is displayed as a popup/modal
      // // You may need to adjust the selector based on the actual implementation
      // // Here, we're selecting April 2024
      // cy.get('.datepicker-month').select('April')
      // cy.get('.datepicker-year').select('2024')
  
      // // Find and click on the specific date (e.g., April 23, 2024)
      // cy.contains('.datepicker-days td', '23').click()
  
      // // Optionally, you can assert that the selected date is displayed in the input field
      // cy.get('#date-input').should('have.value', '04/23/2024')
    })
  })