describe('Handling tables', () => {

    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        cy.get(".btn-close").click();

        cy.get("#menu-customer>a").click(); // customers main memu
        cy.get("#menu-customer>ul>li:first-child").click(); //customer sub item
    })

    it.skip('check Number rows & coloums', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');
    })


    it.skip('check cell data from specific row and coloumn', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)")
            .contains("gorankrezic90@gmail.com");
    })

    it.skip('Read all rows and coloumns data in the first page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {

                cy.wrap($row).within(() => {

                    cy.get("td").each(($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
            })

    })



    it('pagination', () => {

        //find total number of pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then((e) => {
            let mytext = e.text(); //showing 1 to 10 of (1741 pages)
            totalPages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("Pages") - 1);
            cy.log("Total number of pages in a table======>" + totalPages);


        })
    })

    it('read all total pages', () => {

        let totalPages= 5;

        for(let p=1; p<=totalPages; p++){

            if(totalPages>1){
                cy.log("Active page is==="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3500);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text()); //Email
                        })
                    })
                })
            }

        }


    });


})