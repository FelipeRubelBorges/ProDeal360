export class Inventory {

    // get element to add an item to the cart
    addToCart(target) {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get('[data-test="shopping-cart-badge"]').should("have.text", target);
    }

    // get element to remove an item from the cart
    removeFromCart() {
        cy.get("#remove-sauce-labs-bike-light").click();
    }

    // get element to navigate to the cart page
    navigateToCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should("include", "/cart.html");
    }

    // get element to navigate to the logout page
    navigateToLogout() {
        cy.get("#logout_sidebar_link").click();
        cy.url().should("include", "/");
    }

}