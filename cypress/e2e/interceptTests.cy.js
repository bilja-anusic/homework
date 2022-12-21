/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/loginPage";
import { homePage } from "../pageObjects/homePage";
import { createGalleryPage } from "../pageObjects/createGalleryPage";

describe('Intersept tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')      
        cy.url().should("include","gallery-app")      
        homePage.clickLoginButton()      
        cy.url().should("include","/login")       
        loginPage.loginTitle.should("have.text", "Please login")
    })
    
    it('Login with valid credentials with intercept', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login').as('validLogin')      
        loginPage.login('bilja@yahoo.com', 'biljabilja123')       
        cy.wait('@validLogin').then((request) => {
            expect(request.response.statusCode).to.eql(200)
        })
    })

    it('Create gallery with intercept', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries').as('validCreateGallery')        
        loginPage.login('bilja@yahoo.com', 'biljabilja123')        
        homePage.clickCreateGalleryButton()       
        createGalleryPage.createGallery("slika","opis slike","https://www.nscanvas.com/wp-content/uploads/2017/04/ivice.jpg")        
        cy.wait('@validCreateGallery').then((request) => {
            expect(request.response.statusCode).to.eql(201)
        })
    })

    it('Delete gallery with intercept', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries').as('createGallery')
        loginPage.login('bilja@yahoo.com', 'biljabilja123')
        homePage.clickCreateGalleryButton()
        createGalleryPage.createGallery("slika","opis slike","https://www.nscanvas.com/wp-content/uploads/2017/04/ivice.jpg") 
        cy.wait('@createGallery').then((request) => {            
            expect(request.response.statusCode).to.eql(201)
           
            let galleryID = request.response.body.id
            
            cy.intercept('DELETE', 'https://gallery-api.vivifyideas.com/api/galleries/'+galleryID).as('deleteGallery')
            cy.visit('/galleries/'+galleryID)            
            cy.get(':nth-child(5) > button.btn').click()           
            cy.on('window:confirm', (text) => {
                expect(text).to.contains('Are you sure you want to delete gallery?')
            })              
            cy.wait('@deleteGallery').then((request)=>{
                expect(request.response.statusCode).to.eql(200)
            })
        })
    })


    it('Logout with intercept', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/logout').as('validLogout')       
        loginPage.login("bilja@yahoo.com", "biljabilja123")       
        homePage.logoutBtn.click()       
        cy.wait('@validLogout').then((request) => {
            expect(request.response.statusCode).to.eql(200)
        })
    })

    afterEach(() => {
        cy.clearCookies()
    })
})