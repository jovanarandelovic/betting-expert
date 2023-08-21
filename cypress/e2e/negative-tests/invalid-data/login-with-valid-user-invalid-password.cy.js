/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the valid user and a password that has less than 8 characters", () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  // the test fails due to a bug
  it("should not log in a user with correct username and wrongly formatted password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").username);
    loginForm.enterPassword(
      Cypress.env("invalidCredentials").wrongFormatPassword
    );
    loginForm.getLoginButtonOnLoginForm().should("be.disabled");
    loginForm
      .getInputFieldAlert()
      .should(
        "have.text",
        " Please write a password with 8 or more characters "
      );
  });

  // the test fails due to a bug
  it("should not log in a user with correct email and wrongly formatted password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").email);
    loginForm.enterPassword(
      Cypress.env("invalidCredentials").wrongFormatPassword
    );
    loginForm.getLoginButtonOnLoginForm().should("be.disabled");
    loginForm
      .getInputFieldAlert()
      .should(
        "have.text",
        " Please write a password with 8 or more characters "
      );
  });
});
