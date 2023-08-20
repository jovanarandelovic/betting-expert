/// <reference types = "cypress"/>

import HomePageElements from "../elements/home.page.elements";

export default class LoginFormPage {
  constructor() {
    this.homePageElements = new HomePageElements();
  }

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

  getLoginFormAlert() {
    return cy.get(this.homePageElements.alert);
  }

  getInputFieldAlert() {
    return cy.get(this.homePageElements.inputFieldAlret);
  }
  //#endregion

  //#region Actions

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

  //#endregion
}
