const { test, expect } = require('@playwright/test');
const HoversPage = require('../pages/HoversPage');

test.describe('Hovers Tests', () => {
  let hoversPage;

  test.beforeEach(async ({ page }) => {
    hoversPage = new HoversPage(page);
    await hoversPage.navigateTo();
  });

  test('hovering over figure 1 shows caption', async () => {
    await hoversPage.hoverOverFigure(0);
    expect(await hoversPage.isCaptionVisible(0)).toBe(true);
    expect(await hoversPage.getFigureCaptionText(0)).toContain('user1');
  });

  test('hovering over figure 2 shows caption', async () => {
    await hoversPage.hoverOverFigure(1);
    expect(await hoversPage.isCaptionVisible(1)).toBe(true);
    expect(await hoversPage.getFigureCaptionText(1)).toContain('user2');
  });

  test('hovering over figure 3 shows caption', async () => {
    await hoversPage.hoverOverFigure(2);
    expect(await hoversPage.isCaptionVisible(2)).toBe(true);
    expect(await hoversPage.getFigureCaptionText(2)).toContain('user3');
  });
});