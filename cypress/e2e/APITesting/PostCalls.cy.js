describe('API Testing', () => {

    it("Approach1 - Hard coded json object", () => {

        const requestBody = {
            tourist_name: "Yogesh",
            tourist_email: "yogesh17@gmail.com",
            tourist_location: "Pune"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq("Yogesh")
                expect(response.body.tourist_location).to.eq("Pune")
            })

    })

    it("Approach2 - Dynamically generating  json object", () => {

        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: "Pune"
        }

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
            })

    })

    it.only("Approach3 - using fixtures", () => {

       cy.fixture('tourist').then((data)=>{

        const requestBody = data;
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                expect(response.body).has.property('tourist_name',requestBody.tourist_name)
                expect(response.body).to.have.property('tourist_location',requestBody.tourist_location)
            })
       })

    })
})