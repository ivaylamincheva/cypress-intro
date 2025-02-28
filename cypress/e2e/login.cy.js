describe('Login tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/login.html'); 
    });
  
    it('shows error when username is missing', () => {
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-username-error"]').should('be.visible');
    });
  
    it('shows error when password is missing', () => {
      cy.get('[data-test-id="login-username"]').type('testuser');
      cy.get('[data-test-id="login-submit"]').click();
      cy.get('[data-test-id="login-password-error"]').should('be.visible');
    });
  
    it('logs in with valid credentials', () => {
      cy.get('[data-test-id="login-username"]').type('testuser');
      cy.get('[data-test-id="login-password"]').type('password123');
      cy.get('[data-test-id="login-submit"]').click();
    });
  });
  