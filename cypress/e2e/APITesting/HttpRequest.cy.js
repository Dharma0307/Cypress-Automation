describe("Http request", () => {

    it("GET CALL", () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .its('status')
            .should('equal', 200);

    })

    it("POST CALL", () => {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title: "Test post",
                body: "This is post call",
                userId: 1
            }
        })
            .its('status')
            .should('equal', 201);
    })

    it("Put call", () => {

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            boby: {
                title: "Test post - Updated",
                body: "This is put call",
                userId: 1,
                id: 1
            }

        })
            .its("status")
            .should('equal', 200);
    })

    it("Delete call", ()=>{

        cy.request({
            method: 'DELETE',
            url: "https://jsonplaceholder.typicode.com/posts/1",
        })
        .its('status')
        .should('equal', 200)
    })
})