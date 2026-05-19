class RedirectPage {
  constructor(page) {
    this.page = page;
    this.redirectLink = page.locator('#redirect');
  }

  async navigateTo() {
    await this.page.goto('/redirector');
  }

  async clickRedirect() {
    await this.redirectLink.click();
  }

  async getCurrentUrl() {
    return this.page.url();
  }
}

module.exports = RedirectPage;