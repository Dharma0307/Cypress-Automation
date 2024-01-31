describe('alert', () =>{

    it('alert example', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        cy.get("#result").should('have.text','You successfully clicked an alert')

    })


    //2) Javascript confirmation alert

    it.skip(' confirm alert example', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
    
        cy.get("#result").should('have.text','You clicked: Ok')

    })

    it.skip(' confirm alert example using cancel button', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=> false); // cypress close alert window using cancel button
    
        cy.get("#result").should('have.text','You clicked: Cancel')

    })

    //3) javascriprt promt alert

    it.skip(' confirm prompt alert example -> ok button', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome to cypress');
        })

        cy.get("button[onclick='jsPrompt()']").click()
    
        cy.get("#result").should('have.text','You entered: welcome to cypress')

    })

    it.skip(' confirm prompt alert example -> cancel button', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('');
            
        })

        cy.get("button[onclick='jsPrompt()']").click()

         // cypress close alert window using cancel button
         cy.on('window:prompt', ()=> false);
    
        cy.get("#result").should('have.text','You entered: null')

    })

})