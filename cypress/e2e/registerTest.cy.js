/// <reference types="Cypress" />

import { registerPage } from "../pageObjects/registerPage";
import { homePage } from "../pageObjects/homePage";
import { loginPage } from "../pageObjects/loginPage";

const {faker} = require("@faker-js/faker")

describe('Register tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        homePage.clickRegisterButton()
    })
    
    it('Register with valid credentials', () => {
        registerPage.register('Bilja', 'Anusic', faker.internet.email(),faker.internet.password())
        cy.wait(1000)
        homePage.logoutBtn.should("exist")
    });
    
    it('Register with invalid credentials', () => {
        registerPage.register('Bilja', 'Anusic', 'biljayahoo.com','biljabilja123')
        // loginPage.errorAlert.should("be.visible")
        registerPage.emailInput.then(($input) => {
            expect($input[0].validationMessage).to.include(
              `Please include an '@'`
            )
          })
    });

    it('Register with two characters in password', () => {
        registerPage.register('Bilja', 'Anusic', faker.internet.email(),"jj")
        registerPage.errorAlert.should("exist")
        registerPage.errorAlert.should("have.text","The password must be at least 8 characters.")
    });
    

    afterEach(() => {
        cy.clearCookies()
    })

})