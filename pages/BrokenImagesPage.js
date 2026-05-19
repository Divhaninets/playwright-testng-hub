class BrokenImagesPage {
  constructor(page) {
    this.page = page;
    this.images = page.locator('img');
  }

  async navigateTo() {
    await this.page.goto('/broken_images');
  }

  async getImageCount() {
    return await this.images.count();
  }

  async isImageBroken(index) {
    const img = this.images.nth(index);
    return await img.evaluate(el => !el.complete || el.naturalHeight === 0);
  }
}

module.exports = BrokenImagesPage;