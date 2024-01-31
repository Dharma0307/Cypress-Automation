//before
//after
//beforeEach                  these four are hooks
//afterEach


describe('mytestsuite', ()=>{

    before(()=>{
        cy.log("***** Launch app  *****");
    })

    after(()=>{

        cy.log("***** close App *****");
    })

    beforeEach(()=>{

        cy.log("***** Login ******");
    })

    afterEach(()=>{

        cy.log("****** Logout ******");
    })

    it('search', ()=>{

        cy.log("*****   searching  *****");

    })

    it('advanced search', ()=>{

        cy.log("***** advanced searching  *****");

    })

    it('listing products', ()=>{

        cy.log("***** listing products  *****");
    })

})