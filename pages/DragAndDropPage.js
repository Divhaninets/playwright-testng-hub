class DragAndDropPage {
  constructor(page) {
    this.page = page;
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async navigateTo() {
    await this.page.goto('/drag_and_drop');
  }

  async getColumnAText() {
    return await this.columnA.locator('header').textContent();
  }

  async getColumnBText() {
    return await this.columnB.locator('header').textContent();
  }

  async dragAtoB() {
    await this.columnA.dragTo(this.columnB);
  }
}

module.exports = DragAndDropPage;