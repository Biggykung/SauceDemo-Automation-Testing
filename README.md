# 🧪 SauceDemo Automation Testing

An end-to-end test automation project for [saucedemo.com](https://www.saucedemo.com), built with Playwright (JavaScript). It validates the core e-commerce user journey (login, cart, and checkout) and runs automatically on every push through GitHub Actions CI/CD.

## 📑 Table of Contents
- [About This Project](#-about-this-project)
- [Key Features Snapshot](#-key-features-snapshot)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Repository Structure](#-repository-structure)

---

## 💡 About This Project

This repository contains automated UI tests for SauceDemo, a sample e-commerce web application. The tests follow a real user journey: *Login → Add Items to Cart → Checkout → Order Confirmation*.

The work demonstrates proficiency in test automation, end-to-end UI testing, and CI/CD integration, with every code push automatically verified by a GitHub Actions pipeline.

## 🎯 Key Features Snapshot

| Feature | Domain | Core Functionality |
| :--- | :--- | :--- |
| 🔐 **Login Testing** | Authentication | Verifies successful login with valid credentials and proper error handling for invalid or locked-out users. |
| 🛒 **Cart Testing** | Shopping Flow | Validates adding and removing products and confirms that the cart contents stay accurate. |
| 💳 **Checkout Testing** | Transaction Flow | Covers the full checkout process, from entering customer information to order completion. |
| ⚙️ **CI/CD Integration** | DevOps | GitHub Actions runs the entire test suite on every push, catching regressions early. |
| 📊 **Test Reporting** | Quality Assurance | Generates a Playwright HTML report showing pass/fail results for each test run. |

## 💻 Technology Stack

| Tool | Purpose |
| :--- | :--- |
| **Playwright** | End-to-end browser automation and test runner. |
| **JavaScript (Node.js)** | Test scripting language and runtime. |
| **GitHub Actions** | CI/CD pipeline that executes tests on every push. |
| **Git & GitHub** | Version control and repository hosting. |

## 🚀 Getting Started

### Prerequisites
- Node.js
- npm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Biggykung/SauceDemo-Automation-Testing.git
   cd SauceDemo-Automation-Testing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

### Running the Tests

```bash
# Run all tests
npx playwright test

# Run tests with the browser visible
npx playwright test --headed

# Open the HTML report
npx playwright show-report
```

> 💡 SauceDemo provides public demo accounts on its login page (e.g., `standard_user`), so no extra setup is needed to run the tests.

## 📂 Repository Structure

```text
SauceDemo-Automation-Testing/
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions CI/CD pipeline
├── tests/
│   ├── login.spec.js         # Login test cases
│   ├── cart.spec.js          # Cart test cases
│   └── checkout.spec.js      # Checkout test cases
├── playwright.config.js      # Playwright configuration
├── package.json
└── README.md
```

## 👤 Author

**Biggykung**
GitHub: [@Biggykung](https://github.com/Biggykung)

