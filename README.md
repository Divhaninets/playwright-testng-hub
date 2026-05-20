# Playwright TestNG Hub

A comprehensive Playwright automation framework in JavaScript/TypeScript, automating all 32 pages from [the-internet.herokuapp.com](https://the-internet.herokuapp.com).

This is a **reference library** — a complete, working framework showcasing Playwright's capabilities with the Page Object Model pattern.

---

## 📋 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Playwright** | Browser automation library |
| **JavaScript** | Programming language |
| **Node.js** | Runtime environment |
| **@playwright/test** | Test runner and assertion library |

## 📁 Project Structure

```
playwright-testng-hub/
│
├── pages/                  # Page Object classes
├── tests/                  # Test specifications
├── testdata/               # Test files (e.g., upload test file)
├── playwright.config.js    # Playwright configuration
├── package.json            # NPM dependencies
└── .gitignore             # Git ignore rules
```

## 🎯 Pages Automated (32)

| Page | Tests | Key Features |
|------|-------|--------------|
| **LoginPage** | 3 | Valid/invalid login scenarios |
| **CheckboxesPage** | 4 | Check/uncheck, state verification |
| **DropdownPage** | 2 | Select options, verify selection |
| **JavaScriptAlertsPage** | 4 | Alert, Confirm, Prompt handling |
| **MultipleWindowsPage** | 1 | Window switching, new tab handling |
| **FramesPage** | 2 | Nested frames, iframe interaction |
| **DragAndDropPage** | 2 | Drag and drop operations |
| **FileUploadPage** | 1 | File upload functionality |
| **HoversPage** | 3 | Hover actions, dynamic content |
| **DynamicLoadingPage** | 2 | Wait strategies, dynamic elements |
| **SortableTablesPage** | 4 | Table parsing, sorting, cell access |
| **KeyPressesPage** | 2 | Keyboard interactions |
| **ContextMenuPage** | 1 | Right-click actions |
| **AddRemoveElementsPage** | 4 | Dynamic element creation/deletion |
| **BrokenImagesPage** | 2 | Image validation |
| **NotificationMessagesPage** | 2 | Flash message handling |
| **RedirectPage** | 1 | Navigation, URL verification |
| **InputsPage** | 3 | Number input, validation |
| **AbTestPage** | 1 | A/B testing scenarios |
| **StatusCodesPage** | 4 | HTTP status code navigation |
| **TyposPage** | 1 | Text content verification |
| **FloatingMenuPage** | 3 | Sticky menu, scroll behavior |
| **HorizontalSliderPage** | 2 | Slider interaction, arrow keys |
| **GeolocationPage** | 1 | Geolocation API, permissions |
| **InfiniteScrollPage** | 1 | Scroll behavior, lazy loading |
| **ShadowDomPage** | 1 | Shadow DOM access |
| **BasicAuthPage** | 1 | Basic HTTP authentication |
| **DigestAuthPage** | 1 | Digest HTTP authentication |
| **FormAuthPage** | 1 | Form-based login/logout |

**Total: 58 Tests Passing**

---

## 🚀 Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/login.spec.js
```

### Run Tests in Headed Mode (see browser)
```bash
npx playwright test --headed
```

### View HTML Report
```bash
npx playwright show-report
```

---

## ⚙️ Configuration Highlights

**playwright.config.js:**
- **Base URL:** `https://the-internet.herokuapp.com`
- **Headless:** `false` (browser visible during test execution)
- **Timeout:** 30 seconds per test
- **Screenshots:** Captured on failure
- **Video:** Recorded on failure
- **Reporters:** HTML report + console list

---

## 🎓 Key Patterns Used

### Page Object Model (POM)
Every page has its own class with locators and methods:
```javascript
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    // ...
  }
}
```

### Async/Await
All Playwright actions are asynchronous:
```javascript
await page.goto('/login');
await button.click();
const text = await element.textContent();
```

### Built-in Waiting
Playwright auto-waits for elements to be actionable:
```JavaScript
await element.click(); // Waits for element to be visible, enabled, stable
```

### Dialog Handling
```JavaScript
page.on('dialog', async dialog => {
  await dialog.accept();
});
```

### Frame/Shadow DOM Access
```javascript
const frame = page.frameLocator('#mce_0_ifr');
await frame.locator('body').fill('text');
```

---

## 📊 Why Playwright?

✅ **Fast** — 5-10x faster than Selenium  
✅ **Reliable** — Built-in auto-wait eliminates flaky tests  
✅ **Modern** — Native async/await, no WebDriver needed  
✅ **Multi-browser** — Chromium, Firefox, WebKit out of the box  
✅ **Developer-friendly** — Great error messages, debugging tools  

---

## 📝 Notes

- One test is skipped (`Enter key` test) due to page limitations
- All tests run in parallel for speed
- Screenshots and videos captured automatically on failure
- Framework designed as a **learning reference**, not production code

---

## 🔗 Related Repository

- **Selenium TestNG Hub:** [selenium-testng-hub](https://github.com/Divhaninets/selenium-testng-hub) — Java-based automation of the same pages

---

**Built by Divhani Netshiombo**  
**Date:** May 19, 2026  
**Purpose:** Portfolio showcase & automation reference library
