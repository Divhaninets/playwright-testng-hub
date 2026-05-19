const { test, expect } = require('@playwright/test');
const DynamicLoadingPage = require('../pages/DynamicLoadingPage');

test.describe('Dynamic Loading Tests', () => {
  let loadingPage;

  test.beforeEach(async ({ page }) => {
    loadingPage = new DynamicLoadingPage(page);
  });

  test('Example 1 - element hidden then revealed', async () => {
    await loadingPage.navigateToExample1();
    await loadingPage.clickStart();
    await loadingPage.waitForLoadingToDisappear();
    
    expect(await loadingPage.isFinishTextVisible()).toBe(true);
    expect(await loadingPage.getFinishText()).toBe('Hello World!');
  });

  test('Example 2 - element added to DOM', async () => {
    await loadingPage.navigateToExample2();
    await loadingPage.clickStart();
    await loadingPage.waitForLoadingToDisappear();
    
    expect(await loadingPage.isFinishTextVisible()).toBe(true);
    expect(await loadingPage.getFinishText()).toBe('Hello World!');
  });
});