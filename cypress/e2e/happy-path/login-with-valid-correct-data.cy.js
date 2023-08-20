/// <reference types="cypress" />

import HomePage from "../../pages/homePage";
import LoginFormPage from "../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe("Log in a user to the plaform using the valid correct credentials", () => {
  beforeEach(() => {
    // Visit the homepage
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should log in a user with correct username and password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").username);
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    homePage.getUserAvatarOnNavBar().should("be.visible");
    homePage
      .getNavigationBar()
      .should("contain", Cypress.env("validCredentials").username);
  });

  it("should log in a user with correct email and password", () => {
    loginForm.enterUsername(Cypress.env("validCredentials").email);
    loginForm.enterPassword(Cypress.env("validCredentials").password);
    loginForm.getLoginButtonOnLoginForm().should("be.enabled");
    loginForm.clickLogin();
    homePage.getUserAvatarOnNavBar().should("be.visible");
    homePage
      .getNavigationBar()
      .should("contain", Cypress.env("validCredentials").username);
  });
});
