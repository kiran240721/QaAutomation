class SearchOpprtunitiesPage{

    clickOnOpprtunities()
    {
      return  cy.get('#a-opportunities').click()
    }

  //   clickOnStage() {
  //     return cy.get('#stageSizeSelect').then($select => {
  //          const options = Array.from($select[0].options);
  //          const randomIndex = Math.floor(Math.random() * options.length);
  //          const valueToSelect = options[randomIndex].value;
  //          cy.get('#stageSizeSelect').select(valueToSelect);
  //      });
  // }

  clickOnStage() {
    const valueToSelect = 'All Stage';
    return cy.get('#stageSizeSelect').select(valueToSelect);
}

   
    

    


}

export default new SearchOpprtunitiesPage();