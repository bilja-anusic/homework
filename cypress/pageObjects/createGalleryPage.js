const Locators = require('../fixtures/locators.json')

class CreateGalleryPage {
    get titleInput(){
        return cy.get(Locators.createGallery.title)
    }

    get descriptionsInput(){
        return cy.get(Locators.createGallery.description)
    }

    get imagesInput() {
        return cy.get(Locators.createGallery.images)
    }

    get addImageBtn() {
        return cy.get(Locators.createGallery.addImageBtn)
    }

    get submitBtn() {
        return cy.get(Locators.createGallery.submitBtn)
    }

    createGallery(title,description,imagesUrl){
        this.titleInput.type(title)
        this.descriptionsInput.type(description)
        this.imagesInput.type(imagesUrl)
        this.submitBtn.click()
    }


}
export const createGalleryPage = new CreateGalleryPage()