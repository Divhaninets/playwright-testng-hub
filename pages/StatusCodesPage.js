class StatusCodesPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('/status_codes');
  }

  async clickStatusCode(code) {
    await this.page.locator(`a:has-text("${code}")`).click();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async getPageText() {
    return await this.page.locator('body').textContent();
  }
}

module.exports = StatusCodesPage;