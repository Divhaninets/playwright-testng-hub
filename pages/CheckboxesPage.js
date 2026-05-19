class CheckboxesPage {
  constructor(page) {
    this.page = page;
    this.checkboxes = page.locator('input[type="checkbox"]');
  }

  async navigateTo() {
    await this.page.goto('/checkboxes');
  }

  async checkCheckbox(index) {
    const checkbox = this.checkboxes.nth(index);
    if (!(await checkbox.isChecked())) {
      await checkbox.check();
    }
  }

  async uncheckCheckbox(index) {
    const checkbox = this.checkboxes.nth(index);
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
    }
  }

  async isCheckboxChecked(index) {
    return await this.checkboxes.nth(index).isChecked();
  }

  async getCheckboxCount() {
    return await this.checkboxes.count();
  }
}

module.exports = CheckboxesPage;