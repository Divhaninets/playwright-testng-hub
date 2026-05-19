const { test, expect } = require('@playwright/test');
const TyposPage = require('../pages/TyposPage');

test.describe('Typos Tests', () => {
  let typosPage;

  test.beforeEach(async ({ page }) => {
    typosPage = new TyposPage(page);
    await typosPage.navigateTo();
  });

  test('page contains text with possible typo', async () => {
    const text = await typosPage.getContentText();
    expect(text.length).toBeGreaterThan(0);
    expect(text).toContain('Sometimes');
  });
});