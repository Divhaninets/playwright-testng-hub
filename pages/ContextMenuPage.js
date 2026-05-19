class ContextMenuPage {
  constructor(page) {
    this.page = page;
    this.hotSpot = page.locator('#hot-spot');
  }

  async navigateTo() {
    await this.page.goto('/context_menu');
  }

  async rightClickHotSpot() {
    await this.hotSpot.click({ button: 'right' });
  }
}

module.exports = ContextMenuPage;