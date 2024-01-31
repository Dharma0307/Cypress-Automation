describe('browse navigation', ()=>{

    it('navigation sample case', ()=>{
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store"); // in home page

        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text','Cameras');

        cy.go('back'); // go back to home page
        cy.title().should('eq',"Your Store"); 

        cy.go('forward'); // again go to camera page
        cy.get("div[id='content'] h2").should('have.text','Cameras');

        cy.reload();

    })
})