/* eslint-disable no-undef */
describe('Login formular for the user to get api-key', function() {
  it('has a link for getting the key', () => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get('a')
      .should('have.attr', 'href')
      .should('include', 'https://newsapi.org');

    cy.get('input').type('ac3a791efaef4b87b7ab8ed0d4b6efed');
    cy.get('form')
      .submit()
      .click();
  });
});
