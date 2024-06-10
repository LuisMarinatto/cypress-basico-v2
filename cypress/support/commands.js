Cypress.Commands.add("fillMandatoryFieldsAndSumbit", function()
{
    cy.get('#firstName').type("Luís Fernando")
    cy.get('#lastName').type("Marinatto")
    cy.get('#email').type("fernandomarinatto@gmail.com")
    cy.get('#open-text-area').type("Você é incrivel, saiba disso!!")
    cy.contains("button", "Enviar").click()

})