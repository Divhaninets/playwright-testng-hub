const { test, expect } = require('@playwright/test');
const KeyPressesPage = require('../pages/KeyPressesPage');

test.describe('Key Presses Tests', () => {
  let keyPage;

  test.beforeEach(async ({ page }) => {
    keyPage = new KeyPressesPage(page);
    await keyPage.navigateTo();
  });

test.skip('can detect Enter key', async () => {
  await keyPage.pressKey('Enter');
  expect(await keyPage.getResultText()).toBe('You entered: ENTER');
});

  test('can detect Escape key', async () => {
    await keyPage.pressKey('Escape');
    expect(await keyPage.getResultText()).toBe('You entered: ESCAPE');
  });

  test('can detect letter key', async () => {
    await keyPage.pressKey('A');
    expect(await keyPage.getResultText()).toBe('You entered: A');
  });
});