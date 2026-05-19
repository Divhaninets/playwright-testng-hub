const { test, expect } = require('@playwright/test');
const HorizontalSliderPage = require('../pages/HorizontalSliderPage');

test.describe('Horizontal Slider Tests', () => {
  let sliderPage;

  test.beforeEach(async ({ page }) => {
    sliderPage = new HorizontalSliderPage(page);
    await sliderPage.navigateTo();
  });

  test('can set slider to specific value', async () => {
    await sliderPage.setSliderValue(3);
    expect(await sliderPage.getSliderValue()).toBe('3');
  });

  test('can move slider with arrow keys', async () => {
    await sliderPage.slider.click();
    await sliderPage.moveSliderRight(2);
    const value = await sliderPage.getSliderValue();
    expect(parseFloat(value)).toBeGreaterThan(0);
  });
});