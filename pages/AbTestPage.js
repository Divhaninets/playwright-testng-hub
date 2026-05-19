class AbTestPage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator('h3');
  }

  async navigateTo() {
    await this.page.goto('/abtest');
  }

  async getHeadingText() {
    return await this.heading.textContent();
  }
}

module.exports = AbTestPage;