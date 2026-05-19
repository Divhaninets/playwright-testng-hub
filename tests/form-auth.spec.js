const { test, expect } = require('@playwright/test');
const FormAuthPage = require('../pages/FormAuthPage');

test.describe('Form Authentication Tests', () => {
  let formAuthPage;

  test.beforeEach(async ({ page }) => {
    formAuthPage = new FormAuthPage(page);
    await formAuthPage.navigateTo();
  });

  test('can login and logout', async () => {
    await formAuthPage.login('tomsmith', 'SuperSecretPassword!');
    let message = await formAuthPage.getFlashMessage();
    expect(message).toContain('You logged into a secure area!');
    
    await formAuthPage.logout();
    message = await formAuthPage.getFlashMessage();
    expect(message).toContain('You logged out of the secure area!');
  });
});