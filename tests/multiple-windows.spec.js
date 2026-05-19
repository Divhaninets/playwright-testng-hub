const { test, expect } = require('@playwright/test');
const MultipleWindowsPage = require('../pages/MultipleWindowsPage');

test.describe('Multiple Windows Tests', () => {
  let windowsPage;

  test.beforeEach(async ({ page }) => {
    windowsPage = new MultipleWindowsPage(page);
    await windowsPage.navigateTo();
  });

  test('can open new window and verify text', async ({ page, context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
windowsPage.clickLink()
    ]);
    
    await newPage.waitForLoadState();
    const heading = await newPage.locator('h3').textContent();
    expect(heading).toBe('New Window');
    
    await newPage.close();
  });
});