class InputsPage {
  constructor(page) {
    this.page = page;
    this.numberInput = page.locator('input[type="number"]');
  }

  async navigateTo() {
    await this.page.goto('/inputs');
  }

  async enterNumber(number) {
    await this.numberInput.fill(number.toString());
  }

  async getInputValue() {
    return await this.numberInput.inputValue();
  }

  async clearInput() {
    await this.numberInput.clear();
  }
}

module.exports = InputsPage;