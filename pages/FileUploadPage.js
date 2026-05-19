class FileUploadPage {
  constructor(page) {
    this.page = page;
    this.fileInput = page.locator('#file-upload');
    this.submitButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async navigateTo() {
    await this.page.goto('/upload');
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
    await this.submitButton.click();
  }

  async getUploadedFileName() {
    return await this.uploadedFiles.textContent();
  }
}

module.exports = FileUploadPage;