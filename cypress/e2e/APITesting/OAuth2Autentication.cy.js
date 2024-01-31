//Pre-requisite: generate Auth code
//https://github.com/login/oauth/authorize/{client_id}
//EX:   https://github.com/login/oauth/authorize/client_id=b10beeab54ede85ef9f0

/*1)Get the OAuth2 access token
post: https://github.com/login/oauth/access_token?
Query param:
     client_id
     client_secret
     code   

2) Send GET requesr by using access token
https://api.github.com/user/repos
Auth: accessToken


*/
describe("OAuth2", () => {

    let accessToken = ''

    it("get Oath2 access token", () => {


        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id: 'b10beeab54ede85ef9f0',
                client_secret: '5650af293989a18860300a59789b4c15c7c141f5',
                code: '681c8d56fcddd141f784'
            }
        })
            .then((response) => {
                //access_token=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&scope=&token_type=bearer

                const params = response.body.split('&');
                accessToken = params[0].split("=")[1];
                cy.log("Generated token is:"+accessToken);
            })
    })

    it("OAuth2 request", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Autherization:'Bearer ' + accessToken
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body[0].id).equal(747538712);
            })
    })
})