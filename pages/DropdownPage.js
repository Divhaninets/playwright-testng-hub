class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }

  async navigateTo() {
    await this.page.goto('/dropdown');
  }

  async selectOption(value) {
    await this.dropdown.selectOption(value);
  }

  async getSelectedValue() {
    return await this.dropdown.inputValue();
  }

  async getSelectedText() {
    const selectedOption = this.dropdown.locator('option:checked');
    return await selectedOption.textContent();
  }
}

module.exports = DropdownPage;