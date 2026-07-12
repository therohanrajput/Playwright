// async function sayHello() {
//     return "Hello, QA!";
// }

// sayHello().then(function (msg) {
//     console.log(msg)
// })

// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
//     return status
// }

// // getStatus();
// // use only when want to return a value
// getStatus().then(function (msg) {
//     console.log(msg)
// })

// async function testFlow() {
//     let step1 = await Promise.resolve("Opened Browser")
//     console.log(step1)

//     let step2 = await Promise.resolve("Clicked login")
//     console.log(step2)

//     let step3 = await Promise.resolve("Verified Dashboard")
//     console.log(step3)
// }

// testFlow()


// import { test, expect } from '@playwright/test';

// test('logs in with valid credentials @p0', async ({ page }) => {
//     await test.step('Login as standard_user', async () => {
//         log.info('Logging in as standard_user');
//         await loginPage.loginAs('standard_user', 'tta_secret');
//     });

//     await test.step('Verify login form is no longer shown', async () => {
//         log.info('Asserting login form is hidden after login');
//         await expect(page.locator('[data-test="login-button"]')).toBeHidden();
//     });
// });



// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     await expect(page).toHaveTitle(/Playwright/);
// });