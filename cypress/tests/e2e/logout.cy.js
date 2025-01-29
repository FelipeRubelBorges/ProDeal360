import { Login } from "../pages/Login";
import { Checkout } from "../pages/Checkout";

describe("Logout", () => {
    const login = new Login();
    const checkout = new Checkout();

    beforeEach(() => {
        login.login(Cypress.env("user_name"), Cypress.env("user_password"));
    });

    it("should logout", () => {
        checkout.Logout();
    });
});