import { Login } from "../pages/Login";

// the login tests
describe("Login", () => {
    const login = new Login();

    // the first test is to login with valid credentials
    it("should login with valid credentials", () => {
        login.login(Cypress.env("user_name"), Cypress.env("user_password"));
    });

    // the second test is to login with invalid credentials
    it("should not login with invalid credentials", () => {
        login.visit();
        login.submit("invalid_user", "invalid_password");
        login.alertHaveText("Epic sadface: Username and password do not match any user in this service");
    });

    // the third test is to login with empty credentials
    it("should not login with empty credentials", () => {
        login.visit();
        login.clearAll();
        login.alertHaveText("Epic sadface: Username is required");
    });

    // the fourth test is to login with empty password
    it("should not login with empty password", () => {
        login.visit();
        login.clearPassword("standard_user");
        login.alertHaveText("Epic sadface: Password is required");
    });

    // the fifth test is to login with empty username
    it("should not login with empty username", () => {
        login.visit();
        login.clearUsername("secret_sauce");
        login.alertHaveText("Epic sadface: Username is required");
    });
});