## Project Structure

```
selenium-testng-hub/
├── src/
│   ├── main/java/com/divhani/
│   │   ├── locators/          # All 8 locator types documented
│   │   ├── utils/             # Reusable helpers (WaitUtil)
│   │   └── java_notes/        # Java fundamentals reference
│   └── test/
│       ├── java/com/divhani/
│       │   ├── base/          # BaseTest — driver setup & teardown
│       │   ├── pages/         # Page Object classes
│       │   ├── theinternet/   # Tests for the-internet.herokuapp.com
│       │   ├── demoqa/        # Tests for demoqa.com
│       │   ├── uitestingplayground/ # Tests for uitestingplayground.com
│       │   └── utils/         # ExtentReportManager, ScreenshotUtil
│       ├── resources/
│       │   ├── testng.xml     # Test suite configuration
│       │   └── log4j2.xml     # Logging configuration
│       └── testdata/          # Test files for upload tests
└── pom.xml
```

## Automation Solutions

### the-internet.herokuapp.com

| Page | Concept | Tests |
|------|---------|-------|
| Form Authentication | Login, assertions | 2 |
| Checkboxes | isSelected, check, uncheck | 3 |
| Dropdown | Select class — text, value, index | 3 |
| JavaScript Alerts | alert, confirm, prompt | 4 |
| Multiple Windows | window handles, switchTo | 3 |
| Frames & iFrames | switchTo frame, defaultContent | 3 |
| Drag and Drop | Actions class | 1 |
| File Upload | sendKeys with file path | 2 |
| Hovers | moveToElement | 3 |
| Dynamic Loading | Explicit waits in practice | 2 |
| Sortable Tables | Table traversal, cell values | 4 |
| Key Presses | Keys class | 3 |
| Context Menu | Right click, contextClick | 1 |
| Add/Remove Elements | Dynamic DOM | 4 |
| Broken Images | JavaScript execution | 3 |
| Notification Messages | Dynamic messages | 2 |
| Redirect Link | URL verification | 2 |
| Horizontal Slider | Arrow keys on range input | 2 |
| Geolocation | JavaScript geolocation mock | 2 |
| Infinite Scroll | JavaScript scroll execution | 2 |
| Shadow DOM | getShadowRoot() Selenium 4 | 2 |
| A/B Testing | Page variant verification | 1 |
| Status Codes | URL and content verification | 3 |
| Typos | Dynamic text content | 2 |
| Floating Menu | JavaScript scroll, fixed elements | 2 |
| Inputs | Number input, arrow key control | 3 |
| Key Presses | Keys class — TAB, ESCAPE, ARROW | 3 |
| Context Menu | Right click, contextClick() | 1 |
| Add/Remove Elements | Dynamic DOM manipulation | 4 |
| Broken Images | JavaScript naturalWidth check | 3 |
| Notification Messages | Dynamic flash messages | 2 |
| Redirect Link | URL verification after redirect | 2 |
