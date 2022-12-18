/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/loginPage";
import { homePage } from "../pageObjects/homePage";

describe('Login tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        cy.url().should("include","gallery-app")
        homePage.clickLoginButton()
        cy.url().should("include","/login")
        loginPage.loginTitle.should("have.text", "Please login")
    })
    
    it('Login with valid credentials', () => {
        loginPage.login('bilja@yahoo.com','biljabilja123')
        homePage.logoutBtn.should("exist")
    });

    it('Login with invalid credentials', () => {
        loginPage.login('bilja@yahoo.com','bilja12345')
        loginPage.errorAlert.should("be.visible")
        loginPage.errorAlert.should("have.text","Bad Credentials")
    });

    it('logout', () => {
        loginPage.login('bilja@yahoo.com','biljabilja123')
        homePage.logoutBtn.should("exist")
        homePage.clickLogoutButton()
        homePage.logoutBtn.should("not.exist")
    });

    afterEach(() => {
        cy.clearCookies()
    })

})