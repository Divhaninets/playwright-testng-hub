const { test, expect } = require('@playwright/test');
const FloatingMenuPage = require('../pages/FloatingMenuPage');

test.describe('Floating Menu Tests', () => {
  let menuPage;

  test.beforeEach(async ({ page }) => {
    menuPage = new FloatingMenuPage(page);
    await menuPage.navigateTo();
  });

  test('menu is visible at top of page', async () => {
    expect(await menuPage.isMenuVisible()).toBe(true);
  });

  test('menu stays visible after scrolling', async () => {
    await menuPage.scrollToBottom();
    expect(await menuPage.isMenuVisible()).toBe(true);
  });

  test('can click home link', async () => {
    await menuPage.clickHome();
    expect(await menuPage.isMenuVisible()).toBe(true);
  });
});