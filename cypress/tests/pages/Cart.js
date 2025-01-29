export class Cart {

    // get element to check if the item is in the cart
    itemInCart(target, quantity) {
        cy.get('[data-test="inventory-item-name"]').should("have.text", target);
        cy.get('[data-test="item-quantity"]').should("have.text", quantity);
    }

    // get element to navigate to the checkout page
    navigateToCheckout() {
        cy.get("#checkout").click();
        cy.url().should("include", "/checkout-step-one.html");
    }
}