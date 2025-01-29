export class Checkout {

    checkoutForm(firstName, lastName, postalCode) {
        cy.get(".checkout_info").should("be.visible");
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#postal-code").type(postalCode);
        cy.get("#continue").click();

    }

    SubmitPurchase(target) {
        cy.url().should("include", "/checkout-step-two.html");
        cy.get("#finish").click();
        cy.url().should("include", "/checkout-complete.html");
        cy.get('[data-test="complete-header"]').should("have.text", target);
    }

    Logout() {
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
        cy.url().should("include", "/");
        cy.get(".login_wrapper-inner").should("be.visible");
    }
}