export class Cart {

    itemInCart(target, quantity) {
        cy.get('[data-test="inventory-item-name"]').should("have.text", target);
        cy.get('[data-test="item-quantity"]').should("have.text", quantity);
    }

    navigateToCheckout() {
        cy.get("#checkout").click();
        cy.url().should("include", "/checkout-step-one.html");
    }
}