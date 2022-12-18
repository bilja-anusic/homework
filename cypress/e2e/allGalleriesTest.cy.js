/// <reference types="Cypress" />

import { homePage } from "../pageObjects/homePage";
import { allGalleriesPage } from "../pageObjects/allGalleriesPage";

import { faker } from "@faker-js/faker";

describe('All galleries tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
    })

    it ("All galleries page have ten galleries", () => {
        allGalleriesPage.galleryElement.should("have.length",10)
    })

    it ("Load more button should exist", () => {
        allGalleriesPage.loadMoreBtn.should("exist")
    })

    it ("Load more button should load ten more galleries", () => {
        allGalleriesPage.loadMoreBtn.click()
        allGalleriesPage.galleryElement.should("have.length",20)
    })


    
    afterEach(() => {
        cy.clearCookies()
    })

})