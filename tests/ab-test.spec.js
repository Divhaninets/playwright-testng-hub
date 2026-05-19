const { test, expect } = require('@playwright/test');
const AbTestPage = require('../pages/AbTestPage');

test.describe('AB Test Tests', () => {
  let abPage;

  test.beforeEach(async ({ page }) => {
    abPage = new AbTestPage(page);
    await abPage.navigateTo();
  });

  test('page loads with AB test heading', async () => {
    const heading = await abPage.getHeadingText();
    const isValidHeading = heading.includes('A/B Test') || heading.includes('No A/B Test');
    expect(isValidHeading).toBe(true);
  });
});