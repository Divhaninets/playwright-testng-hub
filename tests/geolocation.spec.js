const { test, expect } = require('@playwright/test');
const GeolocationPage = require('../pages/GeolocationPage');

test.describe('Geolocation Tests', () => {
  let geoPage;

  test.beforeEach(async ({ page, context }) => {
    // Grant geolocation permission
    await context.grantPermissions(['geolocation']);
    // Set a mock location
    await context.setGeolocation({ latitude: 40.7128, longitude: -74.0060 });
    
    geoPage = new GeolocationPage(page);
    await geoPage.navigateTo();
  });

  test('can get geolocation', async () => {
    await geoPage.clickWhereAmI();
    await geoPage.page.waitForTimeout(1000);
    
    const lat = await geoPage.getLatitude();
    const long = await geoPage.getLongitude();
    
    expect(lat).toBeTruthy();
    expect(long).toBeTruthy();
  });
});