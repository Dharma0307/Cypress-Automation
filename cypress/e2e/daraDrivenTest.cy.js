describe('datadriventest', () => {

    it('sample data driven test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");


        cy.fixture("orangehrm2").then((data) => {


            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);

                cy.get("button[type='submit']").click();

                if (userdata.username == 'Admin' && userdata.password == "admin123") {

                    cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
                        .should('have.text', userdata.expected);

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); //logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();  //logout
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text', userdata.expected)
                }

            });
        })
    })
})