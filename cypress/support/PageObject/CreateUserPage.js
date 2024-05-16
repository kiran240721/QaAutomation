class CreateUserPage {

   clickOnUserManagement()
   {
      return cy.get('#a-userManagement').click()
   }

   clickOnCreateNewUser()
   {
      return cy.get('#content > main > div > a').click()
   }

   clickOnSearch()
   {
    return cy.get('#search').click()

   }

   clickOnSearchButton()
   {
    return cy.get('#searchForm > div > button.btn.btn-primary.me-1').click()
   }

}

export default new CreateUserPage();