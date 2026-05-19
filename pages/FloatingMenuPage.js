class FloatingMenuPage {
  constructor(page) {
    this.page = page;
    this.menu = page.locator('#menu');
    this.homeLink = page.locator('#menu a:has-text("Home")');
  }

  async navigateTo() {
    await this.page.goto('/floating_menu');
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async isMenuVisible() {
    return await this.menu.isVisible();
  }

  async clickHome() {
    await this.homeLink.click();
  }
}

module.exports = FloatingMenuPage;