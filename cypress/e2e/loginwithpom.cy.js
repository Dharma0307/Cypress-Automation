import Login from "../PageObjects/LoginPage2.js";

describe('pop', () => {

    // using page object class
    it('Login test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        const ln = new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verfyLogin();
    });


    // using page object class with fixtures
    it.only('Login test', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture("orangehrm").then((data) => {
            const ln = new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verfyLogin();

        })
    })
})