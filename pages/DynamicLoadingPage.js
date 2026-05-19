class DynamicLoadingPage {
  constructor(page) {
    this.page = page;
    this.startButton = page.locator('#start button');
    this.loadingIndicator = page.locator('#loading');
    this.finishText = page.locator('#finish h4');
  }

  async navigateToExample1() {
    await this.page.goto('/dynamic_loading/1');
  }

  async navigateToExample2() {
    await this.page.goto('/dynamic_loading/2');
  }

  async clickStart() {
    await this.startButton.click();
  }

  async waitForLoadingToDisappear() {
    await this.loadingIndicator.waitFor({ state: 'hidden' });
  }

  async getFinishText() {
    return await this.finishText.textContent();
  }

  async isFinishTextVisible() {
    return await this.finishText.isVisible();
  }
}

module.exports = DynamicLoadingPage;