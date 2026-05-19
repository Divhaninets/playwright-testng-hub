const { test, expect } = require('@playwright/test');
const DigestAuthPage = require('../pages/DigestAuthPage');

test.describe('Digest Auth Tests', () => {
  let authPage;

  test.beforeEach(async ({ page }) => {
    authPage = new DigestAuthPage(page);
  });

  test('can authenticate with valid credentials', async () => {
    await authPage.navigateToWithAuth('admin', 'admin');
    const message = await authPage.getSuccessMessage();
    expect(message).toContain('Congratulations');
  });
});