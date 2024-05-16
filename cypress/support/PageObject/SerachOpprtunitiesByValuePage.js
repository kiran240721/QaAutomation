class SerachOpprtunitiesByValuePage{

    clickOnOpprtunities()
    {
      return  cy.get('#a-opportunities').click()
    }

    editOnSearch()
    {
       return cy.get('#example_filter > label > input').type('Engage')
    }

    clickOnNextButton()
    {
      return cy.get('#example_next').click()
    }

    clickOnPreviousButton()
    {
      return cy.get('#example_previous')
    }
   


}

export default new SerachOpprtunitiesByValuePage();