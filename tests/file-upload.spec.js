const { test, expect } = require('@playwright/test');
const FileUploadPage = require('../pages/FileUploadPage');
const path = require('path');

test.describe('File Upload Tests', () => {
  let uploadPage;

  test.beforeEach(async ({ page }) => {
    uploadPage = new FileUploadPage(page);
    await uploadPage.navigateTo();
  });

  test('can upload a file', async () => {
    const filePath = path.join(__dirname, '..', 'testdata', 'testfile.txt');
    await uploadPage.uploadFile(filePath);
    
    const uploadedFileName = await uploadPage.getUploadedFileName();
    expect(uploadedFileName).toContain('testfile.txt');
  });
});