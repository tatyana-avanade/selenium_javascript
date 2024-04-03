// locators.js
// ===========

const locators = {
    username: "username",
    password: "password",
    email_field: "#email",
    submitButton: 'button[type="submit"]',
    errorMessage: "#flash.error",
    successMessage:"#flash.success",
    loginPageHeading: "h2",
    secureAreaPageHeading: "h2",
    logoutButton: ".button.secondary.radius",
  };
  
  const data = {

    pageTitle: "The Internet",
    username: "tomsmith",
    password: "SuperSecretPassword!",
    loginPageHeading: "Login Page",
    secureAreaPageHeading: "Secure Area",
    errorMessage: "Your username is invalid!",
    successMessage: "You logged into a secure area!",
  };

  const url = {
    baseUrl: "https://the-internet.herokuapp.com/",
    loginPageUrl: 'login',
    forgotPasswordUrl: 'forgot_password',
    optionsPageUrl: '',
    selectPageUrl: ''
  };
  
  module.exports = { locators, data, url };