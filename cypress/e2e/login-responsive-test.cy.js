/// <reference types="cypress" />

import HomePage from "../pages/homePage";
const homePage = new HomePage();

describe(
  "Log in a user to the plaform using the valid correct credentials when in resposnive",
  {
    viewportHeight: 1920,
    viewportWidth: 991,
  },
  () => {
    beforeEach(() => {
      cy.visit("");
      // Accept cookies
      homePage.acceptCookies();
      // Open login form
      homePage.clickHamburgerMenu();
      homePage.openLoginFormFromHamburgerMenu();
    });

    it("should log in a user with correct email and password", () => {
      homePage.enterUsername(Cypress.env("validCredentials").email);
      homePage.enterPassword(Cypress.env("validCredentials").password);
      homePage.getLoginButtonOnLoginForm().should("be.enabled");
      homePage.clickLogin();
      homePage.getHamburgerMenu().should("be.visible");
      homePage.clickHamburgerMenu();
      homePage.getUserAvatarInHamburgerMenu().should("be.visible");
      homePage
        .getNavigationBar()
        .should("contain", Cypress.env("validCredentials").username);
    });
  }
);
