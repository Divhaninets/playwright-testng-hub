const { test, expect } = require('@playwright/test');
const NotificationMessagesPage = require('../pages/NotificationMessagesPage');

test.describe('Notification Messages Tests', () => {
  let notificationPage;

  test.beforeEach(async ({ page }) => {
    notificationPage = new NotificationMessagesPage(page);
    await notificationPage.navigateTo();
  });

  test('displays notification after clicking link', async () => {
    await notificationPage.clickHere();
    expect(await notificationPage.isNotificationVisible()).toBe(true);
  });

  test('notification contains expected text', async () => {
    await notificationPage.clickHere();
    const text = await notificationPage.getNotificationText();
    // The page randomly shows success or error messages
    const hasValidMessage = text.includes('Action successful') || 
                           text.includes('Action unsuccesful');
    expect(hasValidMessage).toBe(true);
  });
});