export class Inventory {

    addToCart(target) {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-badge"]').should("have.text", target);
    }

    removeFromCart() {
        cy.get("#remove-sauce-labs-bike-light").click();
    }

    navigateToCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should("include", "/cart.html");
    }

    navigateToLogout() {
        cy.get("#logout_sidebar_link").click();
        cy.url().should("include", "/");
    }

}