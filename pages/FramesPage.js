class FramesPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToNestedFrames() {
    await this.page.goto('/nested_frames');
  }

  async navigateToIFrame() {
    await this.page.goto('/iframe');
  }

  async getTopFrameText() {
    const topFrame = this.page.frameLocator('frame[name="frame-top"]');
    const leftFrame = topFrame.frameLocator('frame[name="frame-left"]');
    return await leftFrame.locator('body').textContent();
  }

  async getIFrameText() {
    const iframe = this.page.frameLocator('#mce_0_ifr');
    return await iframe.locator('body#tinymce p').textContent();
  }

async typeInIFrame(text) {
  const iframe = this.page.frameLocator('#mce_0_ifr');
  await iframe.locator('body#tinymce').click();
  await iframe.locator('body#tinymce').press('Control+A');
  await iframe.locator('body#tinymce').fill(text);
}
}

module.exports = FramesPage;