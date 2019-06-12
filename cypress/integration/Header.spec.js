describe("Header formular with searchbar", () => {
  it("shows icon and searchbar", () => {
    cy.wait(2000);
    cy.visit("/home");

    cy.get("input")
      .type("trump")
      .click();
  });
});

/*
should("have.attr", "href");
      cy.get("input").type("ac3a791efaef4b87b7ab8ed0d4b6efed");
      cy.get("form")
        .submit()
        .click();
*/
