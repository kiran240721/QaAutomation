class DeleteOpprtunitiePage {

    clickOnOpprtunities() {
        return cy.get('#a-opportunities').click()
    }

    clickOnDeleteButton() {
        return cy.get('#Delete').then($buttons => {
            // Get a random index
            const randomIndex = Math.floor(Math.random() * $buttons.length);

            // Click on the delete button at the random index
            cy.wrap($buttons[randomIndex]).click();
        });
    }

    clickOnpopup() {

        return cy.get('.btn-close').click()
    }



}

export default new DeleteOpprtunitiePage();