/*
POST https://gorest.co.in/public/v2/users  
PUT  https://gorest.co.in/public/v2/users/${userId}
DELETE   https://gorest.co.in/public/v2/users/${userId}

*/

describe("Gorest API Chaining", () => {

    const auth_token = 'Bearer c35e10e748c6f113775527bcef204e9929b4c9f4b995a8ee253eec46aed57b06'

    it("create, update, delete user in gorest API", () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'santu',
                gender: 'femal',
                email: Math.random().toString(5).substring(2) + "@gmail.com",
                status: 'active'
            },
            headers: {
                Authorization: auth_token

            }
        })
            .then((response) => {

                expect(response.status).to.eq(201);
                const userId = response.body.id;
                //update user name
                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    body: {
                        name: 'Dharma'
                    },
                    headers: {
                        Authorization: auth_token

                    }
                })
                    .then((response) => {
                        expect(response.status).to.eq(200);
                        expect(response.body.name).to.equal('Dharma')
                        //Delete the resource
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${userId}`,
                            headers: {
                                Authorization: auth_token

                            }
                        })
                            .then((response) => {
                                expect(response.status).to.eq(204);
                            })
                    })
            })


    })


})