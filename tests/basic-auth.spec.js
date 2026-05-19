const { test, expect } = require('@playwright/test');
const BasicAuthPage = require('../pages/BasicAuthPage');

test.describe('Basic Auth Tests', () => {
  let authPage;

  test.beforeEach(async ({ page }) => {
    authPage = new BasicAuthPage(page);
  });

  test('can authenticate with valid credentials', async () => {
    await authPage.navigateToWithAuth('admin', 'admin');
    const message = await authPage.getSuccessMessage();
    expect(message).toContain('Congratulations');
  });
});