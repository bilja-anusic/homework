const locators = require("../fixtures/locators.json")
const {faker} = require("@faker-js/faker")

describe("Register page test", ()=>{
    beforeEach( () => {
        cy.visit('/')
        cy.get(locators.header.registerBtn).click()
    });


    it ("Register with valid credentials",() =>{

        const password = faker.internet.password()
        
        cy.get(locators.register.firstName).type(faker.name.firstName())
        cy.get(locators.register.lastName).type(faker.name.lastName())
        cy.get(locators.register.email).type(faker.internet.email())
        cy.get(locators.register.password).type(password)
        cy.get(locators.register.passwordConfirmation).type(password)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.button).click()
    
    })

    it ("Register without first name",() =>{

        const password = faker.internet.password()
        
        cy.get(locators.register.lastName).type(faker.name.lastName())
        cy.get(locators.register.email).type(faker.internet.email())
        cy.get(locators.register.password).type(password)
        cy.get(locators.register.passwordConfirmation).type(password)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.button).click()
    
    })

    it ("Register without last name",() =>{

        const password = faker.internet.password()
        
        cy.get(locators.register.firstName).type(faker.name.firstName())
        cy.get(locators.register.email).type(faker.internet.email())
        cy.get(locators.register.password).type(password)
        cy.get(locators.register.passwordConfirmation).type(password)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.button).click()


    })

    it ("Register with invalid email",() =>{

    const password = faker.internet.password()
    
    cy.get(locators.register.firstName).type(faker.name.firstName())
    cy.get(locators.register.lastName).type(faker.name.lastName())
    cy.get(locators.register.email).type("bilja@@yahoo.com")
    cy.get(locators.register.password).type(password)
    cy.get(locators.register.passwordConfirmation).type(password)
    cy.get(locators.register.terms).click()
    cy.get(locators.register.button).click()

    })

    it ("Register with invalid password confirmations",() =>{

    const password = faker.internet.password()
    
    cy.get(locators.register.firstName).type(faker.name.firstName())
    cy.get(locators.register.lastName).type(faker.name.lastName())
    cy.get(locators.register.email).type(faker.internet.email())
    cy.get(locators.register.password).type(password)
    cy.get(locators.register.passwordConfirmation).type("12345678")
    cy.get(locators.register.terms).click()
    cy.get(locators.register.button).click()

    })

})