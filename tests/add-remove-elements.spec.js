const { test, expect } = require('@playwright/test');
const AddRemoveElementsPage = require('../pages/AddRemoveElementsPage');

test.describe('Add/Remove Elements Tests', () => {
  let elementsPage;

  test.beforeEach(async ({ page }) => {
    elementsPage = new AddRemoveElementsPage(page);
    await elementsPage.navigateTo();
  });

  test('starts with no delete buttons', async () => {
    expect(await elementsPage.getDeleteButtonCount()).toBe(0);
  });

  test('can add one element', async () => {
    await elementsPage.clickAddElement();
    expect(await elementsPage.getDeleteButtonCount()).toBe(1);
  });

  test('can add multiple elements', async () => {
    await elementsPage.clickAddElement();
    await elementsPage.clickAddElement();
    await elementsPage.clickAddElement();
    expect(await elementsPage.getDeleteButtonCount()).toBe(3);
  });

  test('can remove element', async () => {
    await elementsPage.clickAddElement();
    await elementsPage.clickAddElement();
    await elementsPage.clickDeleteElement(0);
    expect(await elementsPage.getDeleteButtonCount()).toBe(1);
  });
});