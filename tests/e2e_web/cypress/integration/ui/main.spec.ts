describe('First cypress test', () => {
  it('should show Acme page', () => {
    cy.visit('/');
    cy.contains('Acme');
  });
});
