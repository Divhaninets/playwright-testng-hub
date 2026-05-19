class BasicAuthPage {
  constructor(page) {
    this.page = page;
    this.successMessage = page.locator('.example p');
  }

  async navigateToWithAuth(username, password) {
    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`);
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

module.exports = BasicAuthPage;