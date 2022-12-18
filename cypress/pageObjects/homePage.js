const Locators = require('../fixtures/locators.json')

class HomePage{
    get loginBtn(){
        return cy.get(Locators.header.loginBtn)  
    } 

    get logoutBtn(){
        return cy.get(Locators.header.logoutBtn)
    }

    get registerBtn(){
        return cy.get(Locators.header.registerBtn)
    }

    get createGalleryBtn(){
        return cy.get(Locators.header.createGalleryBtn)
    }


    clickLoginButton(){
        this.loginBtn.click()
    }

    clickLogoutButton(){
        this.logoutBtn.click()
    }

    clickRegisterButton(){
        this.registerBtn.click()
    }

    clickCreateGalleryButton(){
        this.createGalleryBtn.click()
    }
}

export const homePage = new HomePage()