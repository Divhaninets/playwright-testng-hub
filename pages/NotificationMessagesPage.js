class NotificationMessagesPage {
  constructor(page) {
    this.page = page;
    this.clickHereLink = page.locator('a:has-text("Click here")');
    this.notification = page.locator('#flash');
  }

  async navigateTo() {
    await this.page.goto('/notification_message_rendered');
  }

  async clickHere() {
    await this.clickHereLink.click();
  }

  async getNotificationText() {
    return await this.notification.textContent();
  }

  async isNotificationVisible() {
    return await this.notification.isVisible();
  }
}

module.exports = NotificationMessagesPage;