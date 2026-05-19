const { test, expect } = require('@playwright/test');
const InputsPage = require('../pages/InputsPage');

test.describe('Inputs Tests', () => {
  let inputsPage;

  test.beforeEach(async ({ page }) => {
    inputsPage = new InputsPage(page);
    await inputsPage.navigateTo();
  });

  test('can enter a number', async () => {
    await inputsPage.enterNumber(12345);
    expect(await inputsPage.getInputValue()).toBe('12345');
  });

  test('can enter negative number', async () => {
    await inputsPage.enterNumber(-999);
    expect(await inputsPage.getInputValue()).toBe('-999');
  });

  test('can clear input', async () => {
    await inputsPage.enterNumber(123);
    await inputsPage.clearInput();
    expect(await inputsPage.getInputValue()).toBe('');
  });
});