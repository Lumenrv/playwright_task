const { test, expect } = require('@playwright/test');
exports.LoginPage = class LoginPage {

    
    constructor(page) {
        this.page = page;
        this.inputUsername = page.locator('[name="username"]');
        this.inputPassword = page.locator('[name="password"]');
        this.forgotPasswordBtn = page.locator('[href="/account/lost_password"]')
        this.loginBtn = page.locator('[name="login"]')
        this.errorPopup = page.locator('[id="flash_error"]')
    }
}