const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./LoginPage.js');
const { RegistrationPage} = require('./RegistrationPage.js')

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.redmine.org/');
});
// // credetials
// TestTest123456
// uq.L7N@ZV49nmhX
//pixafa8972@safe-cart.com

test.describe('New set of tests', () => {
    test('Login with invalid password', async ({ page }) => {
      const Login = new LoginPage(page);
        await page.locator('[href="/login"]').click()
        await Login.inputUsername.click() 
        await Login.inputUsername.fill('TestTest123456')
        await Login.inputPassword.click()
        await Login.inputPassword.fill('1234qwerty')
        await Login.loginBtn.click()
        await expect(Login.errorPopup).toHaveText('Invalid user or password')
    
    });

    test('Login with invalid email', async ({ page }) => {
      const Login = new LoginPage(page);
        await page.locator('[href="/login"]').click()
        await Login.inputUsername.click() 
        await Login.inputUsername.fill('TestTestWrong1234')
        await Login.inputPassword.click()
        await Login.inputPassword.fill('uq.L7N@ZV49nmhX')
        await Login.loginBtn.click()
        await expect(Login.errorPopup).toHaveText('Invalid user or password')
    
    });

    test('Login with valid credentials', async ({ page }) => {
      const Login = new LoginPage(page);
        await page.locator('[href="/login"]').click()
        await Login.inputUsername.click() 
        await Login.inputUsername.fill('TestTest123456')
        await Login.inputPassword.click()
        await Login.inputPassword.fill('uq.L7N@ZV49nmhX')
        await Login.loginBtn.click()
        expect( await page.title('Overview - Redmine'))
    
      })  

      test('Rgistration with valid credentials', async ({ page }) => {
        const Registration = new RegistrationPage(page);
          await page.locator('[href="/account/register"]').click()
          await Registration.inputUsername.fill(await Registration.randomNameGenerator())
          await Registration.inputPassword.fill('TheBest000Password')
          await Registration.inputPasswordConfirmation.fill('TheBest000Password')
          await Registration.inputName.fill(await Registration.randomNameGenerator())
          await Registration.inputLastName.fill(await Registration.randomNameGenerator())
          await Registration.inputEmail.fill(await Registration.randomEmailGenerator())
          await Registration.SubmitBtn.click()
          const popUp =  page.locator('[class="flash notice"]')
          await expect(popUp).toContainText('Account was successfully created')

        })  

      test('Forget password test', async ({ page }) => {
        const Login = new LoginPage(page);
          await page.locator('[href="/login"]').click()
          await Login.forgotPasswordBtn.click()
          await page.locator('[id="mail"]').fill('pixafa8972@safe-cart.com')
          await page.locator('[name="commit"]').click();
          const popUp =  page.locator('[class="flash notice"]')
          await expect(popUp).toHaveText('An email with instructions to choose a new password has been sent to you.')
        })  
})  
