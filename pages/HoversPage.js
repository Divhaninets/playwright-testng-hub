class HoversPage {
  constructor(page) {
    this.page = page;
    this.figures = page.locator('.figure');
  }

  async navigateTo() {
    await this.page.goto('/hovers');
  }

  async hoverOverFigure(index) {
    await this.figures.nth(index).hover();
  }

  async getFigureCaptionText(index) {
    return await this.figures.nth(index).locator('.figcaption h5').textContent();
  }

  async isCaptionVisible(index) {
    return await this.figures.nth(index).locator('.figcaption').isVisible();
  }
}

module.exports = HoversPage;