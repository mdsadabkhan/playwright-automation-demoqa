# 🎭 Playwright Automation Framework - DemoQA

A comprehensive, production-ready Playwright Test Automation Framework built with TypeScript for scalable, maintainable, and reusable end-to-end testing. This framework demonstrates modern testing patterns and best practices for web automation.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

## 🌟 Framework Highlights

This framework is built around **DemoQA** (https://demoqa.com) - a comprehensive testing playground that provides various UI elements and interactions perfect for automation practice and framework development.

## 📋 Table of Contents

- [🎯 Key Features](#-key-features)
- [🏗️ Architecture Overview](#️-architecture-overview)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technology Stack](#️-technology-stack)
- [⚡ Quick Start](#-quick-start)
- [🎮 Running Tests](#-running-tests)
- [📊 Test Reporting](#-test-reporting)
- [🧪 Test Data Management](#-test-data-management)
- [📱 Cross-Browser & Mobile Testing](#-cross-browser--mobile-testing)
- [🔧 Configuration](#-configuration)
- [📚 Framework Components](#-framework-components)
- [🤝 Contributing](#-contributing)

## 🎯 Key Features

### Core Framework Capabilities

- ✅ **Page Object Model (POM)** - Clean separation of test logic & UI elements
- ✅ **Custom Utility Class** - Reusable actions (clicks, inputs, waits, API calls, etc.)
- ✅ **Fixtures & Hooks** - Centralized setup/teardown for consistent test execution  
- ✅ **Environment-Specific Configurations** - Multi-environment support (.env files)
- ✅ **Test Data Management** - JSON-based test data injection for easy maintenance
- ✅ **Allure Reporting** - Rich, interactive test execution reports
- ✅ **Cross-Browser Support** - Chromium, Firefox, WebKit
- ✅ **Mobile Emulation** - Execute tests in mobile viewports
- ✅ **Visual Testing** - Screenshot comparisons and visual regression testing
- ✅ **API Testing Integration** - Built-in API testing capabilities
- ✅ **CI/CD Ready** - GitHub Actions integration for automated testing

### Advanced Features

- 🔍 **OCR Integration** - CAPTCHA text recognition using Tesseract.js
- 📁 **File Upload/Download** - Comprehensive file handling utilities
- 🎨 **Dynamic UI Interactions** - Advanced element interactions and waits
- 📊 **Excel Integration** - Read/write test data from Excel files
- 🌐 **API Integration** - REST API testing with validation utilities
- 🎯 **Custom Assertions** - Extended assertion library for better validations

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Test Layer    │    │  Page Objects   │    │  Utilities      │
│                 │    │                 │    │                 │
│ • UI Tests      │───▶│ • HomePage      │───▶│ • Utils Class   │
│ • API Tests     │    │ • ElementsPage  │    │ • Fixtures      │
│ • Visual Tests  │    │ • FormsPage     │    │ • Helpers       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │    Configuration        │
                    │                         │
                    │ • playwright.config.ts  │
                    │ • Environment files     │
                    │ • Test data (JSON)      │
                    └─────────────────────────┘
```

## 📁 Project Structure

```
playwright-automation-demoqa/
├── 📁 .github/workflows/          # GitHub Actions CI/CD
├── 📁 allure-report/              # Generated Allure reports
├── 📁 allure-results/             # Allure test results
├── 📁 app_common/                 # Shared framework components
│   ├── 📁 environments/           # Environment configurations
│   ├── 📁 fixtures/               # Test fixtures and hooks
│   │   └── page.fixture.ts        # Page object fixtures
│   └── 📁 utils/                  # Utility classes
│       └── Utils.ts               # Core utilities class
├── 📁 src/                        # Source code
│   ├── 📁 pages/                  # Page Object Model
│   │   ├── HomePage.ts            # Main page object
│   │   ├── 📁 elementSection/     # Elements page objects
│   │   └── 📁 formSection/        # Forms page objects
│   ├── 📁 screenshots/            # Test screenshots
│   └── 📁 testData/               # Test data files
│       └── formData/              # Form-specific test data
├── 📁 tests/                      # Test files
│   └── 📁 ui/                     # UI test cases
├── 📁 tests-examples/             # Example tests
├── playwright.config.ts           # Playwright configuration
├── global-setup.ts               # Global test setup
└── package.json                  # Dependencies and scripts
```

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Playwright** | ^1.48.2 | End-to-end testing framework |
| **TypeScript** | ^5.6.3 | Type-safe JavaScript |
| **Node.js** | >=18.x | Runtime environment |
| **Allure** | ^3.1.0 | Test reporting |
| **Tesseract.js** | ^5.1.1 | OCR for CAPTCHA handling |
| **ExcelJS** | ^4.4.0 | Excel file operations |
| **Axios** | ^1.7.7 | HTTP client for API testing |

## ⚡ Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Git** (latest version)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mdsadabkhan/playwright-automation-demoqa.git
   cd playwright-automation-demoqa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

4. **Verify installation:**
   ```bash
   npx playwright test --version
   ```

## 🎮 Running Tests

### Basic Test Execution

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/ui/HomePageVerification.test.ts

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in specific browser
npx playwright test --project=chromium
```

### Pre-configured Scripts

```bash
# Run homepage tests
npm run homePage

# Run homepage tests with Allure reporting
npm run homePageWithReport

# Generate Allure report
npm run generateReport

# Open Allure report
npm run openReport

# Show Playwright HTML report
npm run showReport
```

### Advanced Test Execution

```bash
# Run tests in parallel
npx playwright test --workers=4

# Run tests with debugging
npx playwright test --debug

# Run specific test with grep pattern
npx playwright test --grep "form filling"

# Run tests with trace
npx playwright test --trace on
```

## 📊 Test Reporting

### Allure Reports

The framework includes comprehensive Allure reporting:

1. **Run tests with Allure reporter:**
   ```bash
   npm run homePageWithReport
   ```

2. **Generate and view reports:**
   ```bash
   npm run generateReport
   npm run openReport
   ```

### HTML Reports

Playwright's built-in HTML reports are also supported:

```bash
npm run showReport
```

### Report Features

- 📊 **Test execution statistics**
- 📸 **Screenshots on failure**
- 🎥 **Video recordings**
- 📋 **Step-by-step execution details**
- 🌐 **Cross-browser results**
- ⏱️ **Performance metrics**

## 🧪 Test Data Management

### JSON Test Data

Test data is stored in structured JSON files:

```javascript
// src/testData/formData/formData.json
{
  "Sadab": {
    "firstName": "Sadab",
    "lastName": "Khan", 
    "email": "sadab@example.com",
    "phoneNumber": "1234567890",
    "gender": "Male",
    "dateOfBirth": "15 Jan 1990",
    "currentAddress": "123 Test Street",
    "state": "NCR",
    "city": "Delhi"
  }
}
```

### Usage in Tests

```typescript
const formData = JSON.parse(JSON.stringify(require('../../src/testData/formData/formData.json')));
const firstName = formData.Sadab.firstName;
```

## 📱 Cross-Browser & Mobile Testing

### Browser Configuration

The framework supports multiple browsers:

```typescript
// playwright.config.ts
projects: [
  { name: 'chromium', use: { channel: 'chromium' } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
]
```

### Mobile Emulation

```typescript
{
  name: 'Galaxy S9+',
  use: {
    ...devices['Galaxy S9+'],
    isMobile: true,
    viewport: devices['Galaxy S9+'].viewport,
  }
}
```

## 🔧 Configuration

### Environment Configuration

Create environment-specific configurations:

```bash
# app_common/environments/.env.test
URL=https://demoqa.com
API_BASE_URL=https://demoqa.com/BookStore/v1
TIMEOUT=30000
```

### Playwright Configuration

Key configuration options in `playwright.config.ts`:

```typescript
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
```

## 📚 Framework Components

### Page Object Model

```typescript
class HomePage extends Utils {
  constructor(page: any) {
    super(page);
    this.elementsSection = 'div.category-cards>div:nth-of-type(1)';
  }

  async openElementsTab() {
    await this.clickOn(this.elementsSection);
  }
}
```

### Utilities Class

The `Utils` class provides 50+ utility methods:

- **Navigation:** `navigateTo()`, `getTitle()`, `getUrl()`
- **Interactions:** `clickOn()`, `enterText()`, `selectOption()`
- **Validations:** `verifyElementContainsText()`, `isElementVisible()`
- **Advanced:** `dragAndDrop()`, `uploadFile()`, `takeScreenshot()`
- **API Testing:** `verifyApiStatusCode()`

### Test Fixtures

Centralized fixture management:

```typescript
export const test = fixture.extend<TestFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  utils: async ({ page }, use) => {
    await use(new Utils(page));
  },
});
```

## 🎯 Test Examples

### UI Test Example

```typescript
test('Verify form filling functionality', async ({ 
  page, homePage, utils, formsTab, practiceForm 
}) => {
  await test.step('Open website', async () => {
    await homePage.openDemoQAUrl();
  });
  
  await test.step('Fill form', async () => {
    await practiceForm.fillFirstName(firstName);
    await practiceForm.selectGender('Male');
    await practiceForm.clickOnSubmitButton();
  });
});
```

### API Test Example

```typescript
test('Verify API response', async ({ request }) => {
  const response = await utils.verifyApiStatusCode(
    request, 
    '/Books', 
    200, 
    'GET'
  );
});
```

## 🚀 CI/CD Integration

### GitHub Actions

```yaml
name: Playwright Tests
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npx playwright install --with-deps
    - run: npx playwright test
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Maintain Page Object Model structure
- Add comprehensive test coverage
- Update documentation for new features
- Use conventional commit messages

## 📞 Support & Contact

- **Author:** Md Sadab Khan
- **Repository:** [playwright-automation-demoqa](https://github.com/mdsadabkhan/playwright-automation-demoqa)
- **Issues:** [GitHub Issues](https://github.com/mdsadabkhan/playwright-automation-demoqa/issues)

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

---

**⭐ If you find this framework helpful, please consider giving it a star!**

## 🔗 Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [DemoQA Website](https://demoqa.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Allure Framework](https://docs.qameta.io/allure/)

---

*Built with ❤️ for the testing community*
