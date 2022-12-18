const Locators = require('../fixtures/locators.json')


class AllGalleriesPage {
    get filterInput() {
        return cy.get(Locators.allGalleries.searchInput)
    }

    get filterBtn() {
        return cy.get(Locators.allGalleries.filterBtn)
    }

    get pageTitle() {
        return cy.get(Locators.allGalleries.pageTitle)
    }

    get loadMoreBtn() {
        return cy.get(Locators.allGalleries.loadMoreBtn)
    }

    get galleryElement() {
        return cy.get(Locators.allGalleries.galleryElement)

    }

    search(text) {
        this.filterInput.type(text)
        this.filterBtn.click()
    }
}
export const allGalleriesPage = new AllGalleriesPage()