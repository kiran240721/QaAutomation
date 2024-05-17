class CreateUserPage {

   clickOnUserManagement()
   {
      return cy.get('#a-userManagement').click()
   }

   clickOnCreateNewUser()
   {
      return cy.get('#content > main > div.d-flex.align-items-start.justify-content-between > div > a:nth-child(2)').click()
   }

   clickOnSearch()
   {
    return cy.get('#dt-search-0').click()

   }

   clickOnSearchButton()
   {
    return cy.get('#dt-search-0').click()
   }

}

export default new CreateUserPage();