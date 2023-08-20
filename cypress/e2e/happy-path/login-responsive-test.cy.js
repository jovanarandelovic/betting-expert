/// <reference types="cypress" />

import HomePage from "../../pages/homePage";
import LoginFormPage from "../../pages/loginFormPage";
const homePage = new HomePage();
const loginForm = new LoginFormPage();

describe(
  "Log in a user to the plaform using the valid correct credentials when in responsive",
  {
    viewportHeight: 1920,
    viewportWidth: 991,
  },
  () => {
    before(() => {
      // Visit the homepage
      cy.visit("");
      // Accept cookies
      homePage.acceptCookies();
      // Open login form
      homePage.clickHamburgerMenu();
      homePage.openLoginFormFromHamburgerMenu();
    });

    it("should log in a user with correct email and password", () => {
      loginForm.enterUsername(Cypress.env("validCredentials").email);
      loginForm.enterPassword(Cypress.env("validCredentials").password);
      loginForm.getLoginButtonOnLoginForm().should("be.enabled");
      loginForm.clickLogin();
      homePage.getHamburgerMenu().should("be.visible");
      homePage.clickHamburgerMenu();
      homePage.getUserAvatarInHamburgerMenu().should("be.visible");
      homePage
        .getNavigationBar()
        .should("contain", Cypress.env("validCredentials").username);
    });
  }
);
