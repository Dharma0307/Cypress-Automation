import'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('mouse operations', ()=>{

    it('mousemover', ()=>{

        cy.visit("https://demo.opencart.com/");

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        .should('be.visible');

    })

    it('right click', ()=>{
        
        //Approach 1
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        // cy.get('.context-menu-icon-copy > span').should('be.visible');

        //Approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    it('Double click', ()=>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.frameLoaded('#iframeResult'); // load the frame

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
    })

    it('Drag and drop', ()=>{

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

        cy.get("#box6").should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3900);
        cy.get('#box6').drag('#box106',{force:true});


    })


    it.only('scorrling the page', ()=>{

        cy.visit('https://www.w3schools.com/js/js_popup.asp');
        cy.get('[href="js_api_web_storage.asp"]').scrollIntoView({duration:2000});
        cy.get('[href="js_api_web_storage.asp"]').should('be.visible');

        cy.get('[href="js_ajax_http.asp"]').scrollIntoView();
        cy.get('[href="js_ajax_http.asp"]').should('be.visible');

        cy.get('[href="js_intro.asp"]').scrollIntoView();
        cy.get('[href="js_intro.asp"]').should('be.visible');

    })


})