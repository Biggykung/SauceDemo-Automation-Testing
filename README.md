# SauceDemo Automation Testing

[![Playwright Tests](https://github.com/Biggykung/SauceDemo-Automation-Testing/actions/workflows/playwright.yml/badge.svg)](https://github.com/Biggykung/SauceDemo-Automation-Testing/actions/workflows/playwright.yml)

An end-to-end test automation project for [saucedemo.com](https://www.saucedemo.com), built with Playwright (JavaScript). It validates the core e-commerce user journey (login, cart, and checkout) and runs automatically on every push and pull request to `main` through GitHub Actions CI/CD.

## Table of Contents

- [About This Project](#about-this-project)
- [Test Coverage](#test-coverage)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Repository Structure](#repository-structure)

## About This Project

This repository contains automated UI tests for SauceDemo, a sample e-commerce web application. The tests follow a real user journey: Login → Add Items to Cart → Checkout → Order Confirmation.

The work demonstrates test automation, end-to-end UI testing, and CI/CD integration, with every push and pull request to `main` automatically verified by a GitHub Actions pipeline.

## Test Coverage

Test results: **4 test cases × 3 browsers (Chromium, Firefox, WebKit) = 12 test runs** per build, all defined in `tests/checkout.spec.js`.

| Test | What it verifies |
| --- | --- |
| Login | `standard_user` logs in and lands on the Products page |
| Cart | Adding 3 items updates the cart badge to the correct count |
| Checkout (happy path) | Full flow from cart to "Thank you for your order!", and the order total equals item total + tax (checked numerically) |
| Checkout (negative) | Submitting empty shipping info shows a validation error |

CI/CD: GitHub Actions runs the whole suite on every push and pull request to `main` (Node 20, 2 retries on CI), then uploads the Playwright HTML report as a build artifact kept for 30 days.

## Technology Stack

| Tool | Purpose |
| --- | --- |
| Playwright | End-to-end browser automation and test runner |
| JavaScript (Node.js) | Test scripting language and runtime |
| GitHub Actions | CI/CD pipeline that executes tests on every push |
| Git & GitHub | Version control and repository hosting |

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/Biggykung/SauceDemo-Automation-Testing.git
cd SauceDemo-Automation-Testing
npm install
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

SauceDemo provides public demo accounts on its login page (e.g., `standard_user`), so no extra setup is needed.

## Repository Structure

```
SauceDemo-Automation-Testing/
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions CI/CD pipeline
├── tests/
│   └── checkout.spec.js      # Login, cart and checkout test cases
├── playwright.config.js      # Playwright configuration
├── package.json
├── LICENSE
└── README.md
```

## Author

Paponwat Cheawrongroj, [@Biggykung](https://github.com/Biggykung)

## 👤 Author

**Biggykung**
GitHub: [@Biggykung](https://github.com/Biggykung)

