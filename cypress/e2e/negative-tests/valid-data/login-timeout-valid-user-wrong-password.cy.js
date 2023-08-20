/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

// This test has to be run in intervals of 10 minutes

describe("Log in a user to the plaform using the valid user and incorrect password", () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should give a warning that the user is blocked after 9 tries of logging in with a correct username and wrong password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").usernameBlocked);
    loginForm.enterPassword(Cypress.env("validCredentials").wrongPassword);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    for (let i = 0; i < 8; i++) {
      loginForm.clickLogin();
      loginForm.getLoginFormAlert().should("have.text", " Invalid password ");
    }
    loginForm.clickLogin();
    loginForm
      .getLoginFormAlert()
      .should("contain.text", "User is blocked until");
  });

  it("should give a warning that the user is blocked after 9 tries of logging in with a correct email and wrong password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").email);
    loginForm.enterPassword(Cypress.env("validCredentials").wrongPassword);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    for (let i = 0; i < 8; i++) {
      loginForm.clickLogin();
      loginForm.getLoginFormAlert().should("have.text", " Invalid password ");
    }
    loginForm.clickLogin();
    loginForm
      .getLoginFormAlert()
      .should("contain.text", "User is blocked until");
  });
});
