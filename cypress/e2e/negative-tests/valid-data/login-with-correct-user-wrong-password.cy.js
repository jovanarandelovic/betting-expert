/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the valid user and incorrect password", () => {
  beforeEach(() => {
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should not log in a user with correct username and incorrect password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").username);
    loginForm.enterPassword(Cypress.env("validCredentials").wrongPassword);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    loginForm.getLoginFormAlert().should("have.text", " Invalid password ");
  });

  it("should not log in a user with correct email and incorrect password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").email);
    loginForm.enterPassword(Cypress.env("validCredentials").wrongPassword);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    loginForm.getLoginFormAlert().should("have.text", " Invalid password ");
  });
});
