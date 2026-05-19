class AddRemoveElementsPage {
  constructor(page) {
    this.page = page;
    this.addButton = page.locator('button:has-text("Add Element")');
    this.deleteButtons = page.locator('.added-manually');
  }

  async navigateTo() {
    await this.page.goto('/add_remove_elements/');
  }

  async clickAddElement() {
    await this.addButton.click();
  }

  async clickDeleteElement(index = 0) {
    await this.deleteButtons.nth(index).click();
  }

  async getDeleteButtonCount() {
    return await this.deleteButtons.count();
  }
}

module.exports = AddRemoveElementsPage;