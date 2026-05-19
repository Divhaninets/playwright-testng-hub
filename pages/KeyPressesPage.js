class KeyPressesPage {
  constructor(page) {
    this.page = page;
    this.inputField = page.locator('#target');
    this.result = page.locator('#result');
  }

  async navigateTo() {
    await this.page.goto('/key_presses');
  }

async pressKey(key) {
  await this.inputField.click();
  await this.inputField.press(key);
}

  async getResultText() {
    return await this.result.textContent();
  }
}

module.exports = KeyPressesPage;