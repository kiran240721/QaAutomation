class EditOpprtunitiesPage{

    clickOnOpprtunities()
    {
      return  cy.get('#a-opportunities').click()
    }

    clickOnEditButton()
    {
       return cy.get('#example > tbody > tr:nth-child(1) > td:nth-child(6) > span > a > i').click()
    }

    clickOnStatusSelect() {
       return cy.get('#StatusSelect').then($select => {
            const currentValue = $select.val();
            const options = Array.from($select[0].options);
            const differentOption = options.find(option => option.value !== currentValue);
            cy.wrap(differentOption).invoke('val').then(value => {
                cy.get('#StatusSelect').select(value);
            });
        });
     }

     clickOnNextButton()
     {
       return cy.get('#nextBtn').click()

     }

     clickOnSubmitButton()
     {
       return cy.get('#submit').click()
     }

    


}

export default new EditOpprtunitiesPage();