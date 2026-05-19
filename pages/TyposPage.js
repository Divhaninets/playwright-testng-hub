class TyposPage {
  constructor(page) {
    this.page = page;
    this.content = page.locator('.example p').nth(1);
  }

  async navigateTo() {
    await this.page.goto('/typos');
  }

  async getContentText() {
    return await this.content.textContent();
  }
}

module.exports = TyposPage;