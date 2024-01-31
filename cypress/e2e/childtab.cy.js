describe('clid tab', ()=>{

    it('child tab case => approach1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); // parent tab

        cy.get('.example >a').invoke('removeAttr','target').click(); // clicking on link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(4500);

        //operantion
        cy.go('back'); // back to parent tab
    })

    it.only('child tab case => approach2', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); // parent tab

        cy.get('.example >a').then((e)=>{

           let url = e.prop('href');

           cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(4500);

        //operantion
        cy.go('back'); // back to parent tab
    })
})