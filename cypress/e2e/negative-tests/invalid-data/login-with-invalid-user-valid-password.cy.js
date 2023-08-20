/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the invalid user and a valid password", () => {
  beforeEach(() => {
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should not log in a user with inavlid username and valid password", () => {
    loginForm.enterUsername(
      Cypress.env("invalidCredentials").wrongFormatUsername
    );
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.disabled");
    loginForm
      .getInputFieldAlert()
      .should(
        "have.text",
        " Please enter a username with more than two characters. "
      );
  });

  // there is no validation for the wrongly formatted email due to no limitations for the username format
  it.skip("should not log in a user with inccorrect email and valid password", () => {
    loginForm.enterUsername(Cypress.env("invalidCredentials").wrongFormatEmail);
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.disabled");
    loginForm.getInputFieldAlert().should("have.text", "  ");
  });
});
