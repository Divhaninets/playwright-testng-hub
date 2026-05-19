const { test, expect } = require('@playwright/test');
const ContextMenuPage = require('../pages/ContextMenuPage');

test.describe('Context Menu Tests', () => {
  let contextPage;

  test.beforeEach(async ({ page }) => {
    contextPage = new ContextMenuPage(page);
    await contextPage.navigateTo();
  });

  test('right click triggers alert', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('You selected a context menu');
      await dialog.accept();
    });
    
    await contextPage.rightClickHotSpot();
  });
});