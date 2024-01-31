describe("fixtures", () => {

    it("FixturesDemotest", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture("orangehrm").then((data) => {


            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);

            cy.get("button[type='submit']").click();

            cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
                .should('have.text', data.expected);

        })
    })

    //Access through  hook - for multiple blocks
    let userdata;
    before(() => {

        cy.fixture("orangehrm").then((data) => {
            userdata = data;

        });
    })

    it("Fixture test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");


        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);

        cy.get("button[type='submit']").click();

        cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
            .should('have.text', userdata.expected);

    })



})