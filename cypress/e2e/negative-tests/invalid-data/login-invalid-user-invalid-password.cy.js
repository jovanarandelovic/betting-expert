/// <reference types="cypress" />

import HomePage from "../../../pages/homePage";
import LoginFormPage from "../../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the invalid user and the invalid password", () => {
  beforeEach(() => {
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should not log in a user with inavlid username and invalid password", () => {
    loginForm.enterUsername(
      Cypress.env("invalidCredentials").wrongFormatUsername
    );
    loginForm.enterPassword(
      Cypress.env("invalidCredentials").wrongFormatPassword
    );
    loginForm.getLoginButtonOnLoginForm().should("be.disabled");
    loginForm
      .getInputFieldAlert()
      .first()
      .should(
        "have.text",
        " Please enter a username with more than two characters. "
      );
    // this part of the test fails due to a bug: expected password length is 8 characters, but the error is triggered with 2 or less characters
    loginForm
      .getInputFieldAlert()
      .eq(1)
      .should(
        "have.text",
        " Please write a password with 8 or more characters "
      );
  });
});
