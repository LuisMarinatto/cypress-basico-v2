it("testa a página da política de privacidade de forma independente", function()
{
    cy.visit("./src/privacy.html")

    cy.contains("Talking about testing").should("be.visible")
})