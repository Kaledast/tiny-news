import { Input } from "semantic-ui-react";

beforeEach(function() {
  cy.window().then(window =>
    window.localStorage.setItem("apiKey", "ac3a791efaef4b87b7ab8ed0d4b6efed")
  );
  cy.window().then(window => window.localStorage.setItem("validAuth", true));
});

describe("Header formular with searchbar", () => {
  it("shows icon and searchbar", () => {
    cy.window().then(window =>
      window.localStorage.setItem("isAuthenticated", true)
    );
    cy.visit("/");

    cy.get("[data-cy=headerIcon]").should("have.text", "Tiny News");
    cy.get("input").type("trump");
    cy.get("button").click();
  });
});
