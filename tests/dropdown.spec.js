const { test, expect } = require('@playwright/test');
const DropdownPage = require('../pages/DropdownPage');

test.describe('Dropdown Tests', () => {
  let dropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.navigateTo();
  });

  test('can select Option 1', async () => {
    await dropdownPage.selectOption('1');
    expect(await dropdownPage.getSelectedValue()).toBe('1');
    expect(await dropdownPage.getSelectedText()).toBe('Option 1');
  });

  test('can select Option 2', async () => {
    await dropdownPage.selectOption('2');
    expect(await dropdownPage.getSelectedValue()).toBe('2');
    expect(await dropdownPage.getSelectedText()).toBe('Option 2');
  });
});