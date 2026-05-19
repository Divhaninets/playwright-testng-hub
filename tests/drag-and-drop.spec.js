const { test, expect } = require('@playwright/test');
const DragAndDropPage = require('../pages/DragAndDropPage');

test.describe('Drag and Drop Tests', () => {
  let dragDropPage;

  test.beforeEach(async ({ page }) => {
    dragDropPage = new DragAndDropPage(page);
    await dragDropPage.navigateTo();
  });

  test('columns start with A and B', async () => {
    expect(await dragDropPage.getColumnAText()).toBe('A');
    expect(await dragDropPage.getColumnBText()).toBe('B');
  });

  test('can drag A to B', async () => {
    await dragDropPage.dragAtoB();
    expect(await dragDropPage.getColumnAText()).toBe('B');
    expect(await dragDropPage.getColumnBText()).toBe('A');
  });
});