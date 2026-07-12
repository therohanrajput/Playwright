import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abcd');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('1234');
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').toBeVisible();
});