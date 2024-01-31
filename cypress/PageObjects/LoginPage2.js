class Login
{
    txtUserName = "input[placeholder='Username']";
    txtPasswprd = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    lblmsg = "a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']"


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPasswprd).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verfyLogin(){
        cy.get(this.lblmsg)
        .should('have.text', "Dashboard");

    }
}

export default Login;