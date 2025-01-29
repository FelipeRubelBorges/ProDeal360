export class Login {
    visit() {
      cy.visit("https://www.saucedemo.com/");
      cy.get(".login_wrapper-inner").should("be.visible");
    }
  
    submit(email, password) {
      cy.get('#user-name').type(email);
      cy.get('#password').type(password);
      cy.get("#login-button").click();
    }

    clearAll() {
      cy.get('#user-name').clear();
      cy.get('#password').clear();
      cy.get("#login-button").click();
    }

    clearPassword(email) {
      cy.get('#user-name').type(email);
      cy.get('#password').clear();
      cy.get("#login-button").click();
    }

    clearUsername(password) {
      cy.get('#user-name').clear();
      cy.get('#password').type(password);
      cy.get("#login-button").click();
    }
  
    isLoggedIn() {
      cy.url().should("include", "/inventory.html");
    }
  
    alertHaveText(target) {
      cy.get("#login_button_container").should("have.text", target);
    }
  
    login(email, password) {
      this.visit();
      this.submit(email, password);
      this.isLoggedIn();
    }
  }