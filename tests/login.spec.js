const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
  });

  test('successful login with valid credentials', async () => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.successMessage).toBeVisible();
    const message = await loginPage.getSuccessMessage();
    expect(message).toContain('You logged into a secure area!');
  });

  test('unsuccessful login with invalid username', async () => {
    await loginPage.login('invaliduser', 'SuperSecretPassword!');
    await expect(loginPage.errorMessage).toBeVisible();
    const message = await loginPage.getErrorMessage();
    expect(message).toContain('Your username is invalid!');
  });

  test('unsuccessful login with invalid password', async () => {
    await loginPage.login('tomsmith', 'wrongpassword');
    await expect(loginPage.errorMessage).toBeVisible();
    const message = await loginPage.getErrorMessage();
    expect(message).toContain('Your password is invalid!');
  });
});