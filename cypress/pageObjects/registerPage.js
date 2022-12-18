const Locators = require('../fixtures/locators.json')

class RegisterPage {

    get firstNameInput() {
        return cy.get(Locators.register.firstName)
    }
    get lastNameInput() {
        return cy.get(Locators.register.lastName)
    }
    
    get emailInput() {
        return cy.get(Locators.register.email)
    }

    get passwordInput() {
        return cy.get(Locators.register.password)
    }

    get passwordConfirmationInput() {
        return cy.get(Locators.register.passwordConfirmation)
    }

    get termsInput () {
        return cy.get(Locators.register.terms)
    }

    get submitButton() {
        return cy.get(Locators.register.button)
    }

    get errorAlert() {
        return cy.get(Locators.register.errorAlert)
    }
    
    register(firstName, lastName, email, password) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(password)
        this.termsInput.click()
        this.submitButton.click()
    }
}
export const registerPage = new RegisterPage()