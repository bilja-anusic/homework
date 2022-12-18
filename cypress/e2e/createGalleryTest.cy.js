/// <reference types="Cypress" />

import { createGalleryPage } from "../pageObjects/createGalleryPage";
import { homePage } from "../pageObjects/homePage";
import { loginPage } from "../pageObjects/loginPage";
import { allGalleriesPage } from "../pageObjects/allGalleriesPage";
import { faker } from "@faker-js/faker";

describe('Create gallery tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        homePage.clickLoginButton()
        loginPage.login("bilja@yahoo.com","biljabilja123")
        homePage.clickCreateGalleryButton()
    })
    
    it('Create gallery with valid credentials', () => {
        let titleGallery = faker.lorem.words(3)
        createGalleryPage.createGallery(titleGallery,"opis slike","https://www.nscanvas.com/wp-content/uploads/2017/04/ivice.jpg") 
        cy.wait(1000) 
        allGalleriesPage.search(titleGallery)
        cy.get(".cell").should("have.length",1)
        cy.get('h2 > .box-title').should("contain.text",titleGallery)
    });
    
    it('Create gallery with invalid image', () => {
        createGalleryPage.createGallery("Nema slike","opis slike","https://www.nscanvas.com/wp-content/uploads/2017/04/ivice") 
        loginPage.errorAlert.should("be.visible")

    });


    afterEach(() => {
        cy.clearCookies()
    })

})