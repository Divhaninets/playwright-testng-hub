class ShadowDomPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('/shadowdom');
  }

  async getShadowContentText() {
    const shadowHost = await this.page.locator('my-paragraph').first();
    const shadowContent = await shadowHost.locator('span[slot="my-text"]').textContent();
    return shadowContent;
  }
}

module.exports = ShadowDomPage;