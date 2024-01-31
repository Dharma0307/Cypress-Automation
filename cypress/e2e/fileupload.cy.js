import 'cypress-file-upload';

describe('file uploading', ()=>{

    it('single upload',()=>{

        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('cypress.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })

    it('file upload - rename', ()=>{

        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'cypress.pdf', fileName:'cypressnotes.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })

    it('file upload- drag and drop', ()=>{

        cy.visit("http://the-internet.herokuapp.com/upload");

        cy.get('#drag-drop-upload').attachFile("cypress.pdf", {subjectType:'drag-n-drop'});

        cy.wait(5000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('cypress.pdf');

    })

    it('multiple files upload', ()=>{

        cy.visit('http://davidwalsh.name/demo/multiple-file-upload.php');

        cy.get('#filesToUpload').attachFile(["cypress.pdf","test2.pdf"]);

        cy.wait(5000);

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')

    })

    it.only('file upload-shadow dom',()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("test2.pdf");

        cy.wait(3500);

        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test2.pdf');

    })
})