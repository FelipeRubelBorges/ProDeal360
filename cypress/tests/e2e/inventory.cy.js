import { Inventory } from "../pages/Inventory";
import { Login } from "../pages/Login";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";

describe("Inventory", () => {
    const inventory = new Inventory();
    const login = new Login();
    const cart = new Cart();
    const checkout = new Checkout();

    
    // the login is done before each test
    beforeEach(() => {
        login.login(Cypress.env("user_name"), Cypress.env("user_password"));
    });

    // the first test is to add an item to the cart
    it("should add an item to the cart", () => {
        inventory.addToCart("1");
    });

    // the second test is to check if the item is in the cart
    it("cart should have the first item", () => {
        inventory.addToCart("1");
        inventory.navigateToCart();
        cart.itemInCart("Sauce Labs Backpack", "1");
    });

    // the third test is to fill the checkout form
    it("should fill the checkout form", () => {
        inventory.addToCart("1");
        inventory.navigateToCart();
        cart.itemInCart("Sauce Labs Backpack", "1");
        cart.navigateToCheckout();
        checkout.checkoutForm("Test", "User", "12345");
        checkout.SubmitPurchase("Thank you for your order!");
        checkout.Logout();
    });

});