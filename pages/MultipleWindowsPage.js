class MultipleWindowsPage {
  constructor(page) {
    this.page = page;
    this.clickHereLink = page.locator('a:has-text("Click Here")');
  }

  async navigateTo() {
    await this.page.goto('/windows');
  }

async clickLink() {
    await this.clickHereLink.click();
  }
}

module.exports = MultipleWindowsPage;