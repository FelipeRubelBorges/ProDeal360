export class Login {
    // get element to visit the login page
    visit() {
      cy.visit("https://www.saucedemo.com/");
      cy.get(".login_wrapper-inner").should("be.visible");
    }
  
    // get element to submit the login form
    submit(email, password) {
      cy.get('#user-name').type(email);
      cy.get('#password').type(password);
      cy.get("#login-button").click();
    }

    // get element to clear the login form
    clearAll() {
      cy.get('#user-name').clear();
      cy.get('#password').clear();
      cy.get("#login-button").click();
    }

    // get element to clear the password
    clearPassword(email) {
      cy.get('#user-name').type(email);
      cy.get('#password').clear();
      cy.get("#login-button").click();
    }

    // get element to clear the username
    clearUsername(password) {
      cy.get('#user-name').clear();
      cy.get('#password').type(password);
      cy.get("#login-button").click();
    }
  
    // get element to check if the user is logged in
    isLoggedIn() {
      cy.url().should("include", "/inventory.html");
    }
  
    // get element to check if the alert has the correct text
    alertHaveText(target) {
      cy.get("#login_button_container").should("have.text", target);
    }
  
    // get element to login
    login(email, password) {
      this.visit();
      this.submit(email, password);
      this.isLoggedIn();
    }
  }