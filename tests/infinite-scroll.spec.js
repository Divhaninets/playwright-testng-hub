const { test, expect } = require('@playwright/test');
const InfiniteScrollPage = require('../pages/InfiniteScrollPage');

test.describe('Infinite Scroll Tests', () => {
  let scrollPage;

  test.beforeEach(async ({ page }) => {
    scrollPage = new InfiniteScrollPage(page);
    await scrollPage.navigateTo();
  });

  test('loads more content on scroll', async () => {
    await scrollPage.page.waitForTimeout(1000);
    const initialCount = await scrollPage.getLoadedContentCount();
    
    await scrollPage.scrollDown();
    await scrollPage.page.waitForTimeout(2000);
    
    const newCount = await scrollPage.getLoadedContentCount();
    expect(newCount).toBeGreaterThan(initialCount);
  });
});