const { test, expect } = require('@playwright/test');
const JavaScriptAlertsPage = require('../pages/JavaScriptAlertsPage');

test.describe('JavaScript Alerts Tests', () => {
  let alertsPage;

  test.beforeEach(async ({ page }) => {
    alertsPage = new JavaScriptAlertsPage(page);
    await alertsPage.navigateTo();
  });

  test('can handle JS Alert', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });
    
    await alertsPage.clickJSAlert();
    expect(await alertsPage.getResultText()).toBe('You successfully clicked an alert');
  });

  test('can accept JS Confirm', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('I am a JS Confirm');
      await dialog.accept();
    });
    
    await alertsPage.clickJSConfirm();
    expect(await alertsPage.getResultText()).toBe('You clicked: Ok');
  });

  test('can dismiss JS Confirm', async ({ page }) => {
    page.on('dialog', async dialog => {
      await dialog.dismiss();
    });
    
    await alertsPage.clickJSConfirm();
    expect(await alertsPage.getResultText()).toBe('You clicked: Cancel');
  });

  test('can enter text in JS Prompt', async ({ page }) => {
    page.on('dialog', async dialog => {
      await dialog.accept('Hello World');
    });
    
    await alertsPage.clickJSPrompt();
    expect(await alertsPage.getResultText()).toBe('You entered: Hello World');
  });
});