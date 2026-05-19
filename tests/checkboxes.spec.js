const { test, expect } = require('@playwright/test');
const CheckboxesPage = require('../pages/CheckboxesPage');

test.describe('Checkboxes Tests', () => {
  let checkboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.navigateTo();
  });

  test('should have 2 checkboxes', async () => {
    const count = await checkboxesPage.getCheckboxCount();
    expect(count).toBe(2);
  });

  test('checkbox 1 starts unchecked, checkbox 2 starts checked', async () => {
    expect(await checkboxesPage.isCheckboxChecked(0)).toBe(false);
    expect(await checkboxesPage.isCheckboxChecked(1)).toBe(true);
  });

  test('can check and uncheck checkbox 1', async () => {
    await checkboxesPage.checkCheckbox(0);
    expect(await checkboxesPage.isCheckboxChecked(0)).toBe(true);
    
    await checkboxesPage.uncheckCheckbox(0);
    expect(await checkboxesPage.isCheckboxChecked(0)).toBe(false);
  });

  test('can uncheck and check checkbox 2', async () => {
    await checkboxesPage.uncheckCheckbox(1);
    expect(await checkboxesPage.isCheckboxChecked(1)).toBe(false);
    
    await checkboxesPage.checkCheckbox(1);
    expect(await checkboxesPage.isCheckboxChecked(1)).toBe(true);
  });
});