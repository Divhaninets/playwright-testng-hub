class DigestAuthPage {
  constructor(page) {
    this.page = page;
    this.successMessage = page.locator('.example p');
  }

  async navigateToWithAuth(username, password) {
    await this.page.goto(`https://${username}:${password}@the-internet.herokuapp.com/digest_auth`);
  }

  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }
}

module.exports = DigestAuthPage;