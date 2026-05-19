class JavaScriptAlertsPage {
  constructor(page) {
    this.page = page;
    this.jsAlertButton = page.locator('button:has-text("Click for JS Alert")');
    this.jsConfirmButton = page.locator('button:has-text("Click for JS Confirm")');
    this.jsPromptButton = page.locator('button:has-text("Click for JS Prompt")');
    this.result = page.locator('#result');
  }

  async navigateTo() {
    await this.page.goto('/javascript_alerts');
  }

  async clickJSAlert() {
    await this.jsAlertButton.click();
  }

  async clickJSConfirm() {
    await this.jsConfirmButton.click();
  }

  async clickJSPrompt() {
    await this.jsPromptButton.click();
  }

  async getResultText() {
    return await this.result.textContent();
  }
}

module.exports = JavaScriptAlertsPage;