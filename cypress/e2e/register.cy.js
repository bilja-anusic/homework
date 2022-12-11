describe("Register page test", ()=>{
    it('Visit register page', () => {
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
    });

    it ("Register with valid credentials",() =>{
        cy.visit('/')
        cy.get('.nav-link').eq(2).click()
        cy.get('#first-name').type("biljaa")
        cy.get('#last-name').type("anusic")
        cy.get('#email').type("biljaa@yahoo.com")
        cy.get('#password').type("12345678")
        cy.get('#password-confirmation').type("12345678")
        cy.get('.form-check-input').click()
        cy.get('.btn').click()

    })
})