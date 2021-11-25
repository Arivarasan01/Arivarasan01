describe('My First Cypress Test', function() {
    it('Visits the google Page', function() {
    //Visit the Demo QA Website
    cy.visit("https://google.com/");
    //cy.get("(.gb_f)[1]").click();
    
})
it('Click the gmail', function() {
    //Visit the Demo QA Website
    cy.contains('Gmail').click();
})

it('Click the sign in button', function() {
    //Visit the Demo QA Website
    cy.contains('Sign in').click();
})

})