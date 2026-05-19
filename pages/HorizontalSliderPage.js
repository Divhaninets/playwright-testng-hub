class HorizontalSliderPage {
  constructor(page) {
    this.page = page;
    this.slider = page.locator('input[type="range"]');
    this.sliderValue = page.locator('#range');
  }

  async navigateTo() {
    await this.page.goto('/horizontal_slider');
  }

  async setSliderValue(value) {
    await this.slider.fill(value.toString());
  }

  async getSliderValue() {
    return await this.sliderValue.textContent();
  }

  async moveSliderRight(steps = 1) {
    for (let i = 0; i < steps; i++) {
      await this.slider.press('ArrowRight');
    }
  }
}

module.exports = HorizontalSliderPage;