// Basic Async and Await

async function getTestResult() {
    return "Pass";
}

// console.log(getTestResult()) 
getTestResult().then(function (resolve) {
    console.log(resolve);
})


// import { test, expect } from '@playwright/test';


// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);

//     let r = page.locator();

// });