import { Login } from "../pages/Login";
import { Checkout } from "../pages/Checkout";

// the logout tests
describe("Logout", () => {
    const login = new Login();
    const checkout = new Checkout();

    // the login is done before each test
    beforeEach(() => {
        login.login(Cypress.env("user_name"), Cypress.env("user_password"));
    });

    // the first test is to logout
    it("should logout", () => {
        checkout.Logout();
    });
});