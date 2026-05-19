const { test, expect } = require('@playwright/test');
const ShadowDomPage = require('../pages/ShadowDomPage');

test.describe('Shadow DOM Tests', () => {
  let shadowPage;

  test.beforeEach(async ({ page }) => {
    shadowPage = new ShadowDomPage(page);
    await shadowPage.navigateTo();
  });

  test('can access shadow DOM content', async () => {
    const text = await shadowPage.getShadowContentText();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });
});