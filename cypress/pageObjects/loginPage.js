const Locators = require('../fixtures/locators.json')


class LoginPage {
    get emailInput() {
        return cy.get(Locators.login.emailInput)
    }

    get passwordInput() {
        return cy.get(Locators.login.passwordInput)
    }

    get submitButton() {
        return cy.get(Locators.login.submitBtn)
    }

    get loginTitle() {
        return cy.get(Locators.login.pageTitle)
    }

    get errorAlert(){
        return cy.get(Locators.login.errorAlert)
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}
export const loginPage = new LoginPage()