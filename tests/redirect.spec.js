const { test, expect } = require('@playwright/test');
const RedirectPage = require('../pages/RedirectPage');

test.describe('Redirect Tests', () => {
  let redirectPage;

  test.beforeEach(async ({ page }) => {
    redirectPage = new RedirectPage(page);
    await redirectPage.navigateTo();
  });

  test('clicking redirect navigates to status codes page', async () => {
    await redirectPage.clickRedirect();
    const url = await redirectPage.getCurrentUrl();
    expect(url).toContain('/status_codes');
  });
});