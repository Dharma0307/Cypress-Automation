class Login
{
    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }

    verfyLogin(){
        cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']")
        .should('have.text', "Dashboard");

    }
}

export default Login;