describe('Registration tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/', { timeout: 20000 }); // Увеличаване на тайм-аут за посещението на страницата
  });

  it('enter submit without valid user name', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="fullname-error"]', { timeout: 10000 }).should('be.visible'); // Увеличен тайм-аут за error съобщението
  });

  it('shows error when email is invalid', () => {
    cy.get('[data-test-id="email"]').type('invalid_email');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="email-error"]', { timeout: 10000 }).should('be.visible'); // Увеличен тайм-аут за error съобщението
  });

  it('shows error when password is too short', () => {
    cy.get('[data-test-id="password"]').type('123');
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="password-error"]', { timeout: 10000 })
      .should('exist') 
      .and('be.visible'); 
  });

  it('shows error when gender is not selected', () => {
    cy.get('[data-test-id="submit"]').click();
    cy.get('[data-test-id="gender-error"]', { timeout: 10000 }).should('be.visible'); // Увеличен тайм-аут за error съобщението
  });
});
