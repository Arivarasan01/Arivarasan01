describe('calibraint home page', function() {
    it('Visits the calibraint home page', function() {
    cy.visit("https://www.calibraint.com/");
    cy.contains('Explore Our Blockchain Solutions').click();
    cy.contains('CONTACT').click();
    cy.contains('[name=name]').type('arivu');
})
})