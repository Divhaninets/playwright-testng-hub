const { test, expect } = require('@playwright/test');
const BrokenImagesPage = require('../pages/BrokenImagesPage');

test.describe('Broken Images Tests', () => {
  let imagesPage;

  test.beforeEach(async ({ page }) => {
    imagesPage = new BrokenImagesPage(page);
    await imagesPage.navigateTo();
  });

  test('page has 4 images', async () => {
    expect(await imagesPage.getImageCount()).toBe(4);
  });

  test('can detect broken images', async () => {
    const image1Broken = await imagesPage.isImageBroken(0);
    const image2Broken = await imagesPage.isImageBroken(1);
    const image3Broken = await imagesPage.isImageBroken(2);
    
    // At least one image should be broken on this page
    const hasBrokenImage = image1Broken || image2Broken || image3Broken;
    expect(hasBrokenImage).toBe(true);
  });
});