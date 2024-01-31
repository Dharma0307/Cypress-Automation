// Install ajv library
//  npm install ajv => using command prompt/terminal

const Ajv = require('ajv')
const avj = new Ajv()

describe("schema validation", () => {

    it("schema validation against response", () => {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
            .then((response) => {

              const schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "object",
                "properties": {
                  "useId": {
                    "type": "number"
                  },
                  "id": {
                    "type": "number"
                  },
                  "title": {
                    "type": "string"
                  },
                  "completed": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "useId",
                  "id",
                  "title",
                  "completed"
                ]
              }

                const validate= avj.compile(schema);
                const isvalid=validate(response.body);
                expect(isvalid).to.be.false;

            })
    })
})