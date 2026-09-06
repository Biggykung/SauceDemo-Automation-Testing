const { test, expect } = require('@playwright/test');

test.describe('Swag Labs Checkout Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
  });

  test('should login successfully', async ({ page }) => {
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('should add multiple items to cart and see correct count', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('3');
  });

  test('should complete checkout and verify total price', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart/);

    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'John');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '10110');
    await page.click('[data-test="continue"]');

    const itemTotalText = await page.locator('.summary_subtotal_label').textContent();
    const taxText = await page.locator('.summary_tax_label').textContent();
    const totalText = await page.locator('.summary_total_label').textContent();

    const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
    const tax = parseFloat(taxText.replace('Tax: $', ''));
    const total = parseFloat(totalText.replace('Total: $', ''));

    expect(total).toBeCloseTo(itemTotal + tax, 2);


    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('should fail checkout if shipping info incomplete', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.click('[data-test="continue"]'); // ไม่กรอกข้อมูลเลย

    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toBeVisible();
  });

});
