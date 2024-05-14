class SalesPersonsWPPPage{

    clickOnPriorityPlan()
    {
      return  cy.get('#sidebar > div > div.app-sidebar-content > div > div:nth-child(3)').click()
    }

    getFromDate() {
      return cy.get('#startFrom').get('input[type="date"]').should('exist').first().as('firstDateInput').invoke('val', '2023-05-02');
  
    }
    
    getToDate() {
      return cy.get('#startTo').get('input[type="date"]').should('exist').last().as('lastDateInput').invoke('val', '2024-05-02');
  
    }

    clickOnSearchButton()
    {
     return cy.get('.btn').click()
    }


}

export default new SalesPersonsWPPPage();