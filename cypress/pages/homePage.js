/// <reference types = "cypress"/>

import HomePageElements from "../elements/home.page.elements";

export default class HomePage {
  constructor() {
    this.homePageElements = new HomePageElements();
  }
  //#region General
  getCookieConsent() {
    return cy.get(this.homePageElements.cookieConsentButton);
  }
  //#endregion

  //#region Navigation bar
  getNavigationBar() {
    return cy.get(this.homePageElements.navBar);
  }

  getUserAvatarOnNavBar() {
    return cy.get(this.homePageElements.userAvatarSmall);
  }

  getUserAvatarInHamburgerMenu() {
    return cy.get(this.homePageElements.userAvatarLarge);
  }

  getLoginButtonOnNavBar() {
    return cy.get(this.homePageElements.logInButton).first();
  }

  getHamburgerMenu() {
    return cy.get(this.homePageElements.hamburgerMenu);
  }

  getLoginButtonInResponsive() {
    return cy.get(this.homePageElements.logInButton).eq(1);
  }
  //#endregion

  //#region Login form
  getUsernameInputField() {
    return cy.get(this.homePageElements.usernameInputFiled);
  }

  getPasswordInputField() {
    return cy.get(this.homePageElements.passwordInputField);
  }

  getLoginButtonOnLoginForm() {
    return cy.get(this.homePageElements.loginButtonOnLoginForm);
  }
  //#endregion

  //#region Actions
  acceptCookies() {
    this.getCookieConsent().click();
  }

  openLoginFormFromNavBar() {
    this.getLoginButtonOnNavBar().click();
  }

  enterUsername(username) {
    this.getUsernameInputField().type(username);
  }
  enterPassword(password) {
    this.getPasswordInputField().type(password);
  }

  clickLogin() {
    this.getLoginButtonOnLoginForm().click();
  }
  //#endregion

  //#region Resposnive testing

  clickHamburgerMenu() {
    this.getHamburgerMenu().click();
  }

  openLoginFormFromHamburgerMenu() {
    this.getLoginButtonInResponsive().click();
  }

  //#endregion
}
