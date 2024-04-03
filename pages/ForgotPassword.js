const { By } = require("selenium-webdriver");
const { expect } = require("chai");
const { locators, data } = require("../resources/locators");


class ForgotPassword {

  constructor(driver) {
    this.driver = driver;
  }

  // class methods 

  async goto() {
    await this.driver.get(data.baseUrl + data.forgotPasswordUrl);
  }
}

module.exports = ForgotPassword;