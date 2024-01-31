import'cypress-iframe'

describe('Handling iframes', () => {

    it('iframs => approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("hello world {cmd+a}");

        cy.get("[aria-label='Bold']").click();
    })


    it('iframs => approach2 using custom command', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.getIframe('#mce_0_ifr').clear().type("hello world {cmd+a}");



        cy.get("[aria-label='Bold']").click();
    })

    it('iframs => approach3 using cypress iframe plugin', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr'); // load the frame

        cy.iframe('#mce_0_ifr').clear().type("welcome {cmd+a}");

        cy.get("[aria-label='Italic']").click();
    })
})