class OpportunitiesPage {
  clickOnOpprtunities() {
    return cy.get('#sidebar > div > div.app-sidebar-content > div > div:nth-child(2)')
  }

  clickOnNewOpprtunities() {
    return cy.get('[style="float:right;background-color:#00b156;color:white"]')
  }
  clickOnStatusSelect() {
    return cy.get('#StatusSelect').then($select => {
        const currentValue = $select.val();
        const options = Array.from($select[0].options);
        
        // Filter options to exclude the current value
        const differentOptions = options.filter(option => option.value !== currentValue && option.text !== 'Closed');
        
        // If there are different options available, select one randomly
        if (differentOptions.length > 0) {
            const randomIndex = Math.floor(Math.random() * differentOptions.length);
            const valueToSelect = differentOptions[randomIndex].value;
            cy.get('#StatusSelect').select(valueToSelect);
        } else {
            // Handle case when no different option is found
            console.log('No different options available.');
        }
    });
}

  selectStage() {
    return cy.get('#StatusSelect > option:nth-child(7)')
  }
  clcikOnSatage() {
    return cy.get('#StatusSelect > option:nth-child(7)').should('be.visible')
  }
  clickOnCompany() {
    return cy.get('#select2-clientlocation-container > span').click({ force: true });
  }
  clickOnSelctCompany() {
    // Find the options container
    cy.get('.select2-results__options').then($optionsContainer => {
        // Get all the options
        const $options = $optionsContainer.find('.select2-results__option');
        
        // Check if there are multiple options
        if ($options.length > 1) {
            // Generate a random index within the range of options
            const randomIndex = Math.floor(Math.random() * $options.length);

            // Click on the random option
            cy.wrap($options[randomIndex]).click();
        } else if ($options.length === 1) {
            // If only one option is found, click on it
            cy.wrap($options[0]).click();
        } else {
            // Handle case when no options are found
            console.log('No options found in the dropdown');
        }
    });
}



  selectCompony() {
    return cy.get('#select2-clientlocation-container')
  }

  clickOnNextButton() {
    return cy.get('#nextBtn')
  }

  clickOnNewCustomer() {
    return cy.get('[for="newCust"]')
  }

  clickOnBusiness() {
    return cy.get('#LOBSelect').select('RESIDENTIAL')
  }

  clickOnTransication() {
    return cy.get('#CountrySelect').select('Anguilla')
  }

  clickOnStartDate() {
    cy.get('#startDate').should('be.visible')
  }
  clickOnSector() {
    return cy.get('#sector').select('CONSTRUCTION')
  }

  clickOnBusinessAndSelect() {
    cy.get('#businessType1').select('Tender Required')
  }

  clickonNextButton() {
    return cy.get('#nextBtn')
  }
  clickOnAddproduct() {
    return cy.get('#addproductbtn').click()
  }
  clickOnproductAndSelect() {
    return cy.get('#product').select('Commercial')
  }
  clickOnPotntialVol() {
    return cy.get('#prospectvolume').type('10')
  }

  clickOnTotalVol() {
    return cy.get('#totalprospectvolume').type('100')
  }

  clickOnVolUnit() {
    return cy.get('#volumeunit').select('American Gallons - AG')
  }

  clickOnMargin() {
    return cy.get('#expectedmargin').type('10')
  }

  clickOnSaveAndClose() {
    return cy.get('[onclick="Bindtable(false)"]')

  }


  clickOnClose() {
    return cy.get('#modalLg > .modal-dialog > .modal-content > .modal-header > .btn-close')
  }


  clickOnNextButtonOfProduct() {
    return cy.get('#nextBtn').click()
  }

  clickOnSubmitButton() {
    return cy.get('#submit')
  }

  getStartDate() {
    return cy.get('#startDate').get('input[type="date"]').should('exist').first().as('firstDateInput').invoke('val', '2024-05-13');

  }
  getFirstScheduledDate() {
    return cy.get('#FirstScheduledDate').get('input[type="date"]').should('exist').last().as('lastDateInput').invoke('val', '2024-05-25');

  }

  clickOnDeleteButton(){
  return cy.get('#Delete').then($buttons => {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * $buttons.length);
    
    // Click on the delete button at the random index
    cy.wrap($buttons[randomIndex]).click();
  });
}
}

export default new OpportunitiesPage();