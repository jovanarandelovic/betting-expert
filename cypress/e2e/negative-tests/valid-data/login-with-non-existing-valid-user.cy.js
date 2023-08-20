/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the valid user that was not registered", () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should not log in a user with incorrect username and valid password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").wrongUsername);
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    loginForm.getLoginFormAlert().should("have.text", " Invalid user ");
  });

  it("should not log in a user with incorrect email and valid password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").wrongEmail);
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    loginForm.getLoginFormAlert().should("have.text", " Invalid user ");
  });
});
