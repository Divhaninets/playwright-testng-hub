const { test, expect } = require('@playwright/test');
const StatusCodesPage = require('../pages/StatusCodesPage');

test.describe('Status Codes Tests', () => {
  let statusPage;

  test.beforeEach(async ({ page }) => {
    statusPage = new StatusCodesPage(page);
    await statusPage.navigateTo();
  });

  test('can navigate to 200 status code', async () => {
    await statusPage.clickStatusCode('200');
    const url = await statusPage.getCurrentUrl();
    expect(url).toContain('/status_codes/200');
  });

  test('can navigate to 301 status code', async () => {
    await statusPage.clickStatusCode('301');
    const url = await statusPage.getCurrentUrl();
    expect(url).toContain('/status_codes/301');
  });

  test('can navigate to 404 status code', async () => {
    await statusPage.clickStatusCode('404');
    const url = await statusPage.getCurrentUrl();
    expect(url).toContain('/status_codes/404');
  });

  test('can navigate to 500 status code', async () => {
    await statusPage.clickStatusCode('500');
    const url = await statusPage.getCurrentUrl();
    expect(url).toContain('/status_codes/500');
  });
});