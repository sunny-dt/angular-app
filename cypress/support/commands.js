Cypress.Commands.add("login", (Username, Password) => { 
    // cy.visit("https://digitaas.io/amat/beamplatform/app/login");
    
    cy.visit("http://localhost:5000/");

    cy.get("#mat-input-1")
      .type("amat2@digitaltaas.com")
      //.type(String(Username));
    cy.get("#mat-input-2")
      .type("Amat@1234")
      //.type(String(Password));
    cy.contains("LOGIN").click();
    cy.url()
      .should("include", "/launch");
    
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
