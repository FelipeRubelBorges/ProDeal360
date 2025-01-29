import { Login } from "../pages/Login";

describe("Login", () => {
    const login = new Login();

  it("should login with valid credentials", () => {
    login.login(Cypress.env("user_name"), Cypress.env("user_password"));
   });

  it("should not login with invalid credentials", () => {
    login.visit();
    login.submit("invalid_user", "invalid_password");
    login.alertHaveText("Epic sadface: Username and password do not match any user in this service");
  });

  it("should not login with empty credentials", () => {
    login.visit();
    login.clearAll();
    login.alertHaveText("Epic sadface: Username is required");
  });

  it("should not login with empty password", () => {
    login.visit();
    login.clearPassword("standard_user");
    login.alertHaveText("Epic sadface: Password is required");
  });

  it("should not login with empty username", () => {
    login.visit();
    login.clearUsername("secret_sauce");
    login.alertHaveText("Epic sadface: Username is required");
  });
});