const { test, expect } = require('@playwright/test');
exports.RegistrationPage = class RegistrationPage {

    
    constructor(page) {
        this.page = page;
        this.inputUsername = page.locator('[id="user_login"]');
        this.inputPassword = page.locator('[id="user_password"]');
        this.inputPasswordConfirmation = page.locator('[id="user_password_confirmation"]')
        this.inputName = page.locator('[id="user_firstname"]')
        this.inputLastName = page.locator('[id="user_lastname"]')
        this.inputEmail = page.locator('[id="user_mail"]')
        this.SubmitBtn = page.locator('[name="commit"]')
    }

    async randomEmailGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str + '@gmail.com';

    }
    async randomNameGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;

    }

    async randomPasswordGenerator(length=8) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;

    }

}