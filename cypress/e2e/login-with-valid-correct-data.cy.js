/// <reference types="cypress" />

import HomePage from "../pages/homePage";
const homePage = new HomePage();

describe("Log in a user to the plaform using the valid correct credentials", () => {
  beforeEach(() => {
    cy.visit("");
    // Accept cookies
    homePage.acceptCookies();
    // Open login form
    homePage.openLoginFormFromNavBar();
  });

  it("should log in a user with correct username and password", () => {
    homePage.enterUsername(Cypress.env("validCredentials").username);
    homePage.enterPassword(Cypress.env("validCredentials").password);
    homePage.getLoginButtonOnLoginForm().should("be.enabled");
    homePage.clickLogin();
    homePage.getUserAvatar().should("be.visible");
    homePage
      .getNavigationBar()
      .should("contain", Cypress.env("validCredentials").username);
  });

  it("should log in a user with correct email and password", () => {
    homePage.enterUsername(Cypress.env("validCredentials").email);
    homePage.enterPassword(Cypress.env("validCredentials").password);
    homePage.getLoginButtonOnLoginForm().should("be.enabled");
    homePage.clickLogin();
    homePage.getUserAvatar().should("be.visible");
    homePage
      .getNavigationBar()
      .should("contain", Cypress.env("validCredentials").username);
  });
});
