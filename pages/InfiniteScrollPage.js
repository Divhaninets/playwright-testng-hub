class InfiniteScrollPage {
  constructor(page) {
    this.page = page;
    this.scrollContent = page.locator('.jscroll-added');
  }

  async navigateTo() {
    await this.page.goto('/infinite_scroll');
  }

  async scrollDown() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async getLoadedContentCount() {
    return await this.scrollContent.count();
  }

  async waitForNewContent(previousCount) {
    await this.page.waitForFunction(
      (count) => document.querySelectorAll('.jscroll-added').length > count,
      previousCount
    );
  }
}

module.exports = InfiniteScrollPage;