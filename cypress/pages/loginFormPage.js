/// <reference types = "cypress"/>

import LoginFormElements from "../elements/login.form.elements";

export default class LoginFormPage {
  constructor() {
    this.loginFormElements = new LoginFormElements();
  }

  //#region Login form getters
  getUsernameInputField() {
    return cy.get(this.loginFormElements.usernameInputFiled);
  }

  getPasswordInputField() {
    return cy.get(this.loginFormElements.passwordInputField);
  }

  getLoginButtonOnLoginForm() {
    return cy.get(this.loginFormElements.loginButtonOnLoginForm);
  }

  getLoginFormAlert() {
    return cy.get(this.loginFormElements.alert);
  }

  getInputFieldAlert() {
    return cy.get(this.loginFormElements.inputFieldAlret);
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
}
