class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.flash.success');
    this.errorMessage = page.locator('.flash.error');
  }

  async navigateTo() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isSuccessMessageVisible() {
    return await this.successMessage.isVisible();
  }
}

module.exports = LoginPage;